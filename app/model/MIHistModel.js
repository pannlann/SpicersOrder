Ext.define("SpicersOrder.model.MIHistModel", {
    extend : 'Ext.data.Model',
    config : {
        fields : [{
            name : 'prodNo',
            type : 'string'
        }, {
            name : 'futureMthSales',
            type : 'float'
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
            name : 'detail',
            type : 'string'
        }, {
            name : 'createdBy',
            type : 'string'
        }, {
            name : 'creationDate',
            type : 'string'
        }]
    }
}); 