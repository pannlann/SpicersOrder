Ext.define('SpicersOrder.store.CustomerStore', {
			extend : 'Ext.data.Store',
			alias : 'store.customer',
			requires : ['SpicersOrder.model.CustomerModel'],
			id : 'customer',
			config : {
				autoLoad : true,
				model : 'SpicersOrder.model.CustomerModel',
				// sorters : 'custName',
				// grouper : {
					// groupFn : function(record) {
						// return record.get('custName')[0];
					// }
				// },
				data : customerData,
				proxy : {
					type : 'memory',
					reader : {
						type : 'json',
						rootProperty : 'items'
					}
				}
			}
		});
