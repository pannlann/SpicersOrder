Ext.define('SpicersOrder.view.CustomerContainerOption', {
	extend : 'Ext.Panel',
	xtype : 'customerContainerOption',
	config : {
		draggable : false,
		floating : true,
		hideOnMaskTap : true,
		modal : true,
		right : 0,
		top : 50,
		hidden : true,
		padding : '0 5 0 5',
		items : [{
			xtype : 'fieldset',
			title : 'More Options',
			items : [{
				xtype : 'selectfield',
				itemId : 'refreshCustomerOptionSelect',
				label : 'Customer',
				usePicker : false,
				labelWidth : '50%',
				options : SALES_OFFICE
			}, {
				xtype : 'button',
				itemId : 'createCustomerButton',
				ui : 'action',
				iconCls : 'add',
				iconMask : true,
				text : 'New customer'
			}]
		}]
	}
});
