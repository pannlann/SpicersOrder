Ext.define('SpicersOrder.store.PreviousProductAtpStore', {
	extend : 'Ext.data.Store',
	alias : 'store.previousProductAtp',
	requires : ['SpicersOrder.model.AtpModel'],
	id : 'previousProductAtp',
	config : {
		autoLoad : true,
		model : 'SpicersOrder.model.AtpModel',
		data : previousProdAtpData,
		grouper : {
			groupFn : function(record) {
				return 'Future ATP list';
			}
		},
		proxy : {
			type : 'memory',
			reader : {
				type : 'json',
				rootProperty : 'items'
			}
		}
	}
});
