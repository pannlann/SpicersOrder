Ext.define('SpicersOrder.store.MIProductAtpStore', {
	extend : 'Ext.data.Store',
	alias : 'store.miProductAtp',
	requires : ['SpicersOrder.model.AtpModel'],
	id : 'miProductAtp',
	config : {
		autoLoad : true,
		model : 'SpicersOrder.model.AtpModel',
		data : miProdAtpData,
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
