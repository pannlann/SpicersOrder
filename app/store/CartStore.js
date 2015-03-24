Ext.define('SpicersOrder.store.CartStore', {
			extend : 'Ext.data.Store',
			alias : 'store.cart',
			requires : ['SpicersOrder.model.ProductResultModel'],
			id : 'cart',
			config : {
				autoLoad : true,
				model : 'SpicersOrder.model.ProductResultModel',
				data : productsInCart,
				proxy : {
					type : 'memory',
					reader : {
						type : 'json',
						rootProperty : 'items'
					}
				}
			}
		});
