Ext.define("SpicersOrder.model.CustomerModel", {
	extend : 'Ext.data.Model',
	config : {
		fields : [{
			name : 'custName',
			type : 'string'
		}, {
			name : 'custNo',
			type : 'string'
		}, {
			name : 'creditLimit',
			type : 'int'
		}, {
			name : 'creditAvailable',
			type : 'int'
		}, {
			name : 'creditUsed',
			type : 'float'
		}, {
			name : 'custAddr',
			type : 'string'
		}, {
			name : 'creditBlock',
			type : 'string'
		}, {
			name : 'plant',
			type : 'string'
		}, {
			name : 'telNo',
			type : 'string'
		}, {
			name : 'p1Pts',
			type : 'float'
		}, {
			name : 'p1Status',
			type : 'string'
		}, {
			name : 'accountGroup',
			type : 'string'
		}, {
			name : 'daysLastAct',
			type : 'int'
		}, {
			name : 'daysLastOrder',
			type : 'int'
		}, {
			name : 'daysLastQuote',
			type : 'int'
		}, {
			name : 'openOpportunity',
			type : 'int'
		}, {
			name : 'lastContactFlag',
			type : 'string'
		}, {
			name : 'salesMtd',
			type : 'int'
		}, {
			name : 'salesM01',
			type : 'int'
		}, {
			name : 'salesM02',
			type : 'int'
		}, {
			name : 'salesTotal',
			type : 'int'
		}, {
			name : 'assignedReps',
			type : 'string'
		}]
	}
});
