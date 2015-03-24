Ext.define('SpicersOrder.store.ActivityStore', {
	extend : 'Ext.data.Store',
	alias : 'store.activity',
	requires : ['SpicersOrder.model.ActivityModel'],
	id : 'activity',
	config : {
		autoLoad : true,
		model : 'SpicersOrder.model.ActivityModel',
		sorters : [{
			property : 'fromDate',
			direction : 'DESC'
		}, {
			property : 'actNo',
			direction : 'DESC'
		}],
		grouper : {
			groupFn : function(record) {
				return record.get('type');
			}
		},
		data : activityData,
		proxy : {
			type : 'memory',
			reader : {
				type : 'json',
				rootProperty : 'items'
			}
		}
	}
});
