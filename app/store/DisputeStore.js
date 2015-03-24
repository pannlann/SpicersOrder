Ext.define('SpicersOrder.store.DisputeStore', {
	extend : 'Ext.data.Store',
	alias : 'store.dispute',
	requires : ['SpicersOrder.model.DisputeModel'],
	id : 'dispute',
	config : {
		autoLoad : true,
		model : 'SpicersOrder.model.DisputeModel',
		sorters : {
			property : 'caseNo',
			direction : 'DESC'
		},
		grouper : {
			groupFn : function(record) {
				return record.get('type');
			}
		},
		data : disputeData,
		proxy : {
			type : 'memory',
			reader : {
				type : 'json',
				rootProperty : 'items'
			}
		}
	}
});
