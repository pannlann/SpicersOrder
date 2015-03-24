Ext.define("SpicersOrder.model.ActivityModel", {
	extend : 'Ext.data.Model',
	config : {
		fields : [{
			name : 'actNo',
			type : 'string'
		}, {
			name : 'actType',
			type : 'string'
		}, {
			name : 'contName',
			type : 'string'
		}, {
			name : 'contNo',
			type : 'string'
		}, {
			name : 'fromDate',
			type : 'string'
		}, {
			name : 'toDate',
			type : 'string'
		}, {
			name : 'text',
			type : 'string'
		}, {
			name : 'createdBy',
			type : 'string'
		}, {
			name : 'actTypeKey',
			type : 'string'
		}, {
			name : 'reason',
			type : 'string'
		}, {
			name : 'outcome',
			type : 'string'
		}, {
			name : 'oppType',
			type : 'string'
		}, {
			name : 'volume',
			type : 'string'
		}, {
			name : 'quantity',
			type : 'string'
		}, {
			name : 'amount',
			type : 'string'
		}, {
			name : 'salesDoc',
			type : 'string'
		}, {
			name : 'type',
			type : 'string'
		}]
	}
});
