Ext.define('SpicersOrder.store.PreviousPurchaseStore', {
			extend : 'Ext.data.Store',
			alias : 'store.previousPurchase',
			requires : ['SpicersOrder.model.ProductResultModel'],
			id : 'previousPurchase',
			config : {
				autoLoad : true,
				model : 'SpicersOrder.model.ProductResultModel',
				data : prevProdData,
				proxy : {
					type : 'memory',
					reader : {
						type : 'json',
						rootProperty : 'items'
					}
				}
			}
		});
