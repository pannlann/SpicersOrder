Ext.define('SpicersOrder.view.CustomerContainer', {
	extend : 'Ext.Panel',
	xtype : 'customerContainer',
	config : {
		itemId : 'customerContainer',
		title : 'Customers',
		layout : {
			type : 'vbox',
			pack : 'center'
		},
		items : [{
			xtype : 'searchfield',
			placeHolder : CUST_SEARCH_PLACE_HOLDER,
			autoCorrect : false,
			autoComplete : false,
			autoCapitalize : false,
			itemId : 'custSearch',
			listeners : {
				scope : this,
				'initialize' : function() {
					custSearchTask = Ext.create('Ext.util.DelayedTask', function() {
						onCustomerKeySearch();
					});
				},
				'keyup' : function(field) {
					custSearchTask.delay(500);
				}
			}
		}, {
			xtype : 'customerList'
		}]
	}
});
