Ext.define('SpicersOrder.store.OrderMessageStore', {
    extend : 'Ext.data.Store',
    alias : 'store.message',
    requires : ['SpicersOrder.model.OrderMessageModel'],
    id : 'message',
    config : {
        autoLoad : true,
        model : 'SpicersOrder.model.OrderMessageModel',
        data : orderMessage,
        sorters : 'messageType',
        grouper : {
            groupFn : function(record) {
                return 'Message';
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
