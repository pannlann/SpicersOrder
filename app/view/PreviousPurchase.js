Ext.define('SpicersOrder.view.PreviousPurchase', {
	extend : 'Ext.NavigationView',
	xtype : 'previousPurchaseTab',
	config : {
		itemId : 'previousPurchaseTab',
		iconCls : 'reply',
		title : 'Prod.Hist.',
		hidden : true,
		navigationBar : {
			items : [{
				xtype : 'button',
				itemId : 'previousPurchaseSortButton',
				ui : 'normal',
				text : 'Sort',
				align : 'right',
				hidden : true
			}, {
				xtype : 'button',
				itemId : 'preAddToCartButton',
				iconCls : 'add',
				iconMask : true,
				ui : 'normal',
				align : 'right',
				hidden : true
			}]
		},
		items : [{
			title : 'Product History',
			itemId : 'daysSelectField',
			xtype : 'selectfield',
			name : 'LastDays',
			label : 'For the last',
			value : '0',
			labelWidth : '50%',
			usePicker : false,
			options : DEFAULT_LAST_DAYS
		}]
	}
}); 