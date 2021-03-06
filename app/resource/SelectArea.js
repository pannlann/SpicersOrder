Ext.define("SpicersOrder.resource.SelectArea", {
	extend : Ext.field.TextArea,
	xtype : "selectareafield",
	alternateClassName : "Ext.form.SelectArea",
	config : {
		ui : "select",
		valueField : "value",
		displayField : "text",
		store : null,
		options : null,
		hiddenName : null,
		component : {
			useMask : true
		},
		clearIcon : false,
		usePicker : "auto",
		autoSelect : true,
		defaultPhonePickerConfig : null,
		defaultTabletPickerConfig : null,
		name : "picker",
		pickerSlotAlign : "center"
	},
	platformConfig : [{
		theme : ["Windows"],
		pickerSlotAlign : "left"
	}, {
		theme : ["Tizen"],
		usePicker : false
	}],
	initialize : function() {
		var b = this, a = b.getComponent();
		b.callParent();
		a.on({
			scope : b,
			masktap : "onMaskTap"
		});
		a.doMaskTap = Ext.emptyFn;
		if (Ext.browser.is.AndroidStock2) {
			a.input.dom.disabled = true
		}
		if (Ext.theme.is.Blackberry) {
			this.label.on({
				scope : b,
				tap : "onFocus"
			})
		}
	},
	getElementConfig : function() {
		if (Ext.theme.is.Blackberry) {
			var a = Ext.baseCSSPrefix;
			return {
				reference : "element",
				className : "x-container",
				children : [{
					reference : "innerElement",
					cls : a + "component-outer",
					children : [{
						reference : "label",
						cls : a + "form-label",
						children : [{
							reference : "labelspan",
							tag : "span"
						}]
					}]
				}]
			}
		} else {
			return this.callParent(arguments)
		}
	},
	updateDefaultPhonePickerConfig : function(b) {
		var a = this.picker;
		if (a) {
			a.setConfig(b)
		}
	},
	updateDefaultTabletPickerConfig : function(a) {
		var b = this.listPanel;
		if (b) {
			b.setConfig(a)
		}
	},
	applyUsePicker : function(a) {
		if (a == "auto") {
			a = (Ext.os.deviceType == "Phone")
		}
		return Boolean(a)
	},
	syncEmptyCls : Ext.emptyFn,
	applyValue : function(d) {
		var a = d, c, b;
		this.getOptions();
		b = this.getStore();
		if ((d != undefined && !d.isModel) && b) {
			c = b.find(this.getValueField(), d, null, null, null, true);
			if (c == -1) {
				c = b.find(this.getDisplayField(), d, null, null, null, true)
			}
			a = b.getAt(c)
		}
		return a
	},
	updateValue : function(b, a) {
		this.record = b;
		this.callParent([(b && b.isModel) ? b.get(this.getDisplayField()) : ""])
	},
	getValue : function() {
		var a = this.record;
		return (a && a.isModel) ? a.get(this.getValueField()) : null
	},
	getRecord : function() {
		return this.record
	},
	getPhonePicker : function() {
		var a = this.getDefaultPhonePickerConfig();
		if (!this.picker) {
			this.picker = Ext.create("Ext.picker.Picker", Ext.apply({
				slots : [{
					align : this.getPickerSlotAlign(),
					name : this.getName(),
					valueField : this.getValueField(),
					displayField : this.getDisplayField(),
					value : this.getValue(),
					store : this.getStore()
				}],
				listeners : {
					change : this.onPickerChange,
					scope : this
				}
			}, a))
		}
		return this.picker
	},
	getTabletPicker : function() {
		var a = this.getDefaultTabletPickerConfig();
		if (!this.listPanel) {
			this.listPanel = Ext.create("Ext.Panel", Ext.apply({
				left : 0,
				top : 0,
				modal : true,
				cls : Ext.baseCSSPrefix + "select-overlay",
				layout : "fit",
				hideOnMaskTap : true,
				width : Ext.os.is.Phone ? "14em" : "18em",
				height : (Ext.os.is.BlackBerry && Ext.os.version.getMajor() === 10) ? "12em" : (Ext.os.is.Phone ? "12.5em" : "22em"),
				items : {
					xtype : "list",
					store : this.getStore(),
					itemTpl : '<span class="x-list-label">{' + this.getDisplayField() + ":htmlEncode}</span>",
					listeners : {
						select : this.onListSelect,
						itemtap : this.onListTap,
						scope : this
					}
				}
			}, a))
		}
		return this.listPanel
	},
	onMaskTap : function() {
		this.onFocus();
		return false
	},
	showPicker : function() {
		var f = this, j = f.getStore(), i = f.getValue();
		if (!j || j.getCount() === 0) {
			return
		}
		if (f.getReadOnly()) {
			return
		}
		f.isFocused = true;
		if (f.getUsePicker()) {
			var d = f.getPhonePicker(), a = f.getName(), h = {};
			h[a] = i;
			d.setValue(h);
			if (!d.getParent()) {
				Ext.Viewport.add(d)
			}
			d.show()
		} else {
			var g = f.getTabletPicker(), e = g.down("list"), c, b;
			if (!g.getParent()) {
				Ext.Viewport.add(g)
			}
			g.showBy(f.getComponent(), null);
			if (i || f.getAutoSelect()) {
				j = e.getStore();
				c = j.find(f.getValueField(), i, null, null, null, true);
				b = j.getAt(c);
				if (b) {
					e.select(b, null, true)
				}
			}
		}
	},
	onListSelect : function(c, a) {
		var b = this;
		if (a) {
			b.setValue(a)
		}
	},
	onListTap : function() {
		this.listPanel.hide({
			type : "fade",
			out : true,
			scope : this
		})
	},
	onPickerChange : function(d, f) {
		var e = this, g = f[e.getName()], b = e.getStore(), c = b.find(e.getValueField(), g, null, null, null, true), a = b.getAt(c);
		e.setValue(a)
	},
	onChange : function(f, h, e) {
		var g = this, b = g.getStore(), d = (b) ? b.find(g.getDisplayField(), e, null, null, null, true) : -1, c = g.getValueField(), a = (b) ? b.getAt(d) : null;
		e = (a) ? a.get(c) : null;
		g.fireEvent("change", g, g.getValue(), e)
	},
	updateOptions : function(b) {
		var a = this.getStore();
		if (!a) {
			this.setStore(true);
			a = this._store
		}
		if (!b) {
			a.clearData()
		} else {
			a.setData(b);
			this.onStoreDataChanged(a)
		}
		return this
	},
	applyStore : function(a) {
		if (a === true) {
			a = Ext.create("Ext.data.Store", {
				fields : [this.getValueField(), this.getDisplayField()],
				autoDestroy : true
			})
		}
		if (a) {
			a = Ext.data.StoreManager.lookup(a);
			a.on({
				scope : this,
				addrecords : "onStoreDataChanged",
				removerecords : "onStoreDataChanged",
				updaterecord : "onStoreDataChanged",
				refresh : "onStoreDataChanged"
			})
		}
		return a
	},
	updateStore : function(a) {
		if (a) {
			this.onStoreDataChanged(a)
		}
		if (this.getUsePicker() && this.picker) {
			this.picker.down("pickerslot").setStore(a)
		} else {
			if (this.listPanel) {
				this.listPanel.down("dataview").setStore(a)
			}
		}
	},
	onStoreDataChanged : function(a) {
		var c = this.getInitialConfig(), b = this.getValue();
		if (b || b == 0) {
			this.updateValue(this.applyValue(b))
		}
		if (this.getValue() === null) {
			if (c.hasOwnProperty("value")) {
				this.setValue(c.value)
			}
			if (this.getValue() === null && this.getAutoSelect()) {
				if (a.getCount() > 0) {
					this.setValue(a.getAt(0))
				}
			}
		}
	},
	doSetDisabled : function(b) {
		var a = this.getComponent();
		if (a) {
			a.setDisabled(b)
		}
		Ext.Component.prototype.doSetDisabled.apply(this, arguments)
	},
	setDisabled : function() {
		Ext.Component.prototype.setDisabled.apply(this, arguments)
	},
	updateLabelWidth : function() {
		if (Ext.theme.is.Blackberry) {
			return
		} else {
			this.callParent(arguments)
		}
	},
	updateLabelAlign : function() {
		if (Ext.theme.is.Blackberry) {
			return
		} else {
			this.callParent(arguments)
		}
	},
	reset : function() {
		var d = this, a;
		if (d.getAutoSelect()) {
			var b = d.getStore();
			a = (d.originalValue) ? d.originalValue : b.getAt(0)
		} else {
			var e = d.getUsePicker(), c = e ? d.picker : d.listPanel;
			if (c) {
				c = c.child( e ? "pickerslot" : "dataview");
				c.deselectAll()
			}
			a = null
		}
		d.setValue(a);
		return d
	},
	onFocus : function(b) {
		if (this.getDisabled()) {
			return false
		}
		var a = this.getComponent();
		this.fireEvent("focus", this, b);
		if (Ext.os.is.Android4) {
			a.input.dom.focus()
		}
		a.input.dom.blur();
		this.isFocused = true;
		this.showPicker()
	},
	destroy : function() {
		this.callParent(arguments);
		var a = this.getStore();
		if (a && a.getAutoDestroy()) {
			Ext.destroy(a)
		}
		Ext.destroy(this.listPanel, this.picker)
	}
});
