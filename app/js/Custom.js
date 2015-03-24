var errCallback = function(error) {
	mainContainer.unmask();
	if (error.statusText != 'transaction aborted') {
		if (error.status == 0 && error.stausText == null && error.responseText == '') {
			// no internet connection
			mainContainer.unmask();
			reportErrorMessage(CONNECTION_LOST_EXCEPTION, function() {
			});
		} else if (error.request.options.url.indexOf(getValidateAccountOData.entitySet) > 0) {
			// unauthorised username and password
			showIncorrectPasswordAlert();
		} else if (error.timedout == true) {
			mainContainer.unmask();
			reportErrorMessage(TIMEOUT_EXCEPTION, function() {
			});
		} else {
			mainContainer.unmask();
			reportErrorMessage(error.responseText, function() {
			});
		}

	}
};

// to include css based on device type
function includeCss() {

	// Setup criteria for css
	var cssfile;

	if (Ext.os.deviceType != 'Phone') {
		cssfile = "SpicersOrder_iPad.css";
		// cssfile = "SpicersOrder.css";
		fieldLabelWidth = '30%';
		signatureWidth = 500;
		signatureHeight = 400;
		customerListItemHeight = 70;
	} else {
		cssfile = "SpicersOrder.css";
		fieldLabelWidth = '50%';
		signatureWidth = 300;
		signatureHeight = 200;
		customerListItemHeight = 60;
	}

	var headID = document.getElementsByTagName("head")[0];
	var newScript = document.createElement("link");
	newScript.type = "text/css";
	newScript.rel = "stylesheet";
	newScript.href = "app/resource/css/" + cssfile;
	headID.appendChild(newScript);
}

function reportErrorMessage(errorString, callbackFunction) {
	var alertHeader;
	var alertDetail;
	var saveLog = false;
	var toastOnly = true;
	// check exeption
	if (errorString.indexOf(INVALID_USER_EXCEPTION) >= 0) {
		alertHeader = USR_ACCOUNT_ERROR_HEADING;
		alertDetail = '';
	} else if (errorString.indexOf(NO_CUSTOMERS_FOUND_EXCEPTION) >= 0) {
		alertHeader = NO_CUST_RESULT_HEADING;
		alertDetail = NO_CUST_RESULT_TEXT;
	} else if (errorString.indexOf(NO_SALES_OFFICE_EXCEPTION) >= 0) {
		alertHeader = USR_ACCOUNT_ERROR_HEADING;
		alertDetail = NO_SALES_OFFICE_RESULT_TEXT;
	} else if (errorString.indexOf(INPUT_ERROR_EXCEPTION) >= 0) {
		alertHeader = INPUT_ERROR_HEADING;
		alertDetail = ERROR_INPUT_RESULT_TEXT;
	} else if (errorString.indexOf(CONNECTION_LOST_EXCEPTION) >= 0) {
		alertHeader = CONNECTION_LOST_HEADING;
		alertDetail = CONNECTION_LOST_TEXT;
	} else if (errorString.indexOf(TIMEOUT_EXCEPTION) >= 0) {
		alertHeader = TIMEOUT_HEADING;
		alertDetail = TIMEOUT_TEXT;
	} else if (errorString.indexOf(NO_RESULTS_FOUND_EXCEPTION) >= 0) {
		alertHeader = NO_SEARCH_RESULT_HEADING;
		alertDetail = NO_SEARCH_RESULT_HEADING + '. ' + NO_SEARCH_RESULT_TEXT;
	} else if (errorString.indexOf(PLANT_NOT_ASSIGNED_EXCEPTION) >= 0) {
		alertHeader = PLANT_NOT_ASSIGNED_HEADING;
		alertDetail = PLANT_NOT_ASSIGNED_TEXT;
	} else if (errorString.indexOf(TOO_MANY_EXCEPTION) >= 0) {
		alertDetail = TOO_MANY_RESULT_HEADING + '. ' + TOO_MANY_RESULT_TEXT;
	} else if (errorString.indexOf(CUSTOMER_CONTACT_LIST_EXCEPTION) >= 0) {
		alertDetail = CUSTOMER_CONTACT_LIST_TEXT;
	} else if (errorString.indexOf(RECENT_ACTIVITY_LIST_EXCEPTION) >= 0) {
		alertDetail = RECENT_ACTIVITY_LIST_TEXT;
	} else if (errorString.indexOf(ERROR_CHANGING_CUSTOMER_EXCEPTION) >= 0) {
		alertDetail = ERROR_CHANGING_CUSTOMER_TEXT;
	} else if (errorString.indexOf(ERROR_DELETING_CUSTOMER_EXCEPTION) >= 0) {
		alertDetail = ERROR_DELETING_CUSTOMER_TEXT;
	} else if (errorString.indexOf(CANNOT_DELETE_DOM_CUST_EXCEPTION) >= 0) {
		alertDetail = CANNOT_DELETE_DOM_CUST_TEXT;
	} else if (errorString.indexOf(ERROR_CREATING_ACTIVITY_EXCEPTION) >= 0) {
		alertDetail = ERROR_CREATING_ACTIVITY_TEXT;
	} else if (errorString.indexOf(ERROR_CREATING_CONTACT_EXCEPTION) >= 0) {
		alertDetail = ERROR_CREATING_CONTACT_TEXT;
	} else if (errorString.indexOf(ERROR_CHANGING_CONTACT_EXCEPTION) >= 0) {
		alertDetail = ERROR_CHANGING_CONTACT_TEXT;
	} else if (errorString.indexOf(ERROR_CREATING_DISPUTE_EXCEPTION) >= 0) {
		alertDetail = ERROR_CREATING_DISPUTE_TEXT;
	} else if (errorString.indexOf(CREATE_CUSTOMER_ERROR_EXCEPTION) >= 0) {
		alertDetail = CREATE_CUSTOMER_ERROR_TEXT;
	} else if (errorString.indexOf(ERROR_DELETING_CONTACT_EXCEPTION) >= 0) {
		alertDetail = ERROR_DELETING_CONTACT_TEXT;
	} else if (errorString.indexOf(CONTACT_LINK_SALES_ACT_EXCEPTION) >= 0) {
		alertDetail = CONTACT_LINK_SALES_ACT_TEXT;
	} else if (errorString.indexOf(MATERIAL_PLANT_NOT_FOUND_EXCEPTION) >= 0) {
		alertDetail = MATERIAL_PLANT_NOT_FOUND_TEXT;
	} else if (errorString.indexOf(ERROR_CREATE_MI_REQUEST_EXCEPTION) >= 0) {
		alertDetail = ERROR_CREATE_MI_REQUEST_TEXT;
	} else if (errorString.indexOf(ERROR_UPDATE_CUST_SETTING_EXCEPTION) >= 0) {
		alertDetail = ERROR_UPDATE_CUST_SETTING_TEXT;
	} else if (errorString.indexOf(CREATE_ORDER_ERROR_EXCEPTION) >= 0) {
		alertDetail = CREATE_ORDER_ERROR_TEXT;
	} else if (errorString.indexOf(CHANGE_SALES_ACT_ERROR_EXCEPTION) >= 0) {
		alertDetail = CHANGE_SALES_ACT_ERROR_TEXT;
	} else {
		alertHeader = "Unknown error";
		alertDetail = "Please contact IT";
		saveLog = true;
	}
	if (toastOnly) {
		Ext.toast(alertDetail, 2000);
	} else {
		Ext.Msg.alert(alertHeader, alertDetail, callbackFunction);
	}

}

function isIPad() {
	if (Ext.os.deviceType != 'Phone' && Ext.os.is.iOS) {
		return true;
	} else {
		return false;
	}
}

function isDesktop() {
	return (Ext.os.deviceType == 'Desktop');
}

function getCurrentYear() {
	return new Date().getFullYear();
}

function getMaxYear() {
	return new Date().getFullYear() + 2;
}

function convertSAPDateToJSDate(sapDate) {
	var resultDate;
	var dmy = convertToDMYDate(sapDate).split('-');
	resultDate = new Date(Date.UTC(parseInt(dmy[2]), parseInt(dmy[1]) - 1, parseInt(dmy[0])));
	return resultDate;
}

function getDefaultMIFromDate(fromDate) {
	var myDate;
	if (fromDate != null) {
		myDate = convertSAPDateToJSDate(fromDate);
	} else {
		myDate = new Date();
	}

	//add a day to the date
	myDate.addDays(1);

	return myDate;
}

function getDefaultMIToDate(fromDate) {
	var myDate;
	if (fromDate != null) {
		myDate = convertSAPDateToJSDate(fromDate);
	} else {
		myDate = new Date();
	}

	//add a day to the date
	myDate.addDays(1);

	// default 6 months beyond from date
	myDate.addMonths(6);
	return myDate;
}

function getDefaultRequestedDelDate() {
	return new Date();
}

function getDefaultRequestedValToDate() {
	var myDate = new Date();

	//add a day to the date
	myDate.setDate(myDate.getDate() + 1);

	return myDate;
}