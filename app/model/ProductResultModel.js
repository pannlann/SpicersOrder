Ext.define("SpicersOrder.model.ProductResultModel", {
    extend : 'Ext.data.Model',
    config : {
        fields : [{
            name : 'prodDesc',
            type : 'string'
        }, {
            name : 'prodNo',
            type : 'string'
        }, {
            name : 'uom',
            type : 'string'
        }, {
            name : 'listPr',
            type : 'float'
        }, {
            name : 'custPr',
            type : 'float'
        }, {
            name : 'manualPr',
            type : 'float'
        }, {
            name : 'cost',
            type : 'float'
        }, {
            name : 'stock',
            type : 'float'
        }, {
            name : 'atpQty',
            type : 'float'
        }, {
            name : 'atp2Qty',
            type : 'float'
        }, {
            name : 'atp5Qty',
            type : 'float'
        }, {
            name : 'message',
            type : 'string'
        }, {
            name : 'isObs',
            type : 'string'
        }, {
            name : 'isCustPurch',
            type : 'string'
        }, {
            name : 'orderQty',
            type : 'float'
        }, {
            name : 'kgPerThs',
            type : 'float'
        }, {
            name : 'thsPerPal',
            type : 'float'
        }, {
            name : 'eaPerPk',
            type : 'int'
        }, {
            name : 'count',
            type : 'int'
        }]
    }
}); 