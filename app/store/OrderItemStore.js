Ext.define('SpicersOrder.store.OrderItemStore', {
    extend : 'Ext.data.Store',
    alias : 'store.orderitem',
    requires : ['SpicersOrder.model.OrderItemModel'],
    id : 'orderitem',
    config : {
        autoLoad : true,
        model : 'SpicersOrder.model.OrderItemModel',
        data : simulatedOrder,
        grouper : {
            groupFn : function(record) {
                return 'Items';
            }
        },
        proxy : {
            type : 'memory',
            reader : {
                type : 'json',
                rootProperty : 'items'
            }
        }
    }
});
