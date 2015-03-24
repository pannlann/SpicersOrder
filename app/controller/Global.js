// file to handle global variables.
var environment = 'R3P';
var serverConnection;
var noItemInCart = 1;
var mobAppType = 'SAL';
var currentTab;
var mainContainer;
var credScreen;
var selectedSalesAct;
var selectedCust;
var selectedCustAddr = {};
var selectedCustSetting = {};
var signatureWidth;
var signatureHeight;
var selectedContact;
var lastSavedPlant = '3610';
var currentCustomerForMIProduct;
var sharedStorage;
var calledBAPI;
var filters;
var searchString;
var consSearchTask;
var custSearchTask;
var miProdSearchTask;
var userStorageLoc;
var storageLocOptions;
var customerPlant;
var isSkipProductSalesHistory;
var openInboundDeliveryPayload;
var customerDetailPayload;
var customerSettingPayload;
var contactPayload;
var customerVanSchedulePayload;
var imRequestPayload;
var activityPayload;
var orderPayload;
var disputePayload;
var attachmentPayload;
var deliveryPayload;
var processedConsPayload;
var selectedSalesOffice = '';
var orderMessage = {
	items : []
};
var customerConsData = {
	items : []
};
var searchProdSalesHistoryData = {
	items : []
};
var preProdSalesHistoryData = {
	items : []
};
var miProdSalesHistoryData = {
	items : []
};
var searchProdAtpData = {
	items : []
};
var previousProdAtpData = {
	items : []
};
var miProdAtpData = {
	items : []
};
var searchProdMIHistData = {
	items : []
};
var previousProdMIHistData = {
	items : []
};
var miProdMIHistData = {
	items : []
};
var miReasonsList = [];
var activitySubTypeList = [];
var consCompleteOrder = {
	items : []
};
var consOrder;
var consDelivery;
var miDisplayPanel;
var productHistoryViewID;
var shiptoData = [];
var customerListItemHeight;
var isInOrderConfirmationScreen = false;
var activityNumber;
var disputeNumber;
var orderNumber;
var orderHeader;
var orderItem;
var orderPartner;
var availableContact = [];
var isContactReadOnly = false;
var simulatedOrder = {
	items : []
};
var simulatedConsOrder = {
	items : []
};
var sumSimulatedConsOrder = {
	items : []
};
var tempMIReq = {};
var tempDispute = {};
var tempActivity = {};
var tempNewContact = {};
var tempNewCustomer = {};
var tempChangeCustomer = {};
var tempActivityText = "";
var fieldLabelWidth;
//********************* options ***********************
var customerContainerOption;
var customerDetailOption;
var miCreatePanel;

// Selected product in format of
// items : {}
var userId;
var password;
var prodSalesHistoryData = {
	items : []
};
var customerData = {
	items : []
};
var contactData = {
	items : []
};
var activityData = {
	items : []
};
var disputeData = {
	items : []
};
var days = '7';
// TODO: need to retrieve crt data from local storage and save it into
// productsInCart when app is initilised

var productsInCart = {
	items : []
};
var selectedCustomerAddress = '';
var selectedProduct;
var selectedMIProduct;
var selectedCustRecord;
var prevProdData = {
	items : []
};
var prodResultData = {
	items : []
};
var miProdData = {
	items : []
};
