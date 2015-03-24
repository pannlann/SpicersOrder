// file to handle constant variables.
var CUST_SEARCH_PLACE_HOLDER = 'Customer search.....';
var CUST_SEARCH_ITM_ID = 'custSearch';
var APP_EXIT_BUTTOM_TEXT = 'Exit';
var CREDIT_LOW = 0;
var MIN_CHAR_SEARCH = 3;
// percent
var BACK_SPACE_KEYCODE = 8;
var CREDIT_USED_HIGH = 90;
var ATP_LOW = 0;
var ATP_HIGH = 1;
var PRICE_INDEX = 1;
var ATP_QTY_INDEX = 2;
var COUNT_INDEX = 3;
var PRODUCT_DESC_INDEX = 4;
var PRODUCT_CODE_INDEX = 5;
var MESSAGE_HEIGHT = 47;
var LIST_IPAD_HEIGHT = 86;
var LIST_IPHONE_HEIGHT = 76;
var HEADER_HEIGHT = 26;
var REQUEST_TIMEOUT = 120000;
var USER_KEY = 'userKey';
var PASSWORD_KEY = 'passwordKey';
var SHARED_STORAGE_KEY = 'Spicers';
var ERROR_MESSAGE = 'E';
var WARNING_MESSAGE = 'W';
var CREDIT_BLOCK = 'X';
var CREDIT_NOT_BLOCK = '';
var FIND_NUM = 1;
var MAX_HITS = 100;
var MY_CUSTOMER_FLAG = 'MyCustomer';
var SALES_OPPORTUNITY_TYPE = 'Sales Opportunity';
var REGION_LIST = [{
	text : '',
	value : '',
	plant : ''
}, {
	text : 'ACT',
	value : 'ACT',
	plant : '1510'

}, {
	text : 'NSW',
	value : 'NSW',
	plant : '2510'

}, {
	text : 'NT',
	value : 'NT',
	plant : '8510'

}, {
	text : 'QLD',
	value : 'QLD',
	plant : '4510'

}, {
	text : 'SA',
	value : 'SA',
	plant : '5510'

}, {
	text : 'TAS',
	value : 'TAS',
	plant : '7510'

}, {
	text : 'VIC',
	value : 'VIC',
	plant : '3610'

}, {
	text : 'WA',
	value : 'WA',
	plant : '6510'
}];
var CONTACT_DEPARTMENT = [{
	text : '',
	value : ''
}, {
	text : 'Managing Director',
	value : '0001'
}, {
	text : 'Purchasing',
	value : '0002'
}, {
	text : 'Sales',
	value : '0003'
}, {
	text : 'Organization',
	value : '0004'
}, {
	text : 'Administration',
	value : '0005'
}, {
	text : 'Production',
	value : '0006'
}, {
	text : 'Quality assurance',
	value : '0007'
}, {
	text : 'Secretaries',
	value : '0008'
}, {
	text : 'Financial department',
	value : '0009'
}, {
	text : 'Legal department',
	value : '0010'
}];
var CONTACT_FUNCTION = [{
	text : '',
	value : ''
}, {
	text : 'Account Director',
	value : '03'
}, {
	text : 'Account Executive',
	value : '02'
}, {
	text : 'Account Manager',
	value : '04'
}, {
	text : 'Accounts',
	value : 'A'
}, {
	text : 'Admin Manager',
	value : '05'
}, {
	text : 'Administration',
	value : '08'
}, {
	text : 'Area Manager',
	value : '07'
}, {
	text : 'Art Director',
	value : '06'
}, {
	text : 'Assist. Manager',
	value : '34'
}, {
	text : 'CEO',
	value : '24'
}, {
	text : 'Country run',
	value : 'C'
}, {
	text : 'Creative Director',
	value : '09'
}, {
	text : 'Customer Service',
	value : 'V'
}, {
	text : 'Designer',
	value : 'G'
}, {
	text : 'Director',
	value : 'D'
}, {
	text : 'Estimator',
	value : 'E'
}, {
	text : 'Footy Tipper',
	value : 'F'
}, {
	text : 'General Manager',
	value : '10'
}, {
	text : 'Graphic Designer',
	value : '25'
}, {
	text : 'Head Designer',
	value : '28'
}, {
	text : 'Key contact',
	value : '1'
}, {
	text : 'Lecturer',
	value : '31'
}, {
	text : 'Manager',
	value : 'M'
}, {
	text : 'Managing Director',
	value : 'Z'
}, {
	text : 'Marketing',
	value : '26'
}, {
	text : 'Marketing Manager',
	value : '11'
}, {
	text : 'No Mail',
	value : 'X'
}, {
	text : 'Operations Manager',
	value : '12'
}, {
	text : 'Ord acknowledgement',
	value : 'K'
}, {
	text : 'Owner',
	value : '13'
}, {
	text : 'Planner',
	value : '32'
}, {
	text : 'Print Broker',
	value : '14'
}, {
	text : 'Print Manager',
	value : '15'
}, {
	text : 'Print rep',
	value : 'T'
}, {
	text : 'Printing Consultant',
	value : '33'
}, {
	text : 'Production Assistant',
	value : '16'
}, {
	text : 'Production Manager',
	value : 'P'
}, {
	text : 'Project Manager',
	value : '30'
}, {
	text : 'Project Officer',
	value : '29'
}, {
	text : 'Public Relations',
	value : '36'
}, {
	text : 'Publications',
	value : '21'
}, {
	text : 'Publications Manager',
	value : '22'
}, {
	text : 'Purch Officer',
	value : 'O'
}, {
	text : 'Purchasing Manager',
	value : '18'
}, {
	text : 'Receptionist',
	value : 'R'
}, {
	text : 'Sales manager',
	value : 'N'
}, {
	text : 'Senior Designer',
	value : '23'
}, {
	text : 'Specifier',
	value : 'I'
}, {
	text : 'Stock stat',
	value : 'S'
}, {
	text : 'Studio Assistant',
	value : '37'
}, {
	text : 'Studio Director',
	value : '19'
}, {
	text : 'Studio Manager',
	value : '20'
}, {
	text : 'Technical Manager',
	value : '35'
}, {
	text : 'Unknown',
	value : 'U'
}, {
	text : 'Web Designer',
	value : '27'
}];

var CONTACT_TITLE = [{
	text : '',
	value : ''
}, {
	text : 'Mr.',
	value : 'Mr.'
}, {
	text : 'Mrs.',
	value : 'Mrs.'
}, {
	text : 'Ms.',
	value : 'Ms.'
}, {
	text : 'Miss',
	value : 'Miss'
}, {
	text : 'Dr.',
	value : 'Dr.'
}];
var SORT_BY = [{
	text : '',
	value : ''
}, {
	text : 'Price',
	value : 'custPr'
}, {
	text : 'ATP Qty',
	value : 'atpQty'
}, {
	text : 'Purchase Qty',
	value : 'count'
}, {
	text : 'Description',
	value : 'prodDesc'
}, {
	text : 'Code',
	value : 'prodNo'
}];

var SALES_OFFICE = [{
	text : 'Select',
	value : ''
}, {
	text : 'My Customer',
	value : MY_CUSTOMER_FLAG
}, {
	text : 'VIC',
	value : '5010'
}, {
	text : 'NSW',
	value : '5020'
}, {
	text : 'QLD (Brisbane)',
	value : '5030'
}, {
	text : 'QLD (Townsville)',
	value : '5031'
}, {
	text : 'SA',
	value : '5050'
}, {
	text : 'WA',
	value : '5040'
}, {
	text : 'ACT',
	value : '5080'
}, {
	text : 'NT',
	value : '5070'
}, {
	text : 'TAS',
	value : '5060'
}];

var ACTIVITY_REASON = [{
	text : 'Regular Sales Call',
	value : '001'
}, {
	text : 'Advertising Campaign',
	value : '002'
}, {
	text : 'Customer Inquiry',
	value : '003'
}, {
	text : 'Decision Meeting',
	value : '004'
}, {
	text : 'Contract End Date',
	value : '005'
}, {
	text : 'Annual Reports',
	value : '100'
}, {
	text : 'Contract/Tendor/RFP',
	value : '101'
}, {
	text : 'Customer Value Prop',
	value : '102'
}, {
	text : 'New Business',
	value : '103'
}, {
	text : 'Product Replacement',
	value : '104'
}, {
	text : 'Quote',
	value : '105'
}, {
	text : 'Regained Lost Bus',
	value : '106'
}, {
	text : 'Repeat Business',
	value : '107'
}, {
	text : 'Sample /  Follow Up',
	value : '108'
}, {
	text : 'Transfer of Existing',
	value : '109'
}, {
	text : 'Sales Force History',
	value : 'Z00'
}];

var ACTIVITY_OUTCOME = [{
	text : '',
	value : ''
}, {
	text : 'Order Signed',
	value : '001'
}, {
	text : 'Unsuccessful',
	value : '002'
}, {
	text : 'Presentat.to Follow',
	value : '003'
}, {
	text : 'Aroused Interest',
	value : '004'
}, {
	text : 'Completed',
	value : '005'
}, {
	text : 'Successful',
	value : '006'
}, {
	text : 'Build Opportunity',
	value : '100'
}, {
	text : 'Closed Lost',
	value : '101'
}, {
	text : 'Closed Won',
	value : '102'
}, {
	text : 'Cust reqs Machine',
	value : '103'
}, {
	text : 'Negotiation/Review',
	value : '104'
}, {
	text : 'Preparation Phase',
	value : '105'
}, {
	text : 'Quoted Customer',
	value : '106'
}, {
	text : 'Withdrawn',
	value : '107'
}];

var ACTIVITY_TYPE = [{
	text : 'Sales Call',
	value : '0001'
}, {
	text : 'Phone Call',
	value : '0002'
}, {
	text : 'Sales Opportunity',
	value : 'Z001'
}, {
	text : 'Service Call',
	value : 'Z002'
}, {
	text : 'Email',
	value : 'Z003'
}];

var OPPORTUNITY_TYPE = [{
	text : '',
	value : ''
}, {
	text : 'Flip Publishing',
	value : '01'
}, {
	text : 'Commerical Print Pro',
	value : '02'
}, {
	text : 'Indent - Sheets',
	value : '03'
}, {
	text : 'Lost Opportunity',
	value : '04'
}, {
	text : 'Lost Indent -sheets',
	value : '05'
}, {
	text : 'Flip Publishing',
	value : '06'
}, {
	text : 'Sign & Display',
	value : '07'
}, {
	text : 'SAP Sales Order',
	value : '08'
}, {
	text : 'SAP Quote',
	value : '09'
}, {
	text : 'Indent - Reels',
	value : '10'
}, {
	text : 'Lost Indent Reels',
	value : '11'
}, {
	text : 'Sign & Display - Con',
	value : '12'
}, {
	text : 'Hardware',
	value : '13'
}, {
	text : 'Industrial Packaging',
	value : '14'
}, {
	text : 'Product Budget',
	value : '15'
}, {
	text : 'Service Agreement',
	value : '16'
}];

var DISPUTE_CATEGORY = [{
	text : 'Customer Case',
	value : '0004'
}, {
	text : 'Vendor Case',
	value : '0005'
}, {
	text : 'Financial',
	value : '0001'
}];

var DEFAULT_ORDER_TYPE = [{
	text : 'Order',
	value : 'ZSTK'
}, {
	text : 'Quote',
	value : 'ZMQT'
}];

var DEFAULT_SHIPPING_COND = [{
	text : 'Std Within 24 hrs',
	value : '10'
}, {
	text : 'Express Within 4 hrs',
	value : '20'
}, {
	text : 'Pickup Within 4 hrs',
	value : '40'
}];

var DEFAULT_LAST_DAYS = [{
	text : '',
	value : '0'
}, {
	text : '1 Day',
	value : '1'
}, {
	text : '7 Days',
	value : '7'
}, {
	text : '15 Days',
	value : '15'
}, {
	text : '30 Days',
	value : '30'
}, {
	text : '90 Days',
	value : '90'
}, {
	text : '180 Days',
	value : '180'
}];

var STORAGE_LOC = [{
	value : '1510',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Fyshwick Store',
		value : '1000'
	}, {
		text : '2000 | Fyshwick Alt Prd',
		value : '2000'
	}]
}, {
	value : '2510',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Chullora Store',
		value : '1000'
	}, {
		text : '2000 | Chullora Alt Prd',
		value : '2000'
	}, {
		text : 'VH01 | Xpress Van 01',
		value : 'VH01'
	}, {
		text : 'VH02 | Xpress Van 02',
		value : 'VH02'
	}, {
		text : 'VH10 | S&D Office',
		value : 'VH10'
	}, {
		text : 'VH20 | Fotoba Parts',
		value : 'VH20'
	}]
}, {
	value : '3610',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Scoresby Store',
		value : '1000'
	}, {
		text : '1004 | S&D ServiceParts',
		value : '1004'
	}, {
		text : '1005 | Geon S&D Parts',
		value : '1005'
	}, {
		text : '2000 | Scoresby Alt Prd',
		value : '2000'
	}, {
		text : 'VH01 | iMedia van 01',
		value : 'VH01'
	}]
}, {
	value : '4510',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Pinkenba Store',
		value : '1000'
	}, {
		text : '1004 | Virginia Store',
		value : '1004'
	}, {
		text : '2000 | Pinkenba Alt Prd',
		value : '2000'
	}, {
		text : '2004 | Virginia Alt Prd',
		value : '2004'
	}]
}, {
	value : '4520',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Townsville Store',
		value : '1000'
	}, {
		text : '2000 | Tnsville Alt Prd',
		value : '2000'
	}]
}, {
	value : '5510',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Beverley Store',
		value : '1000'
	}, {
		text : '1005 | Beverley Consum',
		value : '1005'
	}, {
		text : '2000 | Beverley Alt Prd',
		value : '2000'
	}, {
		text : 'VH30 | C.Knowles Cons',
		value : 'VH30'
	}, {
		text : 'VH31 | C.Nicholls Cons',
		value : 'VH31'
	}, {
		text : 'VH32 | N.Catalano Cons',
		value : 'VH32'
	}, {
		text : 'VH33 | M.O Connor Cons',
		value : 'VH33'
	}]
}, {
	value : '6510',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Bassendean Store',
		value : '1000'
	}, {
		text : '1005 | Bssendean Consum',
		value : '1005'
	}, {
		text : '2000 | Bssendean Alt Pr',
		value : '2000'
	}]
}, {
	value : '7510',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Derwent Park',
		value : '1000'
	}, {
		text : '2000 | Drwnt Prk Alt Pr',
		value : '2000'
	}]
}, {
	value : '8510',
	items : [{
		text : '',
		value : ''
	}, {
		text : '1000 | Winnellie Store',
		value : '1000'
	}, {
		text : '2000 | Winnellie Alt Pr',
		value : '2000'
	}]
}]

var DEFAULT_PLANTS = [{
	text : '1510',
	value : '1510'
}, {
	text : '2510',
	value : '2510'
}, {
	text : '3610',
	value : '3610'
}, {
	text : '4510',
	value : '4510'
}, {
	text : '4520',
	value : '4520'
}, {
	text : '5510',
	value : '5510'
}, {
	text : '6510',
	value : '6510'
}, {
	text : '7510',
	value : '7510'
}, {
	text : '8510',
	value : '8510'
},  {
	text : 'All states',
	value : ''	
}];

var REGIONAL_CUSTOMER_HEADING = 'Regional Customers';
var NO_SEARCH_RESULT_HEADING = 'No results returned';
var TRY_CATCH_ERROR_HEADING = 'Error';
var REGIONAL_CUSTOMER_HEADING = 'Regional Customers';
var NO_RESULTS_FOUND_HEADING = 'No products found';
var NO_CUST_RESULT_HEADING = 'No customers returned';
var USR_ACCOUNT_ERROR_HEADING = 'User account error';
var TOO_MANY_RESULT_HEADING = 'Too many search hits';
var INPUT_ERROR_HEADING = 'Input error';
var CONNECTION_LOST_HEADING = 'Connection Lost';
var TIMEOUT_HEADING = 'Timeout';
var PLANT_NOT_ASSIGNED_HEADING = "Error";
var CUSTOMER_CONTACT_LIST_HEADING = "Error";
var RECENT_ACTIVITY_LIST_HEADING = "Error";
var ERROR_CHANGING_CUSTOMER_HEADING = 'Error';

var NO_SEARCH_RESULT_TEXT = 'Please check the search options.';
var NO_RESULTS_FOUND_TEXT = 'Please change date range to get more result.';
var NO_CUST_RESULT_TEXT = 'No customers found.';
var NO_SALES_OFFICE_RESULT_TEXT = 'Please check whether sales office is assigned correctly in SAP.';
var NO_VAN_RESULT_TEXT = 'Please check whether paper van number is assigned correctly in SAP.';
var ERROR_INPUT_RESULT_TEXT = 'Please contact IT.';
var TOO_MANY_RESULT_TEXT = 'Please refine search';
var REGIONAL_CUSTOMER_TEXT = 'It will take a minute to retrieve all customers. Do you want to load the customers?';
var CONNECTION_LOST_TEXT = 'Please check your internet connection.';
var TIMEOUT_TEXT = 'A request takes longer than expected. Please check internet signal and try again.';
var PLANT_NOT_ASSIGNED_TEXT = "A plant number is not assigned in SAP user's account. Please contact SAP team";
var DELIVERY_BATCH_SPLIT_TEXT = 'An error occurs when spliting batches. Please change a delivery and manually assign batches';
var CUSTOMER_CONTACT_LIST_TEXT = 'An error occurs when retriving contact list. Please try again';
var RECENT_ACTIVITY_LIST_TEXT = 'An error occurs when retriving activity list. Please try again';
var ERROR_CHANGING_CUSTOMER_TEXT = 'The customer may be locked. Please try again later';
var ERROR_DELETING_CUSTOMER_TEXT = 'The customer may be locked. Please try again later';
var CANNOT_DELETE_DOM_CUST_TEXT = 'The trade customer cannot be delete';
var ERROR_CREATING_ACTIVITY_TEXT = 'An error has occurred. An activity may not be created';
var ERROR_CREATING_CONTACT_TEXT = 'An error has occurred. The contact may not be created';
var ERROR_CHANGING_CONTACT_TEXT = 'The contact may be locked by other users. So it cannot be changed at the moment';
var ERROR_CREATING_DISPUTE_TEXT = 'An error has occurred. A dispute case may not be created';
var CREATE_CUSTOMER_ERROR_TEXT = 'An error has occurred. The customer may not be created';
var ERROR_DELETING_CONTACT_TEXT = 'Cannot delete a contact which is linked to sales activity';
var CONTACT_LINK_SALES_ACT_TEXT = 'Cannot delete a contact which is linked to sales activity';
var MATERIAL_PLANT_NOT_FOUND_TEXT = 'Material/plant error';
var ERROR_CREATE_MI_REQUEST_TEXT = 'An error has occurred. An IM request may not be created.';
var ERROR_UPDATE_CUST_SETTING_TEXT = "An error has occurred. Customer's setting may not be updated.";
var CREATE_ORDER_ERROR_TEXT = 'An error has occurred. An order is not created.';
var CHANGE_SALES_ACT_ERROR_TEXT = 'An error has occurred. A sales activity is not updated.';

var TOO_MANY_EXCEPTION = 'TOO_MANY_SEARCH_HITS';
var INVALID_USER_EXCEPTION = 'INVALID_USER';
var NO_CUSTOMERS_FOUND_EXCEPTION = 'NO_CUSTOMERS_FOUND';
var REP_NOT_ASSIGNED_EXCEPTION = 'REP_NOT_ASSIGNED';
var NO_SALES_OFFICE_EXCEPTION = 'NO_SALES_OFFICE';
var INPUT_ERROR_EXCEPTION = 'INPUT_ERROR';
var NO_RESULTS_FOUND_EXCEPTION = 'NO_RESULTS_FOUND';
var CONNECTION_LOST_EXCEPTION = 'CONNECTION_LOST';
var UNKNOWN_EXCEPTION = 'UNKNOWN';
var TIMEOUT_EXCEPTION = 'TIMEOUT';
var ADD_ORDER_ATTACHMENT_EXCEPTION = 'ORDER_ATTACHMENT_EXCEPTION';
var PLANT_NOT_ASSIGNED_EXCEPTION = 'NO_PLANT_ASSIGNED';
var CUSTOMER_CONTACT_LIST_EXCEPTION = 'CUSTOMER_CONTACT_LIST_ERROR';
var RECENT_ACTIVITY_LIST_EXCEPTION = 'RECENT_ACTIVITY_LIST_ERROR';
var ERROR_CHANGING_CUSTOMER_EXCEPTION = 'ERROR_CHANGING_CUSTOMER';
var ERROR_DELETING_CUSTOMER_EXCEPTION = 'ERROR_DELETING_CUSTOMER';
var CANNOT_DELETE_DOM_CUST_EXCEPTION = 'CANNOT_DELETE_DOM_CUST';
var ERROR_CREATING_ACTIVITY_EXCEPTION = 'ERROR_CREATING_SALES_ACTIVITY';
var ERROR_CREATING_CONTACT_EXCEPTION = 'ERROR_CREATING_CONTACT';
var ERROR_CHANGING_CONTACT_EXCEPTION = 'ERROR_CHANGING_CONTACT';
var ERROR_CREATING_DISPUTE_EXCEPTION = 'ERROR_CREATING_DISPUTE';
var CREATE_CUSTOMER_ERROR_EXCEPTION = 'CREATE_CUSTOMER_ERROR';
var ERROR_DELETING_CONTACT_EXCEPTION = 'ERROR_DELETING_CONTACT';
var CONTACT_LINK_SALES_ACT_EXCEPTION = 'CONTACT_LINK_SALES_ACT';
var MATERIAL_PLANT_NOT_FOUND_EXCEPTION = 'MATERIAL_PLANT_NOT_FOUND';
var ERROR_CREATE_MI_REQUEST_EXCEPTION = 'ERROR_CREATE_MI_REQUEST';
var ERROR_UPDATE_CUST_SETTING_EXCEPTION = 'ERROR_UPDATE_CUST_SETTING';
var CREATE_ORDER_ERROR_EXCEPTION = 'CREATE_ORDER_ERROR';
var CHANGE_SALES_ACT_ERROR_EXCEPTION = 'CHANGE_SALES_ACT_ERROR';

// // loading message
var VALIDATE_ACCOUNT_LOADING = 'Validating user account...';
var PRODUCT_LOADING = 'Retrieving products...';
var CUSTOMER_LOADING = 'Retrieving customers...';
var PREV_PUR_LOADING = 'Retrieving previous purchases...';
var ORDER_SIMULATE_LOADING = 'Simulating an order...';
var CONS_ORDER_SIMULATE_LOADING = 'Simulating a consigment order...';
var ORDER_CREATE_LOADING = 'Creating an order...';
var ACTIVITY_CREATE_LOADING = 'Creating an activity...';
var ACTIVITY_CHANGE_LOADING = 'Changing an activity...';
var MI_REQ_CREATE_LOADING = 'Submitting a MI request...';
var DISPUTE_CREATE_LOADING = 'Creating a dispute case...';
var CONTACT_CHANGE_LOADING = 'Changing contact detail...';
var CONTACT_CREATE_LOADING = 'Creating contact detail...';
var CUSTOMER_CREATE_LOADING = 'Creating customer...';
var CUSTOMER_CHANGE_LOADING = 'Changing customer...';
var CUSTOMER_SETTING_CHANGE_LOADING = "Changing customer's setting...";
var CONTACT_LOADING = 'Retrieving contacts...';
var RECENT_ACT_LOADING = 'Retrieving activities...';
var DISPUTE_LOADING = 'Retrieving dispute cases...';
var DELETE_CUSTOMER_LOADING = 'Deleting customer...';
var DELETE_CONTACT_LOADING = 'Deleting contact...';
var CUSTOMER_ADDRESS_LOADING = 'Loading customer address...';
var MI_SUBMIT_LOADING = 'Submitting MI request...';
var PROCESSING_CONS_LOADING = 'Processing consignment orders';
var ADD_ATTACHMENT_LOADING = "Adding attachment...";
// ERROR CONST
var DEVICE_NOT_CONNECTED = 'Device%2520not%2520connected';
var DEVICE_TIME_OUT = 'Server%2520response%2520time%2520out';

