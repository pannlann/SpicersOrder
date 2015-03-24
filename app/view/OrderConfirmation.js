Ext.define('SpicersOrder.view.OrderConfirmation', {
    extend : 'Ext.Panel',
    xtype : 'orderConfirmation',
    requires : ['SpicersOrder.view.OrderItemList','SpicersOrder.view.OrderMessageList'],
    config : {
//        title : 'Order Confirmation',
        itemId : 'orderConfirmation',
        iconCls : 'user',
        scrollable : {
            direction : 'vertical',
            directionLock : true
        },
        items : [{
            xtype : 'orderMessageList'
        },{
            xtype : 'orderItemList'
        }]
    }
});
