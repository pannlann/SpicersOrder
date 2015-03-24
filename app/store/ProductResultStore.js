Ext.define('SpicersOrder.store.ProductResultStore', {
			extend : 'Ext.data.Store',
			alias : 'store.productResult',
			requires : ['SpicersOrder.model.ProductResultModel'],
			id : 'productResult',
			config : {
				autoLoad : true,
				model : 'SpicersOrder.model.ProductResultModel',
				data : prodResultData,
				proxy : {
					type : 'memory',
					reader : {
						type : 'json',
						rootProperty : 'items'
					}
				}
			}
		});
