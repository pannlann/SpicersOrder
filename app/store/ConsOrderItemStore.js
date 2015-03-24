Ext.define('SpicersOrder.store.ConsOrderItemStore', {
    extend : 'Ext.data.Store',
    alias : 'store.consorderitem',
    requires : ['SpicersOrder.model.ConsOrderItemModel'],
    id : 'consorderitem',
    config : {
        autoLoad : true,
        model : 'SpicersOrder.model.ConsOrderItemModel',
        data : sumSimulatedConsOrder,
        grouper : {
            groupFn : function(record) {
                return 'Consignment Items';
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
