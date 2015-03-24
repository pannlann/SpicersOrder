Ext.define('SpicersOrder.store.SearchProductAtpStore', {
	extend : 'Ext.data.Store',
	alias : 'store.searchProductAtp',
	requires : ['SpicersOrder.model.AtpModel'],
	id : 'searchProductAtp',
	config : {
		autoLoad : true,
		model : 'SpicersOrder.model.AtpModel',
		data : searchProdAtpData,
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
