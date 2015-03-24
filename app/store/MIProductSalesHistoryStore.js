Ext.define('SpicersOrder.store.MIProductSalesHistoryStore', {
	extend : 'Ext.data.Store',
	alias : 'store.miProductSalesHistory',
	requires : ['SpicersOrder.model.ProductSalesHistoryModel'],
	id : 'miProductSalesHistory',
	config : {
		autoLoad : true,
		model : 'SpicersOrder.model.ProductSalesHistoryModel',
		data : miProdSalesHistoryData,
		sorters: [{
		    property: 'date',
		    direction: 'DESC'
		}],
		grouper : {
			groupFn : function(record) {
				return 'Product History';
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
