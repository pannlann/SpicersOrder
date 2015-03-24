Ext.define("SpicersOrder.model.ContactModel", {
    extend : 'Ext.data.Model',
    config : {
        fields : [{
            name : 'contName',
            type : 'string'
        }, {
            name : 'contNo',
            type : 'string'
        }, {
            name : 'functions',
            type : 'string'
        }, {
            name : 'department',
            type : 'string'
        }, {
            name : 'title',
            type : 'string'
        }, {
            name : 'phone',
            type : 'string'
        }, {
            name : 'email',
            type : 'string'
        }, {
            name : 'type',
            type : 'string'
        },{
            name : 'firstName',
            type : 'string'
        },{
            name : 'lastName',
            type : 'string'
        },]
    }
}); 