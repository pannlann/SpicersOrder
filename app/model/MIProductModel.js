Ext.define("SpicersOrder.model.MIProductModel", {
    extend : 'Ext.data.Model',
    config : {
        fields : [{
            name : 'prodDesc',
            type : 'string'
        }, {
            name : 'prodNo',
            type : 'string'
        }, {
            name : 'futureMthSales',
            type : 'float'
        }, {
            name : 'mtdSales',
            type : 'float'
        }, {
            name : 'lastMthSales',
            type : 'float'
        }, {
            name : 'avg6MthSales',
            type : 'float'
        }, {
            name : 'agedStock',
            type : 'string'
        }, {
            name : 'atpFlag',
            type : 'string'
        }, {
            name : 'lastOrdDays',
            type : 'int'
        }, {
            name : 'lastQuoDays',
            type : 'int'
        }, {
            name : 'requestStatus',
            type : 'string'
        }, {
            name : 'fromDate',
            type : 'string'
        }, {
            name : 'toDate',
            type : 'string'
        }, {
            name : 'miKey',
            type : 'string'
        }, {
            name : 'reason',
            type : 'string'
        }, {
            name : 'salesUom',
            type : 'string'
        }, {
            name : 'detail',
            type : 'string'
        }]
    }
}); 