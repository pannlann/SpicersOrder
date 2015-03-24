Ext.define('SpicersOrder.view.CustomerChange', {
	extend : 'Ext.form.Panel',
	xtype : 'customerChange',
	config : {
		padding : '0 5 0 5',
		title : 'Change Customer',
		items : [{
			xtype : 'fieldset',
			title : 'Customer',
			defaults : {
				style : 'border-width: 2px 1px 0px 1px; border-style: groove; font-size: 80%;',
				labelWidth : '40%',
				listeners : {
					focus : function(comp, e, eopts) {
						if (Ext.os.name == 'WindowsPhone') {
							var ost = comp.element.dom.offsetTop;
							this.getParent().getParent().getScrollable().getScroller().scrollTo(0, ost);
						}
					}
				}
			},
			items : [{
				xtype : 'textfield',
				label : 'Detail',
				itemId : 'customerChName1',
				required : true,
				maxLength : 35,
				autoCapitalize : true,
			}, {
				xtype : 'textfield',
				label : ' ',
				itemId : 'customerChName2',
				maxLength : 35,
				autoCapitalize : true,
			}]
		}, {
			xtype : 'fieldset',
			title : 'Street',
			defaults : {
				style : 'border-width: 2px 1px 0px 1px; border-style: groove; font-size: 80%;',
				labelWidth : '40%',
			},
			items : [{
				xtype : 'textfield',
				label : 'Street number',
				itemId : 'customerChStreetNumber',
				required : true,
				maxLength : 40,
				autoCapitalize : true,
			}, {
				xtype : 'textfield',
				label : 'Suburb',
				itemId : 'customerChSuburb',
				required : true,
				maxLength : 35,
				autoCapitalize : true,
			}, {
				xtype : 'numberfield',
				label : 'Postcode',
				itemId : 'customerChPostcode',
				required : true,
				maxLength : 10,
			}, {
				xtype : 'selectfield',
				label : 'Region',
				itemId : 'customerChRegion',
				required : true,
				usePicker : false,
				options : REGION_LIST,
			}]
		}, {
			xtype : 'fieldset',
			title : 'Communication',
			defaults : {
				style : 'border-width: 2px 1px 0px 1px; border-style: groove; font-size: 80%;',
				labelWidth : '40%',
			},
			items : [{
				xtype : 'textfield',
				label : 'Email',
				itemId : 'customerChEmail',
				maxLength : 50,
			}, {
				xtype : 'textfield',
				label : 'Tel',
				itemId : 'customerChTelephone',
				required : true,
				maxLength : 30,
			}, {
				xtype : 'textfield',
				label : 'Fax',
				itemId : 'customerChFax',
				maxLength : 30,
			}]
		}, {
			xtype : 'button',
			itemId : 'customerChangeButton',
			text : 'Change',
			ui : 'action'
		}]
	}
});
