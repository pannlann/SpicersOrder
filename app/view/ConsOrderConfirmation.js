Ext.define('SpicersOrder.view.ConsOrderConfirmation', {
	extend : 'Ext.Panel',
	xtype : 'consOrderConfirmation',
	requires : ['SpicersOrder.view.ConsOrderItemList'],
	config : {
		//        title : 'Order Confirmation',
		itemId : 'consOrderConfirmation',
		layout : {
			type : 'vbox',
			pack : 'center'
		},
		items : [{
			xtype : 'consOrderItemList'
		}, {
			xtype : 'button',
			itemId : 'consSubmitOrderButton',
			ui : 'action',
			docked : 'bottom',
			text : 'Submit Cons-Issue Order',
			align : 'center',
		}, {
			xtype : 'textfield',
			name : 'total',
			label : 'Net Total $',
			itemId : 'consTotal',
			value : '0',
			readOnly : true,
			docked : 'bottom',
			style : 'border-width: 2px 1px 0px 1px; border-style: groove; font-size: 80%;',
			labelWidth : '40%',
		}, {
			xtype : 'signaturefield',
			itemId : 'signatureField',
			sigWidth : signatureWidth,
			sigHieght : signatureHeight,
			label : 'Signature',
			required : true,
			docked : 'bottom',
			style : 'border-width: 2px 1px 0px 1px; border-style: groove; font-size: 80%;',
			labelWidth : '40%',
		}, {
			xtype : 'textfield',
			label : 'Print Name',
			itemId : 'conConfirmName',
			required : true,
			docked : 'bottom',
			style : 'border-width: 2px 1px 0px 1px; border-style: groove; font-size: 80%;',
			labelWidth : '40%',
			autoCapitalize : false,
		}, {
			xtype : 'textfield',
			label : 'Timestamp',
			itemId : 'consConfirmTime',
			hidden : true,
		}, {
			xtype : 'textfield',
			label : 'Geolocation',
			itemId : 'consConfirmGeo',
			hidden : true,
		}]
	}
});
