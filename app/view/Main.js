Ext.define('SpicersOrder.view.Main', {
	extend : 'Ext.tab.Panel',
	requires : ['SpicersOrder.resource.SortPicker', 'SpicersOrder.resource.PullRefreshPanel'],
	alias : 'widget.mainPanel',
	config : {
		tabBarPosition : 'bottom',
		fullscreen : true,
		scrollable : true,

		layout : {
			animation : 'slide'
		},

		items : [{
			xclass : 'SpicersOrder.view.Customers'
		},{
            xclass : 'SpicersOrder.view.MIProduct'
        },{
			xclass : 'SpicersOrder.view.Products'
		}, {
			xclass : 'SpicersOrder.view.PreviousPurchase'
		}, {
			xclass : 'SpicersOrder.view.Cart'
		},{
			xclass : 'SpicersOrder.view.Consignment'
		}]

	}
}); 