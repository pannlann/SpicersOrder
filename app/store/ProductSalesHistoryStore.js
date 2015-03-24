Ext.define('SpicersOrder.store.ProductSalesHistoryStore', {
			extend : 'Ext.data.Store',
			alias : 'store.productSalesHistory',
			requires : ['SpicersOrder.model.ProductSalesHistoryModel'],
			id : 'productSalesHistory',
			config : {
				autoLoad : true,
				model : 'SpicersOrder.model.ProductSalesHistoryModel',
				data : prodSalesHistoryData,
				proxy : {
					type : 'memory',
					reader : {
						type : 'json',
						rootProperty : 'items'
					}
				}
			}
		});
