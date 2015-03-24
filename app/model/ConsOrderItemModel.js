Ext.define("SpicersOrder.model.ConsOrderItemModel", {
    extend : 'Ext.data.Model',
    config : {
        fields : [{
            name : 'prodDesc',
            type : 'string'
        }, {
            name : 'batch',
            type : 'string'
        }, {
            name : 'prodNo',
            type : 'string'
        }, {
            name : 'reqQty',
            type : 'float'
        }, {
            name : 'uom',
            type : 'string'
        }, {
            name : 'netValue',
            type : 'float'
        }, {
            name : 'netPrice',
            type : 'float'
        }, {
            name : 'fillupOrder',
            type : 'string'
        }],
    }
});
