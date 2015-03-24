Ext.define('SpicersOrder.store.PreviousProductMIHistStore', {
	extend : 'Ext.data.Store',
	alias : 'store.previousProductMIHist',
	requires : ['SpicersOrder.model.MIHistModel'],
	id : 'previousProductMIHist',
	config : {
		autoLoad : true,
		model : 'SpicersOrder.model.MIHistModel',
		data : previousProdMIHistData,
		grouper : {
			groupFn : function(record) {
				return 'Market Intelligence History';
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
