Ext.define('SpicersOrder.view.CustomerContactChange', {
	extend : 'Ext.form.Panel',
	xtype : 'customerContactChange',
	config : {
		padding : '0 5 0 5',
		items : [{
			xtype : 'fieldset',
			title : 'Change Contact',
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
				xtype : 'selectfield',
				label : 'Title',
				itemId : 'contactChTitle',
				usePicker : false,
				options : CONTACT_TITLE,
			}, {
				xtype : 'selectfield',
				label : 'Department',
				itemId : 'contactChDepartment',
				usePicker : false,
				options : CONTACT_DEPARTMENT,
			}, {
				xtype : 'selectfield',
				label : 'Function',
				itemId : 'contactChFunction',
				usePicker : false,
				options : CONTACT_FUNCTION,
			}, {
				xtype : 'textfield',
				label : 'First Name',
				itemId : 'contactChFirstText',
				maxLength : 40,
				required : true,
				autoCapitalize : true,
			}, {
				xtype : 'textfield',
				label : 'Last Name',
				itemId : 'contactChLastText',
				maxLength : 40,
				required : true,
				autoCapitalize : true,
			}, {
				xtype : 'textfield',
				label : 'Tel.',
				itemId : 'contactChTel',
				maxLength : 16,
			}, {
				xtype : 'textfield',
				label : 'Email',
				itemId : 'contactChEmail',
				maxLength : 50,
			}, {
				xtype : 'button',
				itemId : 'contactChangeButton',
				text : 'Change',
				ui : 'action'
			}]
		}]
		// }]
	}
});
