Ext.define("SpicersOrder.model.CustomerConsModel", {
    extend : 'Ext.data.Model',
    config : {
        fields : [{
            name : 'prodNo',
            type : 'string'
        }, {
            name : 'prodDesc',
            type : 'string'
        }, {
            name : 'conStk',
            type : 'float'
        }, {
            name : 'remainingStk',
            type : 'float'
        }, {
            name : 'uom',
            type : 'string'
        }, {
            name : 'fillupOrderFlag',
            type : 'string'
        }]
    }
}); 