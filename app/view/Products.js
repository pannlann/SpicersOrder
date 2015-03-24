Ext.define('SpicersOrder.view.Products', {
	extend : 'Ext.NavigationView',
	xtype : 'productTab',
	config : {
		itemId : 'productTab',
		title : 'Search',
		iconCls : 'search',
		navigationBar : {
			items : [{
				xtype : 'button',
				itemId : 'productSortButton',
				ui : 'normal',
				text : 'Sort',
				align : 'right',
				hidden : true
			}, {
				xtype : 'button',
				itemId : 'addToCartButton',
				iconCls : 'add',
				iconMask : true,
				ui : 'normal',
				align : 'right',
				hidden : true
			}]
		},
		items : [{
			xtype : 'productSearch'
		}]

	}
}); 