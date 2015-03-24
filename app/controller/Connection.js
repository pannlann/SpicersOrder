// this file contains connection to backend system
// var createProcessedConsOrderOData = {
// entitySet : 'ProcessedConsOrderCollection',
// method : 'POST',
// field : ['Signature', 'Geolocatoion', 'Recipient', 'Timestamp', 'InputOrderList'],
// search : false,
// cancelPreRequest : false,
// timeout : 120000
// };
//
// var getProcessedConsOrderOData = {
// entitySet : 'ProcessedConsOrderCollection',
// method : 'GET',
// field : [],
// search : false,
// cancelPreRequest : false
// };

var createDeliveryPGIOData = {
	entitySet : 'DeliveryCollection',
	method : 'POST',
	field : ['SalesOrderNo', 'Signature', 'Geolocation', 'Recipient', 'Timestamp', 'inputConsItem'],
	search : false,
	cancelPreRequest : false
};

var getDeliveryPGIOData = {
	entitySet : 'DeliveryCollection',
	method : 'GET',
	field : [],
	search : false,
	cancelPreRequest : false
};

var createAttachmentOData = {
	entitySet : 'AttachmentCollection',
	method : 'POST',
	field : ['OrderNo', 'Signature', 'Geolocation', 'Recipient', 'Timestamp', 'DocumentType'],
	search : false,
	cancelPreRequest : false
};

var getAttachmentOData = {
	entitySet : 'AttachmentCollection',
	method : 'GET',
	field : [],
	search : false,
	cancelPreRequest : false
};

var getActivitySubTypeOData = {
	entitySet : 'ActivitySubTypeCollection',
	method : 'GET',
	field : [],
	search : false,
	singleRead : false
};

var changeCustomerSettingOData = {
	entitySet : 'CustomerSettingCollection',
	method : 'PUT',
	field : ['Customer', 'StkOrderDays', 'QuoteDays', 'IndOrderDays', 'ConOrderDays', 'SalesActDays'],
	search : false,
	cancelPreRequest : false
};

var getCustomerConsOData = {
	entitySet : 'CustomerConsCollection',
	method : 'GET',
	field : ['Customer'],
	search : false,
	singleRead : false
};

var getMIHistoryOData = {
	entitySet : 'MIHistoryCollection',
	method : 'GET',
	field : ['Customer', 'Plant', 'Material'],
	search : false,
	singleRead : false
};

var getMIReasonsOData = {
	entitySet : 'MIReasonCollection',
	method : 'GET',
	field : [],
	search : false,
	singleRead : false
};

var getCustomerSettingOData = {
	entitySet : 'CustomerSettingCollection',
	method : 'GET',
	field : ['Customer'],
	search : false,
	singleRead : true
};

var getMIProductOData = {
	entitySet : 'MIProductCollection',
	method : 'GET',
	field : ['Customer', 'Plant'],
	search : false,
	singleRead : false,
	cancelPreRequest : true
};

var getStockAtpOData = {
	entitySet : 'StockAtpCollection',
	method : 'GET',
	field : ['Material', 'Plant'],
	search : false,
	singleRead : false
};

var getShiptoOData = {
	entitySet : 'ShiptoCollection',
	method : 'GET',
	field : ['Customer'],
	search : false,
	singleRead : false
};

var getProductSalesHistoryOData = {
	entitySet : 'ProductSalesHistoryCollection',
	method : 'GET',
	field : ['Material', 'Customer'],
	search : false,
	singleRead : false,
	cancelPreRequest : true
};

var getProductSearchOData = {
	entitySet : 'ProductCollection',
	method : 'GET',
	field : ['inputTrex', 'inputAtpQty', 'inputSupZero', 'inputFindAlt', 'inputCustomer', 'inputPlant'],
	search : true,
	singleRead : false,
	cancelPreRequest : false
};

var getValidateAccountOData = {
	entitySet : 'UserValidationCollection',
	method : 'GET',
	field : [],
	search : false,
	singleRead : false,
	cancelPreRequest : false,
	timeout : 10000
};

var getCustomerOData = {
	entitySet : 'CustomerCollection',
	method : 'GET',
	field : ['inputVan', 'inputSalesOff', 'inputToday', 'inputAll', 'inputAllVan'],
	search : true,
	singleRead : false,
	cancelPreRequest : true
};

var getPurchasedProductOData = {
	entitySet : 'ProductCollection',
	method : 'GET',
	field : ['inputPrevPur', 'inputNumDays', 'inputCustomer'],
	search : false,
	singleRead : false,
	cancelPreRequest : false
};

var simulateOrderMessageOData = {
	entitySet : 'SalesOrderMessageCollection',
	method : 'GET',
	field : ['inputOrderHeader', 'inputOrderItem', 'inputOrderPartner', 'inputAppType'],
	search : false,
	singleRead : false,
	cancelPreRequest : false
};

var simulateOrderItemOData = {
	entitySet : 'SalesOrderItemCollection',
	method : 'GET',
	field : ['inputOrderHeader', 'inputOrderItem', 'inputOrderPartner', 'inputAppType'],
	search : false,
	singleRead : false,
	cancelPreRequest : false
};

var simulateConsOrderItemOData = {
	entitySet : 'ConsOrderItemCollection',
	method : 'GET',
	field : ['inputOrderItem', 'inputCustomer', 'inputPO'],
	search : false,
	singleRead : false,
	cancelPreRequest : false
};

var createOrderOData = {
	entitySet : 'SalesOrderItemCollection',
	method : 'POST',
	field : ['inputOrderHeader', 'inputOrderItem', 'inputOrderPartner', 'inputAppType', 'quoteText', 'orderText', 'deliveryText'],
	search : false,
	cancelPreRequest : false
};

var createConsOrderOData = {
	entitySet : 'ConsOrderItemCollection',
	method : 'POST',
	field : ['inputCustomer', 'inputPO', 'inputOrderItem'],
	search : false,
	cancelPreRequest : false
};

var getContactOData = {
	entitySet : 'ContactCollection',
	method : 'GET',
	field : ['Customer'],
	search : false,
	singleRead : false,
	cancelPreRequest : false
};

var getDisputeOData = {
	entitySet : 'DisputeCollection',
	method : 'GET',
	field : ['CustomerNo'],
	search : false,
	singleRead : false,
	cancelPreRequest : false
};

var getSalesActivityOData = {
	entitySet : 'SalesActivityCollection',
	method : 'GET',
	field : ['CustomerNo'],
	search : false,
	top : true,
	singleRead : false,
	cancelPreRequest : false
};

var createSalesActivityOData = {
	entitySet : 'SalesActivityCollection',
	method : 'POST',
	field : ['CustomerNo', 'ContactNo', 'ToDate', 'ActText', 'ActType', 'ActReason', 'ActOutcome', 'Volume', 'Quantity', 'Amount', 'SalesDoc', 'OpportunityType'],
	search : false,
	cancelPreRequest : false
};

var changeSalesActivityOData = {
	entitySet : 'SalesActivityCollection',
	method : 'PUT',
	field : ['CustomerNo', 'ContactNo', 'ToDate', 'ActText', 'ActType', 'ActReason', 'ActOutcome', 'Volume', 'Quantity', 'Amount', 'SalesDoc', 'OpportunityType'],
	search : false,
	cancelPreRequest : false
};

var createDisputeOData = {
	entitySet : 'DisputeCollection',
	method : 'POST',
	field : ['CustomerNo', 'ContactNo', 'Category', 'CaseTitle', 'ReferenceDoc', 'CaseText', 'ClaimAmount'],
	search : false,
	cancelPreRequest : false
};

var changeContactOData = {
	entitySet : 'ContactCollection',
	method : 'PUT',
	field : ['Customer', 'ContactNo', 'Title', 'FirstName', 'LastName', 'Email', 'Phone', 'Department', 'Function'],
	search : false,
	cancelPreRequest : false
};

var createContactOData = {
	entitySet : 'ContactCollection',
	method : 'POST',
	field : ['Customer', 'Title', 'FirstName', 'LastName', 'Email', 'Phone', 'Department', 'Function'],
	search : false,
	cancelPreRequest : false
};

var deleteContactOData = {
	entitySet : 'ContactCollection',
	method : 'DELETE',
	field : ['ContactNo'],
	search : false,
	cancelPreRequest : false
};

var deleteCustomerOData = {
	entitySet : 'CustomerDetailCollection',
	method : 'DELETE',
	field : ['CustomerNo'],
	search : false,
	cancelPreRequest : false
};

var createCustomerOData = {
	entitySet : 'CustomerDetailCollection',
	method : 'POST',
	field : ['Name1', 'Name2', 'Street', 'PostCode', 'City', 'Region', 'Email', 'Tel', 'Fax'],
	search : false,
	cancelPreRequest : false
};

var submitMIReqOData = {
	entitySet : 'MIProductCollection',
	method : 'POST',
	field : ['Material', 'Customer', 'Plant', 'FutureMthSales', 'FromDate', 'ToDate', 'MIKey', 'Sequence', 'Detail'],
	search : false,
	cancelPreRequest : false
};

var changeCustomerOData = {
	entitySet : 'CustomerDetailCollection',
	method : 'PUT',
	field : ['CustomerNo', 'Name1', 'Name2', 'Street', 'PostCode', 'City', 'Region', 'Email', 'Tel', 'Fax'],
	search : false,
	cancelPreRequest : false
};

var getSingleCustomerOData = {
	entitySet : 'CustomerDetailCollection',
	method : 'GET',
	field : [],
	search : false,
	singleRead : true,
	cancelPreRequest : false
};

// function callProcessedConsOrderOData(response) {
// xcsrftoken = response.getResponseHeader('x-csrf-token');
// filterString = '';
// callOData(createProcessedConsOrderOData, filterString, successProcessedConsOrderCallback, errCallback, processedConsPayload, null);
// }
function callAddAttachmentOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(createAttachmentOData, filterString, successAddAttachmentCallback, errCallback, attachmentPayload, null);
}

function callCreateDeliveryOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(createDeliveryPGIOData, filterString, successCreateDeliveryCallback, errCallback, deliveryPayload, null);
}

function callChangeContactOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(changeContactOData, filterString, successChangeContact, errCallback, contactPayload, selectedContact);
}

function callChangeCustomerOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(changeCustomerOData, filterString, successChangeCustomer, errCallback, customerDetailPayload, selectedCust);
}

function callChangeCustomerSettingOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(changeCustomerSettingOData, filterString, successChangeCustomerSetting, errCallback, customerSettingPayload, selectedCust);
}

function callDeleteCustomerOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(deleteCustomerOData, filterString, successDeleteCustomer, errCallback, null, selectedCust);
}

function callDeleteContactOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(deleteContactOData, filterString, successDeleteContact, errCallback, null, selectedContact);
}

function callCreateSalesActivityOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(createSalesActivityOData, filterString, successCreateSalesActivity, errCallback, activityPayload, selectedCust);
}

function callChangeSalesActivityOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(changeSalesActivityOData, filterString, successChangeSalesActivity, errCallback, activityPayload, selectedSalesAct);
}

function callCreateOrderOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(createOrderOData, filterString, successCreateOrderCallback, errCallback, orderPayload, null);
}

function callCreateConsOrderOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(createConsOrderOData, filterString, successCreateConsOrderCallback, errCallback, consOrderPayload, null);
}

function callCreateDisputeOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(createDisputeOData, filterString, successCreateDispute, errCallback, disputePayload, selectedCust);
}

function callCreateContactOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(createContactOData, filterString, successCreateContact, errCallback, contactPayload, null);
}

function callCreateCustomerOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(createCustomerOData, filterString, successCreateCustomer, errCallback, customerDetailPayload, null);
}

function callSubmitMIReqOData(response) {
	xcsrftoken = response.getResponseHeader('x-csrf-token');
	filterString = '';
	callOData(submitMIReqOData, filterString, successSubmitMIReq, errCallback, imRequestPayload, null);
}

function callOData(oDataService, filterString, successCallback, errorCallback, payload, key) {
	// construct URL
	var url;
	if (oDataService.singleRead == true || oDataService.method == 'PUT' || oDataService.method == 'DELETE') {
		// contruct URL for single read and POST request
		url = oDataBackEnd + oDataService.entitySet + "('" + key + "')" + filterString;
	} else {
		url = oDataBackEnd + oDataService.entitySet + filterString;
	}
	var request;
	//construct header
	var oHeaders = {};
	oHeaders['Authorization'] = 'Basic ' + btoa(userId + ':' + password);
	oHeaders['Accept'] = 'application/json';
	if (oDataService.method == 'GET') {
		oHeaders['X-CSRF-Token'] = 'fetch';
		request = {
			url : url,
			// username : userId,
			// password : password,
			autoAbort : oDataService.cancelPreRequest,
			useDefaultXhrHeader : false,
			headers : oHeaders,
			method : oDataService.method,
			// withCredentials: true,
			success : successCallback,
			failure : errCallback,
			timeout : (oDataService.timeout == null) ? REQUEST_TIMEOUT : oDataService.timeout
		};
	} else {
		oHeaders['Content-Type'] = 'application/json';
		oHeaders['X-CSRF-Token'] = xcsrftoken;
		request = {
			url : url,
			// username : userId,
			// password : password,
			autoAbort : oDataService.cancelPreRequest,
			disableCaching : false,
			useDefaultXhrHeader : false,
			headers : oHeaders,
			method : oDataService.method,
			// withCredentials: true,
			xmlData : JSON.stringify(payload),
			success : successCallback,
			failure : errCallback,
		};
	}

	Ext.Ajax.request(request);
}

function successChangeCustomerSetting(response) {
	Ext.toast("The customer's setting " + selectedCust + " has been changed successfully.", 1500);

	mainContainer.unmask();

	customerTabPop();

}

function successChangeCustomer(response) {
	Ext.toast('The customer ' + selectedCust + ' has been changed successfully.', 1500);

	var updateCustomerRecord = customerData.items.find({
		custNo : selectedCust
	});
	updateCustomerRecord.custName = tempChangeCustomer.custName;
	updateCustomerRecord.custAddr = tempChangeCustomer.custAddr;
	updateCustomerRecord.telNo = tempChangeCustomer.telNo;
	customerData.items.remove({
		custNo : selectedCust
	});
	customerData.items.splice(0, 0, updateCustomerRecord);
	tempChangeCustomer = {};
	updateCustomerStore();
	mainContainer.unmask();
	// set new selectedCustRecord
	selectedCustRecord = updateCustomerRecord;

	var customerDetailView = Ext.ComponentQuery.query('customerDetail')[0];
	customerDetailView.setData(selectedCustRecord);
	customerTabPop();

}

function successChangeSalesActivity(response) {
	getCustomerRecentActivity();
	mainContainer.unmask();
	Ext.toast('The activity ' + selectedSalesAct + ' has been updated successfully.', 2000);
	customerTabPop();

}

function successChangeContact(response) {

	mainContainer.unmask();
	Ext.toast('Contact detail has succesfully changed.', 1500);
	updateRecentContactChange();
	customerTabPop();
	updateContactStore();
}

function successSubmitMIReq(response) {

	mainContainer.unmask();
	if (selectedMIProduct != null) {

		tempMIReq.requestStatus = 'P';
		miProdData.items.remove({
			prodNo : tempMIReq.prodNo
		});
		if (tempMIReq.reqType == 'X') {
			miProdData.items.splice(0, 0, tempMIReq);
			selectedMIProduct = tempMIReq;
		}
		tempMIReq = {};
		updateMIProductStore();
	}
	Ext.toast('The MI request has succesfully submitted', 3000);

	var productTab = Ext.ComponentQuery.query('productTab')[0];
	var miTab = Ext.ComponentQuery.query('miProductTab')[0];
	var preTab = Ext.ComponentQuery.query('previousPurchaseTab')[0];

	if (productTab.isPainted()) {
		parentTab = productTab;
	} else if (miTab.isPainted()) {
		parentTab = miTab;
	} else if (preTab.isPainted()) {
		parentTab = preTab;
	}
	parentTab.pop();

}

function successCreateCustomer(response) {

	var items = JSON.parse(response.responseText).d;

	customerNumber = items.CustomerNo.replace(/^0+/, '');

	mainContainer.unmask();

	Ext.Msg.alert('Customer', 'The customer ' + customerNumber + ' has been created successfully.', function() {
		tempNewCustomer.custNo = customerNumber;
		customerData.items.splice(0, 0, tempNewCustomer);
		updateCustomerStore();
		tempNewCustomer = {};
		customerTabPop();
		updateCustomerStore();
		selectedCust = customerNumber;
		moveToSelectedCustomer();
	});
}

function successCreateContact(response) {

	var items = JSON.parse(response.responseText).d;

	contactNumber = items.ContactNo.replace(/^0+/, '');

	mainContainer.unmask();
	Ext.Msg.alert('Contact', 'The contact ' + contactNumber + ' has been created successfully.', function() {
		// update contactData
		tempNewContact.contNo = contactNumber;
		contactData.items.splice(0, 0, tempNewContact);
		updateContactStore();
		// update available contacts dropdown
		var contactItem = {};
		contactItem.text = tempNewContact.contName;
		contactItem.value = tempNewContact.contNo;
		availableContact.push(contactItem);

		tempNewContact = {};
		customerTabPop();
		updateContactStore();
	});
}

function successCustomerCallback(response) {
	var items = JSON.parse(response.responseText).d.results;
	var tempLastOrderDays;
	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		customerData = {
			items : []
		};
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];

			myitem.custName = theItems.CustomerName;
			myitem.custNo = theItems.CustomerNo;
			myitem.creditLimit = theItems.CreditLimit;
			myitem.creditAvailable = theItems.CreditAvailable;
			myitem.creditUsed = theItems.CreditUsed;
			myitem.creditBlock = theItems.CreditBlock;
			myitem.plant = theItems.Plant;
			myitem.telNo = theItems.TelNo;
			myitem.p1Pts = theItems.P1Pts;
			myitem.p1Status = theItems.P1Status;
			myitem.accountGroup = theItems.AccGroup;

			tempLastOrderDays = [theItems.DaysLastCon, theItems.DaysLastIndent, theItems.DaysLastOrder];
			if (theItems.DaysLastCon != null && theItems.DaysLastIndent != null && theItems.DaysLastOrder != null) {
				myitem.daysLastOrder = tempLastOrderDays.min();
			}
			myitem.daysLastAct = theItems.DaysLastAct;
			myitem.daysLastQuote = theItems.DaysLastQuote;
			myitem.openOpportunity = theItems.OpenOpportunity;
			myitem.lastContactFlag = theItems.LastContactFlag;
			myitem.salesMtd = theItems.SalesMtd;
			myitem.salesM01 = theItems.SalesM01;
			myitem.salesM02 = theItems.SalesM02;
			myitem.salesTotal = theItems.SalesTotal;
			myitem.assignedReps = theItems.AssignedReps;

			customerData.items.push(myitem);
		}

		updateCustomerStore();
	} else {
		// no customer returned
		reportErrorMessage(NO_CUSTOMERS_FOUND_EXCEPTION, function() {
		});
	}
}

function successActivitySubTypesCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		activitySubTypeList = [];
		for (var i = 0; i < noOfItems; i++) {
			if (i == 0) {
				activitySubTypeList.push({
					text : '',
					value : ''
				});
			}
			var myitem = {};
			var theItems = items[i];
			myitem.value = theItems.Key;
			myitem.text = theItems.Text;
			activitySubTypeList.push(myitem);
		}
	}
}

function successMIReasonsCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		miReasonsList = [];
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];
			myitem.miKey = theItems.MIKey;
			myitem.text = theItems.Reason;
			myitem.detail = theItems.Detail;
			myitem.value = myitem.miKey + ':' + myitem.text;
			miReasonsList.push(myitem);
		}
	}
}

function successCustomerSetting(response) {
	var items = JSON.parse(response.responseText).d;

	// reset product Result
	selectedCustSetting = {};

	selectedCustSetting.stkOrderDays = items.StkOrderDays;
	selectedCustSetting.quoteDays = items.QuoteDays;
	selectedCustSetting.indOrderDays = items.IndOrderDays;
	selectedCustSetting.conOrderDays = items.ConOrderDays;
	selectedCustSetting.salesActDays = items.SalesActDays;
}

function successCustomerAddress(response) {
	var items = JSON.parse(response.responseText).d;

	// reset product Result
	selectedCustAddr = {};

	selectedCustAddr.name1 = items.Name1;
	selectedCustAddr.name2 = items.Name2;
	selectedCustAddr.street = items.Street;
	selectedCustAddr.postcode = items.PostCode;
	selectedCustAddr.city = items.City;
	selectedCustAddr.region = items.Region;
	selectedCustAddr.email = items.Email;
	selectedCustAddr.tel = items.Tel;
	selectedCustAddr.fax = items.Fax;

	selectedCustRecord.custAddr = selectedCustAddr.street + ', ' + selectedCustAddr.city + ' ' + selectedCustAddr.region + ' ' + selectedCustAddr.postcode;

	// set customer general detail
	var customerDetailView = Ext.ComponentQuery.query('customerDetail')[0];
	customerDetailView.setData(selectedCustRecord);

}

function successCreateDispute(response) {

	var items = JSON.parse(response.responseText).d;

	disputeNumber = items.CaseId.replace(/^0+/, '');

	mainContainer.unmask();
	Ext.Msg.alert('Dispute', 'The case ' + disputeNumber + ' has been created successfully.', function() {
		tempDispute.caseNo = disputeNumber;
		disputeData.items.splice(0, 0, tempDispute);
		tempDispute = {};
		clearDisputeView();
		customerTabPop();
		updateDisputeStore();
	});
}

function successCreateOrderCallback(response) {
	var items = JSON.parse(response.responseText).d;

	orderNumber = items.SalesOrderNo.replace(/^0+/, '');

	mainContainer.unmask();

	var orderType = Ext.ComponentQuery.query('#orderType')[0].getValue().trim();
	var header;
	var message;
	if (orderType == 'ZSTK' || orderType == 'ZMCF') {
		header = 'Order';
		message = 'The order ';
	} else {
		header = 'Quote';
		message = 'The quote ';
	}

	if (orderNumber != null && orderNumber != '') {
		Ext.Msg.alert('Order', 'The order ' + orderNumber + ' has been created successfully', function() {
			refreshData(true);
		});
	} else {
		Ext.Msg.alert('Error', 'An error has occurred. ' + message + ' may not be created', function() {
			refreshData(false);
		});
	}
}

function successCreateConsOrderCallback(response) {

	var items = JSON.parse(response.responseText).d;

	consOrder = items.ConsOrder;
	consDelivery = items.Delivery;

	orderNumber = consOrder;

	if (consOrder != null) {
		addOrderAttachment(consOrder);
	} else {
		reportErrorMessage(CREATE_ORDER_ERROR_EXCEPTION, function() {
		});
	}
}

function successCreateSalesActivity(response) {

	var items = JSON.parse(response.responseText).d;

	activityNumber = items.ActNo.replace(/^0+/, '');

	mainContainer.unmask();
	Ext.Msg.alert('Activity', 'The activity ' + activityNumber + ' has been created successfully.', function() {

		tempActivity.actNo = activityNumber;
		activityData.items.splice(0, 0, tempActivity);
		updateActivityStore();
		tempActivity = {};
		clearActivityText();
		mainContainer.unmask();
		customerTabPop();
		updateActivityStore();
	});
}

function successProductAtpListCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result

		switch (productHistoryViewID) {
			case 'searchProductDescMain':
				searchProdAtpData = {
					items : []
				};
				break;
			case 'previousProductDescMain':
				previousProdAtpData = {
					items : []
				};
			case 'miProductDescMain':
				miProdAtpData = {
					items : []
				};
				break;
		}

		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];
			myitem.atpQty = theItems.AtpQty;
			myitem.date = theItems.Date;

			switch (productHistoryViewID) {
				case 'searchProductDescMain':
					searchProdAtpData.items.push(myitem);
					break;
				case 'previousProductDescMain':
					previousProdAtpData.items.push(myitem);
					break;
				case 'miProductDescMain':
					miProdAtpData.items.push(myitem);
					break;
			};
		}
		updateProductAtpStore();
	}
}

function successCustomerConsCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result

		customerConsData = {
			items : []
		};

		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];

			myitem.prodNo = theItems.Material.replace(/^0+/, '');
			;
			myitem.prodDesc = theItems.MaterialDescription;
			myitem.conStk = theItems.ConStk;
			myitem.uom = theItems.Uom;
			myitem.remainingStk = theItems.ConStk;
			myitem.fillupOrderFlag = theItems.FillupOrderFlag;
			customerConsData.items.push(myitem);
		}
		updateCustomerConsStore();
	}
}

function successMIHistoryCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	switch (productHistoryViewID) {
		case 'searchProductDescMain':
			searchProdMIHistData = {
				items : []
			};
			break;
		case 'previousProductDescMain':
			previousProdMIHistData = {
				items : []
			};
		case 'miProductDescMain':
			miProdMIHistData = {
				items : []
			};
			break;
	}
	if (noOfItems > 0) {
		// reset product Result

		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];

			myitem.prodNo = theItems.Material;
			myitem.futureMthSales = theItems.FutureMthSales;
			myitem.fromDate = theItems.FromDate;
			myitem.toDate = theItems.ToDate;
			myitem.requestStatus = theItems.RequestStatus;
			myitem.miKey = theItems.MIKey;
			myitem.reason = theItems.Reason;
			myitem.atpQty = theItems.ReqType;
			myitem.detail = theItems.Detail;
			myitem.createdBy = theItems.CreatedBy;
			myitem.creationDate = theItems.CreationDate;

			switch (productHistoryViewID) {
				case 'searchProductDescMain':
					searchProdMIHistData.items.push(myitem);
					break;
				case 'previousProductDescMain':
					previousProdMIHistData.items.push(myitem);
					break;
				case 'miProductDescMain':
					miProdMIHistData.items.push(myitem);
					break;
			};
		}
		updateProductMIHistStore();
	}
}

function successProductSalesHistoryCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		if (!isSkipProductSalesHistory) {
			// reset product Result

			switch (productHistoryViewID) {
				case 'searchProductDescMain':
					searchProdSalesHistoryData = {
						items : []
					};
					break;
				case 'previousProductDescMain':
					preProdSalesHistoryData = {
						items : []
					};
					break;
				case 'miProductDescMain':
					miProdSalesHistoryData = {
						items : []
					};
					break;
			};
		}

		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];
			myitem.salesOrder = theItems.SalesOrderNo.replace(/^0+/, '');
			;
			myitem.item = theItems.ItmNumber.replace(/^0+/, '');
			myitem.date = theItems.Date;
			myitem.orderType = theItems.OrderType;
			myitem.isManualPrice = theItems.ManualPriceFlag;
			myitem.netPrice = theItems.NetPrice;
			myitem.qty = theItems.Qty;
			// for traffic light purpose
			myitem.marginPercent = theItems.MarginPercent;
			myitem.createBy = theItems.CreatedBy;
			myitem.poNumber = theItems.PoNumber;
			myitem.material = theItems.Material.replace(/^0+/, '');

			switch (productHistoryViewID) {
				case 'miProductDescMain':
					miProdSalesHistoryData.items.push(myitem);
					break;
				case 'searchProductDescMain':
					searchProdSalesHistoryData.items.push(myitem);
					break;
				case 'previousProductDescMain':
					preProdSalesHistoryData.items.push(myitem);
					break;
			};
		}
		updateProductSalesHistoryStore();
	} else {
		// only show error message when select load more option
		if (isSkipProductSalesHistory) {
			reportErrorMessage(NO_MORE_PRODUCT_HISTORY_EXCEPTION, function() {
			});
		}
	}
}

function successShiptoListCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	shiptoData = [];
	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];

			myitem.value = theItems.ShiptoNo.replace(/^0+/, '');
			myitem.text = theItems.Address;

			shiptoData.push(myitem);
		}
	}
	Ext.ComponentQuery.query('#shiptoParty')[0].setOptions(shiptoData);
}

function successCustomerContactListCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	contactData = {
		items : []
	};
	availableContact = [];

	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var contactItem = {};
			var theItems = items[i];

			myitem.contNo = theItems.ContactNo.replace(/^0+/, '');
			myitem.functions = theItems.Function;
			myitem.department = theItems.Department;
			myitem.phone = theItems.Phone;
			myitem.email = theItems.Email;
			myitem.firstName = theItems.FirstName;
			myitem.lastName = theItems.LastName;
			myitem.title = theItems.Title;
			myitem.contName = myitem.title + ' ' + myitem.firstName + ' ' + myitem.lastName;
			myitem.type = 'Contact';

			// update contact data for activity creation screen
			contactItem.text = myitem.contName;
			contactItem.value = myitem.contNo;
			availableContact.push(contactItem);

			contactData.items.push(myitem);
		}
	}

	updateContactStore();
	if (availableContact.length > 0) {
		isContactReadOnly = false;
	} else {
		isContactReadOnly = true;
		availableContact = [{
			text : '',
			value : '0'
		}];
	}
}

function successDeleteContact(response) {
	Ext.toast('The contact has succesfully deleted', 1500);
	mainContainer.unmask();
	updateRecentContactDelete();
	updateContactStore();
}

function successMIProductDetailCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];
			myitem.prodDesc = theItems.MaterialDescription;
			myitem.prodNo = theItems.Material.replace(/^0+/, '');
			myitem.listPr = theItems.ListPrice;
			myitem.custPr = theItems.CustPrice;
			myitem.uom = theItems.AtpUom;
			myitem.cost = theItems.Cost;
			myitem.stock = theItems.StockQty;
			// for traffic light purpose
			myitem.atpQty = theItems.AtpQty;
			myitem.atp2Qty = theItems.Atp2Qty;
			myitem.atp5Qty = theItems.Atp5Qty;
			myitem.message = theItems.Messages;
			myitem.isObs = theItems.DisConFlag;
			myitem.isCustPurch = theItems.PrePuchFlag;
			myitem.kgPerThs = theItems.KgThs;
			myitem.thsPerPal = theItems.ThsPal;
			myitem.eaPerPk = theItems.EaPack;
			myitem.count = theItems.Count;
			selectedProduct = myitem;
			Ext.ComponentQuery.query('#miProductDesc')[0].setData(selectedProduct);
		}
	}
}

function successProcessedConsOrderCallback(response) {
	var items = JSON.parse(response.responseText).d;

}

function successPreviousProductCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		prevProdData = {
			items : []
		};
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];
			myitem.prodDesc = theItems.MaterialDescription;
			myitem.prodNo = theItems.Material.replace(/^0+/, '');
			myitem.listPr = theItems.ListPrice;
			myitem.custPr = theItems.CustPrice;
			myitem.uom = theItems.AtpUom;
			myitem.cost = theItems.Cost;
			myitem.stock = theItems.StockQty;
			// for traffic light purpose
			myitem.atpQty = theItems.AtpQty;
			myitem.atp2Qty = theItems.Atp2Qty;
			myitem.atp5Qty = theItems.Atp5Qty;
			myitem.message = theItems.Messages;
			myitem.isObs = theItems.DisConFlag;
			myitem.isCustPurch = theItems.PrePuchFlag;
			myitem.kgPerThs = theItems.KgThs;
			myitem.thsPerPal = theItems.ThsPal;
			myitem.eaPerPk = theItems.EaPack;
			myitem.count = theItems.Count;
			prevProdData.items.push(myitem);
		}
		console.log('push product list screen');
		Ext.ComponentQuery.query('previousPurchaseTab')[0].push({
			xtype : 'previousPurchaseList',
			title : 'Last ' + days + ' Days'
		});

		updatePreviousPurchaseStore();
		mainContainer.unmask();
	} else {
		// no customer returned
		mainContainer.unmask();
		reportErrorMessage(NO_RESULTS_FOUND_EXCEPTION, function() {
		});
	}
}

function successSimulateConsOrderItemCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	var index;

	if (noOfItems > 0) {
		simulatedConsOrder = {
			items : []
		};
		sumSimulatedConsOrder = {
			items : []
		};
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];

			myitem.prodNo = theItems.Material.replace(/^0+/, '');
			myitem.prodDesc = customerConsData.items.find({
				prodNo : myitem.prodNo
			}).prodDesc;
			myitem.batch = theItems.Batch;
			myitem.reqQty = parseFloat(theItems.ReqQty);
			myitem.uom = theItems.SalesUnit;
			myitem.netValue = parseFloat(theItems.NetValue);
			myitem.netPrice = parseFloat(theItems.NetPrice);
			myitem.fillupOrder = theItems.FillupOrder.replace(/^0+/, '');
			myitem.fillupItem = theItems.FillupItem.replace(/^0+/, '');

			simulatedConsOrder.items.push(myitem);

			// also create consolidate consignment simulation
			index = sumSimulatedConsOrder.items.findIndex({
				prodNo : myitem.prodNo,
				netPrice : myitem.netPrice
			});

			if (index >= 0) {
				//found then aggregates
				sumSimulatedConsOrder.items[index].reqQty += parseFloat(myitem.reqQty);
				sumSimulatedConsOrder.items[index].netValue += parseFloat(myitem.netValue);
			} else {
				var newItem = {};
				newItem.prodNo = myitem.prodNo;
				newItem.prodDesc = myitem.prodDesc;
				newItem.batch = myitem.batch;
				newItem.reqQty = myitem.reqQty;
				newItem.uom = myitem.uom;
				newItem.netValue = myitem.netValue;
				newItem.netPrice = myitem.netPrice;
				newItem.fillupOrder = myitem.fillupOrder;
				newItem.fillupItem = myitem.fillupItem;
				sumSimulatedConsOrder.items.push(newItem);
			}

		}
		mainContainer.unmask();
		showConsOrderSimulation();
		updateConsOrderItemStore();
		updateConsTotal(sumSimulatedConsOrder.items);
	}
}

function successSimulateOrderItemCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;

	if (noOfItems > 0) {
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];

			myitem.item = theItems.ItmNumber.replace(/^0+/, '');
			myitem.prod = theItems.Material.replace(/^0+/, '');
			myitem.prodDesc = theItems.ShortText;
			myitem.orderQty = theItems.ReqQty;
			myitem.uom = theItems.SalesUnit;
			myitem.netValue = theItems.NetValue1;
			myitem.currency = theItems.CurrIso;
			myitem.plant = theItems.Plant;

			simulatedOrder.items.push(myitem);
		}
		mainContainer.unmask();
		showOrderSimulation();
	}
}

function successProductSearchCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		prodResultData = {
			items : []
		};
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];
			myitem.prodDesc = theItems.MaterialDescription;
			myitem.prodNo = theItems.Material.replace(/^0+/, '');
			myitem.listPr = theItems.ListPrice;
			myitem.custPr = theItems.CustPrice;
			myitem.uom = theItems.AtpUom;
			myitem.cost = theItems.Cost;
			myitem.stock = theItems.StockQty;
			// for traffic light purpose
			myitem.atpQty = theItems.AtpQty;
			myitem.atp2Qty = theItems.Atp2Qty;
			myitem.atp5Qty = theItems.Atp5Qty;
			myitem.message = theItems.Messages;
			myitem.isObs = theItems.DisConFlag;
			myitem.isCustPurch = theItems.PrePuchFlag;
			myitem.kgPerThs = theItems.KgThs;
			myitem.thsPerPal = theItems.ThsPal;
			myitem.eaPerPk = theItems.EaPack;
			myitem.count = theItems.Count;
			prodResultData.items.push(myitem);
		}
		// show product lists
		Ext.ComponentQuery.query('productTab')[0].push({
			xtype : 'productResultList'
		});
		mainContainer.unmask();
		updateProductResultStore();
	} else {
		// no customer returned
		mainContainer.unmask();
		reportErrorMessage(NO_RESULTS_FOUND_EXCEPTION, function() {
		});
	}

}

function successDisputeListCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	disputeData = {
		items : []
	};
	if (noOfItems > 0) {
		//reset dispute data
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];

			myitem.caseNo = theItems.CaseId.replace(/^0+/, '');
			myitem.title = theItems.CaseTitle;
			myitem.status = theItems.CaseStatus;
			myitem.referenceDoc = theItems.ReferenceDoc;
			myitem.createdBy = theItems.Createdby;
			myitem.processor = theItems.Processor;
			myitem.responsible = theItems.ResponPer;
			myitem.type = 'Dispute Cases';
			// update contact data for activity creation screen
			disputeData.items.push(myitem);
		}
	}
	updateDisputeStore();
}

function successDeleteCustomer(response) {
	Ext.toast('The customer has succesfully deleted.', 1500);
	updateRecentCustomerDelete();
	customerTabPop();
	updateCustomerStore();
}

function successMIProductCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	miProdData = {
		items : []
	};
	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];

			myitem.prodNo = theItems.Material.replace(/^0+/, '');
			myitem.prodDesc = theItems.MaterialDescription;
			myitem.futureMthSales = theItems.FutureMthSales;
			myitem.mtdSales = theItems.MtdSales;
			myitem.lastMthSales = theItems.LastMthSales;
			myitem.avg6MthSales = theItems.Avg6MthSales;
			myitem.agedStock = theItems.AgedStk;
			myitem.atpFlag = theItems.AtpFlag;
			myitem.lastOrdDays = theItems.LastOrdDays;
			myitem.lastQuoDays = theItems.LastQuoDays;
			myitem.requestStatus = theItems.RequestStatus;
			if (myitem.requestStatus == '') {
				myitem.futureMthSales = '';
			}
			myitem.fromDate = theItems.FromDate;
			myitem.toDate = theItems.ToDate;
			myitem.miKey = theItems.MIKey;
			myitem.reason = theItems.Reason;
			myitem.detail = theItems.Detail;
			myitem.salesUom = theItems.SalesUom;
			miProdData.items.push(myitem);
		}
	} else {
		Ext.ComponentQuery.query('#miProductList')[0].setEmptyText('No products information returned');
	}
	updateMIProductStore();
};

function successCustomerRecentActivityCallback(response) {
	var items = JSON.parse(response.responseText).d.results;

	activityData = {
		items : []
	};
	var noOfItems = items.length;
	if (noOfItems > 0) {
		// reset product Result
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];

			myitem.actNo = theItems.ActNo.replace(/^0+/, '');
			myitem.contName = theItems.ContactName;
			myitem.contNo = theItems.ContactNo.replace(/^0+/, '');
			myitem.fromDate = theItems.FromDate;
			myitem.toDate = theItems.ToDate;
			myitem.text = theItems.ActText;
			myitem.createdBy = theItems.Createdby;
			myitem.actType = theItems.ActTypeText;
			myitem.actTypeKey = theItems.ActType;
			myitem.reason = theItems.ActReason;
			myitem.outcome = theItems.ActOutcome;
			myitem.volume = theItems.Volume;
			myitem.quantity = theItems.Quantity;
			myitem.amount = theItems.Amount;
			myitem.salesDoc = theItems.SalesDoc;
			myitem.oppType = theItems.OpportunityType;

			myitem.type = "Recent Activity";
			activityData.items.push(myitem);
		}

	}
	updateActivityStore();
};

function successUserValidate(response) {
	var items = JSON.parse(response.responseText).d;
	//get storage location
	userStorageLoc = items.results[0].StorLoc;

	// validate successfully
	savePasswordCredential();
	if (!credScreen.getHidden()) {
		credScreen.hide();
	}
	mainContainer.unmask();
	Ext.toast(CUSTOMER_LOADING, 10000);
	getCustomerList('');
	getMIReasons();
	getActivitySubTypes();
}

function successSimulateOrderMessageCallback(response) {
	var isSimulationError = false;

	var items = JSON.parse(response.responseText).d.results;

	var noOfItems = items.length;
	if (noOfItems > 0) {
		for (var i = 0; i < noOfItems; i++) {
			var myitem = {};
			var theItems = items[i];

			myitem.messageType = theItems.Type;
			myitem.message = theItems.Message;

			// check is order simulation error
			if (myitem.messageType == 'E') {
				isSimulationError = true;
			}
			orderMessage.items.push(myitem);
		}
	}

	if (!isSimulationError) {

		// call order items
		filters = [{
			field : 'inputOrderHeader',
			value : orderHeader,
		}, {
			field : 'inputOrderItem',
			value : orderItem,
		}, {
			field : 'inputOrderPartner',
			value : orderPartner,
		}, {
			field : 'inputAppType',
			value : mobAppType,
		}];
		var filterString = constructFilter(filters, searchString);
		callOData(simulateOrderItemOData, filterString, successSimulateOrderItemCallback, errCallback, null);

	} else {
		simulatedOrder = {
			items : []
		};
		mainContainer.unmask();
		showOrderSimulation();
	}
}

function successAddAttachmentCallback(response) {
	var items = JSON.parse(response.responseText).d;

	status = items.ReturnStatus;

	if (status == 'S' && consDelivery != null) {
		createDelivery(consOrder);
	} else if (status == 'S' && consDelivery == null) {
		Ext.Msg.alert('Delivery', 'The order ' + consOrder + ' is created but not a delivery. Please look in the system for more information', function() {
			refreshConsData();
			mainContainer.unmask();
		});
	} else {
		mainContainer.unmask();
		reportErrorMessage(ADD_ORDER_ATTACHMENT_EXCEPTION, function() {
		});
	}
}

function successCreateDeliveryCallback(response) {
	var items = JSON.parse(response.responseText).d;

	var status = items.ReturnStatus;

	if (status == 'S') {
		Ext.Msg.alert('Order', 'The order ' + consOrder + ' has been created successfully', function() {
			refreshConsData();
			mainContainer.unmask();
		});
	} else if (status == 'E') {
		Ext.Msg.alert('Order', 'Please check order' + orderNumber + '. The order is not fully processed.', function() {
			refreshConsData();
			mainContainer.unmask();
		});
	}

}