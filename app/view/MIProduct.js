Ext.define('SpicersOrder.view.MIProduct', {
	extend : 'Ext.NavigationView',
	xtype : 'miProductTab',
	config : {
		// scrollable : false,
		// layout : {
			// type : 'vbox',
			// pack : 'center'
		// },
		iconCls : 'box',
		title : 'Cust.Prod',
		navigationBar : {
			items : [{
				xtype : 'button',
				itemId : 'miAddToCartButton',
				iconCls : 'add',
				iconMask : true,
				ui : 'normal',
				align : 'right',
				hidden : true
			}]
		},		
		items : [{
			xtype : 'miProductContainer',
		}]
	}
});
