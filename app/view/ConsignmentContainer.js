Ext.define('SpicersOrder.view.ConsignmentContainer', {
	extend : 'Ext.Panel',
	xtype : 'consignmentContainer',
	config : {
		itemId : 'consignmentContainer',
		title : 'Consignment at Cust',
		layout : {
			type : 'vbox',
			pack : 'center'
		},
		items : [{
			xtype : 'textfield',
			name : 'consCustomerName',
			itemId : 'consCustomerName',
			labelWidth : '100%',
			readOnly : true,
			style : 'font-size: 80%;'			
		}, {
			xtype : 'searchfield',
			itemId : 'consSearch',
			autoCorrect : false,
			autoComplete : false,
			autoCapitalize : false,
			listeners : {
				scope : this,
				'initialize' : function() {
					consSearchTask = Ext.create('Ext.util.DelayedTask', function() {
						onConsignmentSearch();
					});
				},
				'keyup' : function(field) {
					consSearchTask.delay(500);
				}
			}
		}, {
			xtype : 'consignmentList',
		}, {
			xtype : 'textfield',
			name : 'consPONumber',
			itemId : 'consPONumber',
			label : 'PO Number',
			labelWidth : '50%',
			required : true,			
			autoCorrect : false,
			autoComplete : false,
			autoCapitalize : false,
		}, {
			xtype : 'button',
			itemId : 'consConfirmButton',
			ui : 'action',
			text : 'Simulate Cons-Issue',
			align : 'center',
			hidden : false
		}]
	}
});
