Ext.define('SpicersOrder.view.CustomerDetailOption', {
	extend : 'Ext.Panel',
	xtype : 'customerDetailOption',
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
				xtype : 'button',
				itemId : 'createActivityOption',
				ui : 'action',
				iconCls : 'add',
				iconMask : true,
				text : 'New Activity'
			}, {
				xtype : 'button',
				itemId : 'createContactOption',
				ui : 'action',
				iconCls : 'add',
				iconMask : true,
				text : 'New Contact'
			}, {
				xtype : 'button',
				itemId : 'createDisputeOption',
				ui : 'action',
				iconCls : 'add',
				iconMask : true,
				text : 'New Dispute'
			}, {
				xtype : 'button',
				itemId : 'changeCustomerOption',
				ui : 'confirm',
				iconCls : 'compose',
				iconMask : true,
				text : 'Change Detail'
			}, {
				xtype : 'button',
				itemId : 'changeCustomerSettingOption',
				ui : 'confirm',
				iconCls : 'compose',
				iconMask : true,
				text : 'Change Setting'
			}, {
				xtype : 'button',
				itemId : 'deleteCustomerOption',
				ui : 'decline',
				iconCls : 'trash',
				iconMask : true,
				text : 'Delete Customer'
			}]
		}]
	}
});
