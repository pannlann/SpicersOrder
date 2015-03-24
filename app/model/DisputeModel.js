Ext.define("SpicersOrder.model.DisputeModel", {
    extend : 'Ext.data.Model',
    config : {
        fields : [ {
            name : 'caseNo',
            type : 'string'
        },{
            name : 'title',
            type : 'string'
        }, {
            name : 'status',
            type : 'string'
        }, {
            name : 'referenceDoc',
            type : 'string'
        }, {
            name : 'createdBy',
            type : 'string'
        }, {
            name : 'processor',
            type : 'string'
        }, {
            name : 'responsible',
            type : 'string'
        }, {
            name : 'type',
            type : 'string'
        }]
    }
}); 