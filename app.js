// to include css based on device type
includeCss();

Ext.Loader.setConfig({
    enable: true,
    disableCaching: false,
	paths : {
	    'SpicersOrder': 'app',
		'Ext' : 'touch'
	}
});

Ext.require(['SpicersOrder.view.Main', 'SpicersOrder.resource.SignatureField', 'SpicersOrder.resource.SelectArea']);
Ext.application({

	name : 'SpicersOrder',
	controllers : ['Controller'],
	views : ['Main', 'Customers', 'Products', 'Cart', 'CustomerList', 'ProductDesc', 'ProductResultList', 'ProductSearch', 'CartOrder', 'CartList', 'CartOrderDetail'
			, 'PreviousPurchase', 'PreviousPurchaseList', 'Credentials', 'OrderConfirmation', 'OrderMessageList', 'OrderItemList', 'CustomerContainer', 'CustomerMain'
			, 'CustomerDetail', 'CustomerContactChange', 'CustomerContact', 'CustomerRecentActivity', 'ActivityCreation', 'ActivityUpdate', 'ActivityDisplay', 'DisputeCreation'
			, 'CustomerDispute', 'CustomerContainerOption', 'CustomerDetailOption', 'CustomerContactCreate', 'CustomerCreate', 'CustomerChange'
			, 'ProductDescHist', 'ProductDescMain', 'ProductAtpList', 'CustomerSettingChange', 'MIProduct'
			, 'MIProductList', 'MICreate', 'MIReasonDisplay', 'MIProductContainer', 'ProductMIHistList'
			, 'ConsignmentList', 'Consignment', 'ConsignmentContainer', 'ConsOrderConfirmation', 'ConsOrderItemList'],
	stores : ['CustomerStore', 'ProductResultStore', 'CartStore', 'PreviousPurchaseStore', 'OrderMessageStore', 
				'OrderItemStore', 'ContactStore', 'ActivityStore', 'DisputeStore', 'SearchProductSalesHistoryStore'
				,'PreviousProductSalesHistoryStore', 'SearchProductAtpStore', 'SearchProductMIHistStore'
				, 'PreviousProductAtpStore', 'PreviousProductMIHistStore' ,'MIProductStore'
				,'MIProductSalesHistoryStore', 'MIProductAtpStore', 'MIProductMIHistStore', 'CustomerConsStore'
				, 'ConsOrderItemStore'],
	models : ['CustomerModel', 'ContactModel', 'ActivityModel', 'DisputeModel', 'CustomerConsModel',
				'ProductResultModel', 'ConsOrderItemModel', 'OrderItemModel', 'OrderMessageModel', 
				'AtpModel', 'MIHistModel', 'MIProductModel'],
	launch : function() {
		console.log('launch');
		Ext.event.publisher.TouchGesture.prototype.isNotPreventable = /^(select|a|input|textarea)$/i;
		// initial all options
		customerContainerOption = Ext.create('SpicersOrder.view.CustomerContainerOption');
		customerDetailOption = Ext.create('SpicersOrder.view.CustomerDetailOption');
		// miCreatePanel = Ext.create('SpicersOrder.view.MICreate');
		miDisplayPanel = Ext.create('SpicersOrder.view.MIReasonDisplay');
		Ext.Viewport.add(customerContainerOption);
		Ext.Viewport.add(customerDetailOption);
		Ext.Viewport.add(miDisplayPanel);
		// Ext.Viewport.add(miCreatePanel);

		Ext.fly('appLoadingIndicator').destroy();
		mainContainer = Ext.create('SpicersOrder.view.Main', {});
	}
});
