Ext.define("SpicersOrder.model.OrderItemModel", {
    extend : 'Ext.data.Model',
    config : {
        fields : [{
            name : 'item',
            type : 'string'
        }, {
            name : 'prodDesc',
            type : 'string'
        }, {
            name : 'prod',
            type : 'string'
        }, {
            name : 'orderQty',
            type : 'float'
        }, {
            name : 'uom',
            type : 'string'
        }, {
            name : 'netValue',
            type : 'float'
        }, {
            name : 'currency',
            type : 'string'
        }, {
            name : 'plant',
            type : 'string'
        }],
    }
});
