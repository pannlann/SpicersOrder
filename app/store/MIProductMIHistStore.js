Ext.define('SpicersOrder.store.MIProductMIHistStore', {
	extend : 'Ext.data.Store',
	alias : 'store.miProductMIHist',
	requires : ['SpicersOrder.model.MIHistModel'],
	id : 'miProductMIHist',
	config : {
		autoLoad : true,
		model : 'SpicersOrder.model.MIHistModel',
		data : miProdMIHistData,
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
