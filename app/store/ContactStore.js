Ext.define('SpicersOrder.store.ContactStore', {
			extend : 'Ext.data.Store',
			alias : 'store.contact',
			requires : ['SpicersOrder.model.ContactModel'],
			id : 'contact',
			config : {
				autoLoad : true,
				model : 'SpicersOrder.model.ContactModel',
				sorters : 'contName',
				grouper : {
					groupFn : function(record) {
						return record.get('type');
					}
				},
				data : contactData,
				proxy : {
					type : 'memory',
					reader : {
						type : 'json',
						rootProperty : 'items'
					}
				}
			}
		});
