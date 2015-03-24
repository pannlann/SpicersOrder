Ext.define('SpicersOrder.view.CustomerContactCreate', {
	extend : 'Ext.form.Panel',
	xtype : 'customerContactCreate',
	config : {
		padding : '0 5 0 5',
		items : [{
			xtype : 'fieldset',
			title : 'Create Contact',
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
			// defaults : {
			// labelWidth : fieldLabelWidth,
			// usePicker : false,
			// },
			items : [{
				xtype : 'selectfield',
				label : 'Title',
				itemId : 'contactCrTitle',
				usePicker : false,
				options : CONTACT_TITLE,
			}, {
				xtype : 'selectfield',
				label : 'Department',
				itemId : 'contactCrDepartment',
				usePicker : false,
				options : CONTACT_DEPARTMENT,
			}, {
				xtype : 'selectfield',
				label : 'Function',
				itemId : 'contactCrFunction',
				usePicker : false,
				options : CONTACT_FUNCTION,
			}, {
				xtype : 'textfield',
				label : 'First Name',
				itemId : 'contactCrFirstText',
				maxLength : 35,
				required : true,
				autoCapitalize : true,
			}, {
				xtype : 'textfield',
				label : 'Last Name',
				itemId : 'contactCrLastText',
				maxLength : 35,
				required : true,
				autoCapitalize : true,
			}, {
				xtype : 'textfield',
				label : 'Tel.',
				itemId : 'contactCrTel',
				maxLength : 16,
			}, {
				xtype : 'textfield',
				label : 'Email',
				itemId : 'contactCrEmail',
				maxLength : 50,
			}, {
				xtype : 'button',
				itemId : 'contactCreateButton',
				text : 'Create',
				ui : 'action'
			}]
		}]
		// }]
	}
});
