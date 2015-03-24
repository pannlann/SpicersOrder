Ext.define('SpicersOrder.view.CustomerMain', {
    extend : 'Ext.Carousel',
    xtype : 'customerMain',
    config : {
        itemId : 'customerMain',
		indicator : false,        
        items : [ {
            xtype : 'customerDetail',
        }, {
            xtype : 'customerContact'
        }, {
            xtype : 'customerRecentActivity'
        }, {
            xtype : 'customerDispute'
        },
        ]
    },

});
