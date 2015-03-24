Ext.define("SpicersOrder.model.ProductSalesHistoryModel", {
    extend : 'Ext.data.Model',
    config : {
        fields : [{
            name : 'salesOrder',
            type : 'string'
        }, {
            name : 'item',
            type : 'string'
        }, {
            name : 'date',
            type : 'string'
        }, {
            name : 'orderType',
            type : 'string'
        }, {
            name : 'isManualPrice',
            type : 'string'
        }, {
            name : 'netPrice',
            type : 'float'
        }, {
            name : 'qty',
            type : 'float'
        }, {
            name : 'marginPercent',
            type : 'float'
        }, {
            name : 'createBy',
            type : 'string'
        }, {
            name : 'poNumber',
            type : 'string'
        }, {
        }]
    }
}); 