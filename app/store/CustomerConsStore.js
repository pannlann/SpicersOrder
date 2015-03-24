Ext.define('SpicersOrder.store.CustomerConsStore', {
			extend : 'Ext.data.Store',
			alias : 'store.customerCons',
			requires : ['SpicersOrder.model.CustomerConsModel'],
			id : 'customerCons',
			config : {
				autoLoad : true,
				model : 'SpicersOrder.model.CustomerConsModel',
				sorters : 'prodDesc',
				data : customerConsData,
				proxy : {
					type : 'memory',
					reader : {
						type : 'json',
						rootProperty : 'items'
					}
				}
			}
		});
