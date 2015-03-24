Ext.define('SpicersOrder.store.MIProductStore', {
	extend : 'Ext.data.Store',
	alias : 'store.miProduct',
	requires : ['SpicersOrder.model.MIProductModel'],
	id : 'miProduct',
	config : {
		autoLoad : true,
		model : 'SpicersOrder.model.MIProductModel',
		sorters : [{
			property : 'lastOrdDays',
			direction : 'DESC'
		}, {
			property : 'lastQuoDays',
			direction : 'DESC'
		}, {
			property : 'prodDesc',
			direction : 'ASC'
		}],
		data : miProdData,
		proxy : {
			type : 'memory',
			reader : {
				type : 'json',
				rootProperty : 'items'
			}
		}
	}
});
