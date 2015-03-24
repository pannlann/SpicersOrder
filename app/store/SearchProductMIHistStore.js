Ext.define('SpicersOrder.store.SearchProductMIHistStore', {
	extend : 'Ext.data.Store',
	alias : 'store.searchProductMIHist',
	requires : ['SpicersOrder.model.MIHistModel'],
	id : 'searchProductMIHist',
	config : {
		autoLoad : true,
		model : 'SpicersOrder.model.MIHistModel',
		data : searchProdMIHistData,
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
