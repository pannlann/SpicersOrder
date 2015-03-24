Ext.define('SpicersOrder.view.MIProductContainer', {
	extend : 'Ext.Panel',
	xtype : 'miProductContainer',
	config : {
		itemId : 'miProductContainer',
		title : 'Products',
		layout : {
			type : 'vbox',
			pack : 'center'
		},
		items : [{
			// xtype : 'numberfield',
			// docked : 'bottom',
			// itemId : 'futureMathSalesInput',
			// label : 'Future Mthly Sales',
			// labelWidth : '70%'
			// }, {
			xtype : 'searchfield',
			itemId : 'miProductSearch',
			autoCorrect : false,
			autoComplete : false,
			autoCapitalize : false,
			listeners : {
				scope : this,
				'initialize' : function() {
					miProdSearchTask = Ext.create('Ext.util.DelayedTask', function() {
						onMIProductSearch();
					});
				},
				'keyup' : function(field) {
					miProdSearchTask.delay(500);
				}
			}
		}, {
			xtype : 'miProductList',
			itemId : 'miProductList'
		}]
	}
});
