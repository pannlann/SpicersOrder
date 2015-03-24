Ext.define('SpicersOrder.controller.Controller', {
	extend : 'Ext.app.Controller',

	config : {
		profile : Ext.os.deviceType.toLowerCase(),
		refs : {
			mainPanel : 'mainPanel',
			customerList : 'customerList',
			productSearch : 'productSearch',
			productTab : 'productTab',
			productResultList : 'productResultList',
			productDesc : 'productDesc',
			cartList : 'cartList',
			cartTab : 'cartTab',
			customerTab : 'customerTab',
			cartOrder : 'cartOrder',
			previousPurchaseList : 'previousPurchaseList',
			previousPurchaseTab : 'previousPurchaseTab',
			orderMessageList : 'orderMessageList',
			orderItemList : 'orderItemList',
			customerMain : 'customerMain',
			activityCreation : 'activityCreation',
			activityUpdate : 'activityUpdate',
			disputeCreation : 'disputeCreation',
			customerRecentActivity : 'customerRecentActivity',
			customerContact : 'customerContact',
			customerContactChange : 'customerContactChange',
			customerDispute : 'customerDispute',
			customerDetailOption : 'customerDetailOption',
			customerCreate : 'customerCreate',
			customerChange : 'customerChange',
			productDescMain : 'productDescMain',
			customerSettingChange : 'customerSettingChange',
			miProductTab : 'miProductTab',
			miProductList : 'miProductList',
			miCreate : 'miCreate',
			miReasonDisplay : 'miReasonDisplay',
			miProductContainer : 'miProductContainer',
			consignmentContainter : 'consignmentContainer',
			consOrderConfirmation : 'consOrderConfirmation'
		},
		control : {
			miProductContainer : {
				activate : 'onMIProductContainerActivate'
			},

			productDescMain : {
				activate : 'onProductDescMainActivate'
			},

			customerCreate : {
				initialize : 'onCustomerCreateInit',
			},

			'consOrderConfirmation button[itemId=consSubmitOrderButton]' : {
				tap : 'onConsSubmitOrder'
			},

			'consignmentContainer button[itemId=consConfirmButton]' : {
				tap : 'onConsConfirmButton',
			},

			'activityCreation textareafield[itemId=activityCreationTextArea]' : {
				focus : 'onTextAreaFocus',
				blur : 'onTextAreaBlur',
			},

			'activityUpdate textareafield[itemId=updateActivityTextArea]' : {
				focus : 'onTextAreaFocus',
				blur : 'onTextAreaBlur',
			},

			'disputeCreation textareafield[itemId=disputeCreationTextArea]' : {
				focus : 'onTextAreaFocus',
				blur : 'onTextAreaBlur',
			},

			'customerCreate button[itemId=customerCreateButton]' : {
				tap : 'onCreateCustomerSubmit',
			},

			'customerChange button[itemId=customerChangeButton]' : {
				tap : 'onChangeCustomerSubmit',
			},

			'customerSettingChange button[itemId=customerChangeSettingButton]' : {
				tap : 'onChangeCustomerSettingSubmit',
			},

			'customerSettingChange numberfield[itemId=settingAllOrder]' : {
				keyup : 'onChangeAllOrderField',
			},

			'miCreate numberfield[itemId=futureMthSalesMI]' : {
				change : 'onChangeFutureMthSalesMI',
			},

			'miCreate selectfield[itemId=miReasonsSelect]' : {
				change : 'onChangeMIReasonsSelect',
			},

			'miReasonDisplay button[itemId=miReasonDisplayButton]' : {
				tap : 'onMIDisplayBackButtonTap',
			},

			'miCreate button[itemId=miSubmitButton]' : {
				tap : 'onMISubmitButtonTap',
			},

			customerDispute : {
				initialize : 'onCustomerDisputeInit',
			},

			customerDetailOption : {
				show : 'onCustomerDetailOptionShow',
			},

			'customerContactCreate button[itemId=contactCreateButton]' : {
				tap : 'onCreateContactSubmit',
			},

			'customerContactChange button[itemId=contactChangeButton]' : {
				tap : 'onChangeContactSubmit',
			},

			'activityCreation button[itemId=activityCreationButton]' : {
				tap : 'onActivitySubmit',
			},

			'activityCreation selectfield[itemId=activityTypeSelect]' : {
				change : 'onActivityTypeChange',
			},

			'activityUpdate button[itemId=updateActivityButton]' : {
				tap : 'onActivityUpdate',
			},

			'activityUpdate selectfield[itemId=updateActivityTypeSelect]' : {
				change : 'onUpdateActivityTypeChange',
			},

			activityCreation : {
				initialize : 'onActivityCreationInit',
			},

			activityUpdate : {
				initialize : 'onActivityUpdateInit',
			},

			disputeCreation : {
				initialize : 'onDisputeCreationInit',
			},

			'disputeCreation button[itemId=disputeCreationButton]' : {
				tap : 'onDisputeCreationSubmit',
			},

			customerContact : {
				itemtap : 'onContactTab',
			},

			customerRecentActivity : {
				itemtap : 'onRecentActTab',
			},

			miCreate : {
				back : 'onMICreateBack',
				pop : 'onMICreateBack',
			},

			customerTab : {
				back : 'onCustomerTabBack',
				pop : 'onCustomerTabBack',
			},

			customerMain : {
				activate : 'onCustomerMainActivate'
			},

			orderConfirmation : {
				activate : 'onOrderConfirmationActivate'
			},
			'mainPanel' : {
				activate : 'onActivate',
				activeitemchange : 'onChangeTab'
			},
			'mainPanel searchfield[itemId=custSearch]' : {
				clearicontap : 'onClearSearch',
				//keyup : 'onSearchKeyUp'
			},

			'miProductTab searchfield[itemId=miProductSearch]' : {
				clearicontap : 'onMIClearSearch',
				//keyup : 'onMISearchKeyUp',
			},

			'miProductTab button[itemId=miAddToCartButton]' : {
				tap : 'onAddToCartTap'
			},

			miProductList : {
				activate : 'onMIProductListActivate',
				itemsingletap : 'onMIProductListSelect',
				itemtaphold : 'onMIProductListHold',
			},

			customerList : {
				select : 'onCustomerListSelect',
				itemdoubletap : 'onCustomerListDoubleTap',
				initialize : 'onCustListIniialize',
				deselect : 'onCustomerListDeselect',
			},

			productSearch : {
				activate : 'onProductActivate'
			},

			'productSearch numberfield[itemId=atpQty]' : {
				blur : 'onBlur'
			},

			'productSearch button[itemId=productSearchButton]' : {
				tap : 'onSearchTap'
			},

			productDesc : {
				activate : 'onProductDescActivate'
			},

			'productDesc button[itemId=addMIButton]' : {
				tap : 'onAddMIButtonTap'
			},

			productResultList : {
				activate : 'onProductResultActivate',
				select : 'onProductResultListSelect'
			},

			'productTab button[itemId=productSortButton]' : {
				tap : 'onSortTap'
			},

			'productTab button[itemId=addToCartButton]' : {
				tap : 'onAddToCartTap'
			},

			cartList : {
				// itemswipe : 'onCartItemSwipe',
				itemdoubletap : 'onCartItemDoubleTap',
				itemsingletap : 'onCartListSelect',
				activate : 'onCartListActivate',
				painted : 'onCartListActivate'
			},

			'cartTab button[itemId=deleteAllButton]' : {
				tap : 'onDeleteAllTap'
			},

			'cartTab button[itemId=checkoutButton]' : {
				tap : 'onOrderConfirmation'
			},

			'cartTab selectfield[itemId=deliveringPlant]' : {
				change : 'onDeliveringPlantChange'
			},

			cartTab : {
				show : 'onCartTabShow'
			},

			cartOrder : {
				back : 'onCartOrderBack'
			},

			'cartOrder button[itemId=doneButton]' : {
				tap : 'onUpdateItemTap'
			},

			'cartOrder button[itemId=createOrderButton]' : {
				tap : 'onCreateOrderButtonTap'
			},

			'cartOrderDetail selectfield[itemId=orderType]' : {
				change : 'onOrderTypeChange'
			},

			'previousPurchaseTab selectfield[itemId=daysSelectField]' : {
				change : 'onDaysSelected'
			},

			previousPurchaseList : {
				activate : 'onPreviousPurchaseActivate',
				select : 'onPreviousPurchaseListSelect'

			},

			'previousPurchaseTab button[itemId=previousPurchaseSortButton]' : {
				tap : 'onSortTap'
			},

			'sortPicker' : {
				// change : 'onSortChange',
				pick : 'onSortChange'
			},

			'previousPurchaseTab button[itemId=preAddToCartButton]' : {
				painted : 'onPreAddButtonPainted',
				tap : 'onAddToCartTap'
			},

			previousPurchaseTab : {
				back : 'onPreviousPruchaseBack'
			},

			'credentialScreen button[itemId=loginButton]' : {
				tap : 'onLoginButtonTap'
			},

			'customerTab button[itemId=customerContainerOptionButton]' : {
				tap : 'onCustomerContainerOptionButtonTap'
			},
			'customerTab button[itemId=customerDetailOptionButton]' : {
				tap : 'onCustomerDetailOptionButtonTap'
			},
			'customerDetailOption button[itemId=createActivityOption]' : {
				tap : 'onCreateActivityButtonTap'
			},
			'customerDetailOption button[itemId=createContactOption]' : {
				tap : 'onCreateContactOptionTap'
			},
			'customerTab button[itemId=customerDetailButton]' : {
				tap : 'onCustomerDetailButtonTap'
			},

			'customerDetailOption button[itemId=createDisputeOption]' : {
				tap : 'onCreateDisputeButtonTap'
			},
			'customerContainerOption selectfield[itemId=refreshCustomerOptionSelect]' : {
				change : 'onRefreshCustomerOptionSelectChange',
			},
			'customerContainerOption button[itemId=createCustomerButton]' : {
				tap : 'onCreateCustomerButtonTap',
			},
			'customerDetailOption button[itemId=changeCustomerOption]' : {
				tap : 'onChangeCustomerButtonTap',
			},
			'customerDetailOption button[itemId=changeCustomerSettingOption]' : {
				tap : 'onChangeCustomerSettingButtonTap',
			},
			'customerDetailOption button[itemId=deleteCustomerOption]' : {
				tap : 'onDeleteCustomerOptionTap',
			},

		}
	},
	onConsConfirmButton : function(button) {
		var consPONumber = Ext.ComponentQuery.query('#consPONumber')[0].getValue().trim();
		var usedConsignment = getUsedConsignment();
		var consignmentItem;
		// check PO number
		if (consPONumber.length == 0) {
			Ext.toast('Please enter PO number', 3000);
			return false;
		}
		// check counting PO stock
		if (usedConsignment.length == 0) {
			Ext.toast('Please update remaining consignment qty to submit an order', 3000);
			return false;
		}
		// check remainingStk cannot be greater than total stk or usedStk is less than 0
		for (var i = 0; i < usedConsignment.length; i++) {
			if (usedConsignment[i].usedStk < 0) {
				Ext.toast('Please check remaining stock of ' + usedConsignment[i].prodNo, 3000);
				return false;
			}
		};

		consignmentItem = prepareConsignmentItem(usedConsignment);
		simulateConsignmentOrder(selectedCust, consPONumber, consignmentItem);
	},

	onTextAreaBlur : function(textArea) {
		textArea.parent.parent.getScrollable().getScroller().setDisabled(false);

	},

	onTextAreaFocus : function(textArea) {
		textArea.parent.parent.getScrollable().getScroller().setDisabled(true);
	},

	onDeleteCustomerOptionTap : function(button) {
		customerDetailOption.hide();
		Ext.Msg.confirm("Confirm", "Do you want to delete a customer?", function(buttonId) {
			if (buttonId === 'yes') {
				deleteCustomer();
			}
		}, this // scope of the controller
		);
	},

	onRefreshCustomerOptionSelectChange : function(select, newValue, oldValue) {
		if (newValue != '') {
			var salesOffice;
			if (newValue != MY_CUSTOMER_FLAG) {
				salesOffice = newValue;
			} else {
				salesOffice = '';
			}

			customerContainerOption.setHidden(true);
			selectedSalesOffice = salesOffice;
			if (salesOffice == '') {
				Ext.toast(CUSTOMER_LOADING, 10000);
				getCustomerList(salesOffice);
			} else {
				var custSearchField = Ext.ComponentQuery.query('#custSearch')[0];
				var queryString = custSearchField.getValue();
				if (queryString.length >= MIN_CHAR_SEARCH) {
					searchString = queryString;
					getCustomerList(selectedSalesOffice);
					searchString = '';
				} else {
					// move curdor to search string
					Ext.defer(function() {
						custSearchField.focus();
					}, 300);
				}
				// Ext.toast('Please type at least 3 letters in customer search field', 2000);
			}

		}
	},
	onMIProductContainerActivate : function(panel) {
		// hide add button
		button = Ext.ComponentQuery.query('#miAddToCartButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
	},

	onProductDescMainActivate : function(carousel) {
		console.log('onProductDescMainActivate');
		var totalItems = carousel.getItems().items;
		var carouselId = carousel.getId();
		var productDesc;
		var productHist;
		var productAtp;
		var productMIHist;
		var productDescId;
		var productHistId;
		var productAtpId;
		var productMIHistId;
		var productHistStoreType;
		var productAtpStoreType;
		var productMIHistStoreType;
		var hideLoadMoreButton = false;

		// check whether the panel has already exist
		if (totalItems.length == 0) {
			// assign id to different views
			if (carouselId == 'searchProductDescMain') {
				productDescId = 'searchProductDesc';
				productHistId = 'searchProductDescHist';
				productAtpId = 'searchProductDescAtp';
				productMIHistId = 'searchProductDescMIHist';
				// set store type
				productHistStoreType = 'searchProductSalesHistory';
				productAtpStoreType = 'searchProductAtp';
				productMIHistStoreType = 'searchProductMIHist';
				if (searchProdSalesHistoryData.items.length < 20) {
					hideLoadMoreButton = true;
				}
			} else if (carouselId == 'previousProductDescMain') {
				productDescId = 'previousProductDesc';
				productHistId = 'previousProductDescHist';
				productAtpId = 'previousProductDescAtp';
				productMIHistId = 'previousProductDescMIHist';
				// set store type
				productHistStoreType = 'preProductSalesHistory';
				productAtpStoreType = 'previousProductAtp';
				productMIHistStoreType = 'previousProductMIHist';
				if (preProdSalesHistoryData.items.length < 20) {
					hideLoadMoreButton = true;
				}
			} else if (carouselId == 'miProductDescMain') {
				productDescId = 'miProductDesc';
				productHistId = 'miProductDescHist';
				productAtpId = 'miProductDescAtp';
				productMIHistId = 'miProductDescMIHist';
				// set store type
				productHistStoreType = 'miProductSalesHistory';
				productAtpStoreType = 'miProductAtp';
				productMIHistStoreType = 'miProductMIHist';
				if (miProdSalesHistoryData.items.length < 20) {
					hideLoadMoreButton = true;
				}
			}
			// create product description view
			productDesc = Ext.create('SpicersOrder.view.ProductDesc', {
				data : selectedProduct,
				id : productDescId,
				title : selectedProduct.prodDesc
			});

			// create product ATP view
			productAtp = Ext.create('SpicersOrder.view.ProductAtpList', {
				id : productAtpId,
				title : 'Product ATP',
				store : {
					type : productAtpStoreType
				}
			});

			// create product MI History view
			productMIHist = Ext.create('SpicersOrder.view.ProductMIHistList', {
				id : productMIHistId,
				title : 'Market Intelligence History',
				store : {
					type : productMIHistStoreType
				}
			});

			// create product history view
			productHist = Ext.create('SpicersOrder.view.ProductDescHist', {
				id : productHistId,
				title : 'Product History',
				store : {
					type : productHistStoreType
				},
				items : [{
					xtype : 'button',
					itemId : carouselId,
					hidden : hideLoadMoreButton,
					scrollDock : 'bottom',
					docked : 'bottom',
					text : 'Load more history',
					handler : function() {
						var selectedMaterial;
						var skip;
						console.log('button load more');
						switch (this.getItemId()) {
							case 'searchProductDescMain':
								selectedMaterial = searchProdSalesHistoryData.items[0].material;
								skip = searchProdSalesHistoryData.items.length;
								break;
							case 'previousProductDescMain':
								selectedMaterial = preProdSalesHistoryData.items[0].material;
								skip = preProdSalesHistoryData.items.length;
								break;
							case 'miProductDescMain':
								selectedMaterial = miProdSalesHistoryData.items[0].material;
								skip = miProdSalesHistoryData.items.length;
								break;
						};
						Ext.toast("Loading history", 1500);
						getProductSalesHistoryList(selectedMaterial, skip, this.getItemId());
					}
				}]
			});

			carousel.add([productDesc, productHist, productAtp, productMIHist]);
		}
	},

	onCustomerDetailOptionShow : function(option) {
		//console.log('detail option show');
		if (selectedCustRecord.accountGroup == 'Z001') {
			Ext.ComponentQuery.query('#deleteCustomerOption')[0].setHidden(true);
			Ext.ComponentQuery.query('#changeCustomerOption')[0].setHidden(true);
		} else {
			Ext.ComponentQuery.query('#deleteCustomerOption')[0].setHidden(false);
			Ext.ComponentQuery.query('#changeCustomerOption')[0].setHidden(false);
		}
	},

	onCustomerContainerOptionButtonTap : function(button) {
		customerContainerOption.show();
	},
	onCustomerDetailOptionButtonTap : function(button) {
		customerDetailOption.show();
	},
	onCustomerDisputeInit : function(list) {
		updateDisputeStore();
	},

	onAddMIButtonTap : function(button) {
		var searchProdDesc = Ext.ComponentQuery.query('#searchProductDesc')[0];
		var miProdDesc = Ext.ComponentQuery.query('#miProductDesc')[0];
		var preProdDesc = Ext.ComponentQuery.query('#previousProductDesc')[0];
		var prodDesc;
		var prodNo;
		var prodUom;
		var parentTab;
		var latestMIData;

		var customerText = selectedCustRecord.custName + " (#" + selectedCustRecord.custNo + ")";
		if (searchProdDesc != null && searchProdDesc.isPainted()) {
			prodDesc = searchProdDesc.getData().prodDesc;
			prodNo = searchProdDesc.getData().prodNo;
			prodUom = searchProdDesc.getData().uom;
			parentTab = Ext.ComponentQuery.query('productTab')[0];
			latestMIData = searchProdMIHistData.items[0];
		} else if (miProdDesc != null && miProdDesc.isPainted()) {
			prodDesc = miProdDesc.getData().prodDesc;
			prodNo = miProdDesc.getData().prodNo;
			prodUom = miProdDesc.getData().uom;
			parentTab = Ext.ComponentQuery.query('miProductTab')[0];
			latestMIData = miProdMIHistData.items[0];
		} else if (preProdDesc != null && preProdDesc.isPainted()) {
			prodDesc = preProdDesc.getData().prodDesc;
			prodNo = preProdDesc.getData().prodNo;
			prodUom = preProdDesc.getData().uom;
			parentTab = Ext.ComponentQuery.query('previousPurchaseTab')[0];
			latestMIData = previousProdMIHistData.items[0];
		}

		var productText = prodDesc + " (#" + prodNo + ")";

		parentTab.push({
			xtype : 'miCreate'
		});

		Ext.ComponentQuery.query('#miProductText')[0].setValue(productText);
		Ext.ComponentQuery.query('#miCustomerText')[0].setValue(customerText);
		Ext.ComponentQuery.query('#futureMthSalesMI')[0].setValue('');
		Ext.ComponentQuery.query('#futureMthSalesMI')[0].setLabel('Future Mthly (' + prodUom + ')');
		Ext.ComponentQuery.query('#miDetail')[0].setValue('');
		if (latestMIData != null) {
			Ext.ComponentQuery.query('#miFromDate')[0].setValue(getDefaultMIFromDate(latestMIData.fromDate));
			Ext.ComponentQuery.query('#miToDate')[0].setValue(getDefaultMIToDate(latestMIData.fromDate));
		} else {
			Ext.ComponentQuery.query('#miFromDate')[0].setValue(getDefaultMIFromDate(null));
			Ext.ComponentQuery.query('#miToDate')[0].setValue(getDefaultMIToDate(null));
		}
		Ext.ComponentQuery.query('#miRemoveCheckbox')[0].setChecked(false);
		// miCreatePanel.show();
	},

	onMISubmitButtonTap : function(button) {
		tempMIReq = selectedMIProduct;
		var futureMthSales = Ext.ComponentQuery.query('#futureMthSalesMI')[0].getValue();
		// check future monthly sales cannot be blank
		if (futureMthSales == null) {
			Ext.toast("Please specify future monthly sales.", 5000);
			return false;
		}

		var miReason = Ext.ComponentQuery.query('#miReasonsSelect')[0].getValue();
		var miReasonKey = miReason.split(':')[0];
		var miReasonText = miReason.split(':')[1];
		var fromDate = getSAPDate(Ext.ComponentQuery.query('#miFromDate')[0].getValue());
		var toDate = getSAPDate(Ext.ComponentQuery.query('#miToDate')[0].getValue());
		var removeFlag = Ext.ComponentQuery.query('#miRemoveCheckbox')[0].getChecked();
		var detail = Ext.ComponentQuery.query('#miDetail')[0].getValue();
		var prodNo = Ext.ComponentQuery.query('#miProductText')[0].getValue().split('#')[1].first(6);
		var latestMIrequestDate;
		var latestMIrequestCreationDate;

		var creDate;
		var today;

		var productTab = Ext.ComponentQuery.query('productTab')[0];
		var miTab = Ext.ComponentQuery.query('miProductTab')[0];
		var preTab = Ext.ComponentQuery.query('previousPurchaseTab')[0];

		if (productTab.isPainted()) {
			latestMIrequestDate = (searchProdMIHistData.items[0] == null) ? null : searchProdMIHistData.items[0].fromDate;
			latestMIrequestCreationDate = (searchProdMIHistData.items[0] == null) ? null : searchProdMIHistData.items[0].creationDate;
		} else if (miTab.isPainted()) {
			latestMIrequestDate = (miProdMIHistData.items[0] == null) ? null : miProdMIHistData.items[0].fromDate;
			latestMIrequestCreationDate = (miProdMIHistData.items[0] == null) ? null : miProdMIHistData.items[0].creationDate;
		} else if (preTab.isPainted()) {
			latestMIrequestDate = (previousProdMIHistData.items[0] == null) ? null : previousProdMIHistData.items[0].fromDate;
			latestMIrequestCreationDate = (previousProdMIHistData.items[0] == null) ? null : previousProdMIHistData.items[0].creationDate;
		}

		if (latestMIrequestCreationDate != null) {
			var creDate = convertSAPDateToJSDate(latestMIrequestCreationDate);
			var today = new Date();
		}

		// cannot submit request more than one per day
		if (latestMIrequestCreationDate != null && creDate.toDateString() == today.toDateString()) {
			Ext.toast("Only one MI request is allowed per product per day.", 5000);
			return false;
		}
		// request's from date cannot be less than to date
		else if (Ext.ComponentQuery.query('#miFromDate')[0].getValue() <= Ext.ComponentQuery.query('#miToDate')[0].getValue()) {

			// request's from date cannot be less than from date of the latest request
			if (latestMIrequestDate != null && Ext.ComponentQuery.query('#miFromDate')[0].getValue() <= convertSAPDateToJSDate(latestMIrequestDate)) {
				Ext.toast("Please change from date to be greater than latest request's from date.", 5000);
				return false;
			}

			// do not allow new MI request with from date less than the previous MI request
			if (selectedMIProduct == null) {
				var reqType;
				if (futureMthSales != 0) {
					reqType = (removeFlag == true) ? '' : 'X';
				} else {
					reqType = 'X';
				}
				mainContainer.setMasked({
					xtype : 'loadmask',
					message : MI_SUBMIT_LOADING,
					indicator : true
				});

				submitMIRequest(prodNo, selectedCustRecord.custNo, selectedCustRecord.plant, futureMthSales, miReasonKey, miReasonText, fromDate, toDate, detail, reqType);

			} else if (fromDate > selectedMIProduct.fromDate) {

				tempMIReq.futureMthSales = futureMthSales;
				tempMIReq.miKey = miReasonKey;
				tempMIReq.reason = miReasonText;
				tempMIReq.fromDate = fromDate;
				tempMIReq.toDate = toDate;
				if (futureMthSales != 0) {
					tempMIReq.reqType = (removeFlag == true) ? '' : 'X';
				} else {
					tempMIReq.reqType = 'X';
				}
				tempMIReq.detail = detail;

				miCreatePanel.hide();
				mainContainer.setMasked({
					xtype : 'loadmask',
					message : MI_SUBMIT_LOADING,
					indicator : true
				});

				submitMIRequest(prodNo, selectedCustRecord.custNo, selectedCustRecord.plant, futureMthSales, miReasonKey, miReasonText, fromDate, toDate, detail, tempMIReq.reqType);
			} else {
				Ext.toast("The from date of request must be greater than the date of the previous request.", 3000);
			}

		} else {
			Ext.toast("Cannot submit the request because To Date is greater than From Date.", 3000);
		}

	},

	onCustomerListDeselect : function(list) {
		selectedCust = null;
	},

	onMIDisplayBackButtonTap : function(button) {
		miDisplayPanel.hide();
	},

	onChangeMIReasonsSelect : function(select, newValue, oldValue) {
		var value = select.getValue();
		if (value != null) {
			var options = select.getOptions();
			var detail = options.findAll({value : value})[0].detail;

			Ext.ComponentQuery.query('#miDetail')[0].setPlaceHolder(detail);
			Ext.ComponentQuery.query('#miDetail')[0].setValue('');
		}
	},

	onChangeAllOrderField : function(field) {
		var newValue = field.getValue();
		Ext.ComponentQuery.query('#settingStkOrder')[0].setValue(newValue);
		Ext.ComponentQuery.query('#settingQuote')[0].setValue(newValue);
		Ext.ComponentQuery.query('#settingIndOrder')[0].setValue(newValue);
		Ext.ComponentQuery.query('#settingConOrder')[0].setValue(newValue);
	},

	onChangeFutureMthSalesMI : function(field, newValue, oldValue) {
		var miReasonSelect = Ext.ComponentQuery.query('#miReasonsSelect')[0];
		var reasonList;
		var searchBy;
		var setMIRemoveCheckboxHidden;
		var miRemoveCheckbox = Ext.ComponentQuery.query('#miRemoveCheckbox')[0];
		var product = miProdData.items.find({
			prodNo : selectedProduct.prodNo
		});

		// parse to integer
		newValue = parseInt(newValue);

		if (currentTab.indexOf('miProductTab') >= 0) {
			if (newValue == 0) {
				searchBy = {
					miKey : 'Z'
				};
				setMIRemoveCheckboxHidden = false;
			} else if (newValue < product.avg6MthSales) {
				searchBy = {
					miKey : 'S'
				};
				setMIRemoveCheckboxHidden = true;
			} else {
				searchBy = {
					miKey : 'G'
				};
				setMIRemoveCheckboxHidden = true;
			}
		} else if (currentTab.indexOf('productTab') >= 0) {// product search tab
			if (newValue == 0) {
				searchBy = {
					miKey : 'Z'
				};
				setMIRemoveCheckboxHidden = false;
			} else {
				searchBy = {
					miKey : 'G'
				};
				setMIRemoveCheckboxHidden = true;
			}
		}

		miRemoveCheckbox.setHidden(setMIRemoveCheckboxHidden);
		reasonList = miReasonsList.findAll(searchBy);
		Ext.defer(function() {
			miReasonSelect.setOptions(reasonList);
		}, 300);
	},

	// onFutureMathSalesInputChange : function(field, newValue, oldValue) {
	// var futureSales = Ext.ComponentQuery.query('#futureMathSalesInput')[0].getValue();
	// if (newValue != '' && futureSales != selectedMIProduct.futureMthSales) {
	// var futureSales = Ext.ComponentQuery.query('#futureMathSalesInput')[0].getValue();
	// var productText = selectedMIProduct.prodDesc + " (#" + selectedMIProduct.prodNo + ")";
	// var customerText = selectedCustRecord.custName + " (#" + selectedCustRecord.custNo + ")";
	// Ext.ComponentQuery.query('#miProductText')[0].setValue(productText);
	// Ext.ComponentQuery.query('#miCustomerText')[0].setValue(customerText);
	// Ext.ComponentQuery.query('#futureMthSalesMI')[0].setValue(futureSales);
	// Ext.ComponentQuery.query('#miDetail')[0].setValue('');
	// Ext.ComponentQuery.query('#miRemoveCheckbox')[0].setChecked(false);
	//
	// miCreatePanel.show();
	// }
	// },

	onUpdateActivityTypeChange : function(select, newValue, oldValue) {
		// automatically update reason
		var reason;
		var salesOpp = ACTIVITY_TYPE.findAll({ text: 'Sales Opportunity' })[0].value;
		var reasonSelect = Ext.ComponentQuery.query('#updateActivityReasonSelect')[0];
		// when activity type is sales opportunity
		if (newValue == salesOpp) {
			reason = ACTIVITY_REASON.findAll({ text: 'Annual Reports' })[0].value;
			// unhide opportunity related fields
			Ext.ComponentQuery.query('#updateVolOpportunity')[0].setHidden(false);
			Ext.ComponentQuery.query('#updateQtyOpportunity')[0].setHidden(false);
			Ext.ComponentQuery.query('#updateAmountOpportunity')[0].setHidden(false);
			Ext.ComponentQuery.query('#updateSalesDocNo')[0].setHidden(false);
		} else {
			reason = ACTIVITY_REASON.findAll({ text: 'Regular Sales Call' })[0].value;
			// hide opportunity related fields
			Ext.ComponentQuery.query('#updateVolOpportunity')[0].setHidden(true);
			Ext.ComponentQuery.query('#updateQtyOpportunity')[0].setHidden(true);
			Ext.ComponentQuery.query('#updateAmountOpportunity')[0].setHidden(true);
			Ext.ComponentQuery.query('#updateSalesDocNo')[0].setHidden(true);
		}
		reasonSelect.setValue(reason);
	},

	onActivityTypeChange : function(select, newValue, oldValue) {
		// automatically update reason
		var reason;
		var salesOpp = ACTIVITY_TYPE.findAll({ text: 'Sales Opportunity' })[0].value;
		var reasonSelect = Ext.ComponentQuery.query('#activityReasonSelect')[0];
		// when activity type is sales opportunity
		if (newValue == salesOpp) {
			reason = ACTIVITY_REASON.findAll({ text: 'Annual Reports' })[0].value;
			// unhide opportunity related fields
			Ext.ComponentQuery.query('#volOpportunity')[0].setHidden(false);
			Ext.ComponentQuery.query('#qtyOpportunity')[0].setHidden(false);
			Ext.ComponentQuery.query('#amountOpportunity')[0].setHidden(false);
			Ext.ComponentQuery.query('#salesDocNo')[0].setHidden(false);
		} else {
			reason = ACTIVITY_REASON.findAll({ text: 'Regular Sales Call' })[0].value;
			// hide opportunity related fields
			Ext.ComponentQuery.query('#volOpportunity')[0].setHidden(true);
			Ext.ComponentQuery.query('#qtyOpportunity')[0].setHidden(true);
			Ext.ComponentQuery.query('#amountOpportunity')[0].setHidden(true);
			Ext.ComponentQuery.query('#salesDocNo')[0].setHidden(true);
		}
		reasonSelect.setValue(reason);
	},

	onActivityCreationInit : function() {
		// update contact select field in activity creation screens
		var availableContactField = Ext.ComponentQuery.query('#availableContactSelect')[0];
		availableContactField.setOptions(availableContact);
		availableContactField.setReadOnly(isContactReadOnly);

		// update activity subtype
		var activitySubTypeSelect = Ext.ComponentQuery.query('#opportunityTypeSelect')[0];
		activitySubTypeSelect.setOptions(activitySubTypeList);
	},

	onActivityUpdateInit : function() {
		// update contact select field in activity creation screens
		var availableContactField = Ext.ComponentQuery.query('#updateAvailableContactSelect')[0];
		availableContactField.setOptions(availableContact);
		availableContactField.setReadOnly(isContactReadOnly);

		// update activity subtype
		var activitySubTypeSelect = Ext.ComponentQuery.query('#updateOpportunityTypeSelect')[0];
		activitySubTypeSelect.setOptions(activitySubTypeList);
	},

	onDisputeCreationInit : function() {
		// update contact select field in dispute creation screens
		var availableDisputeField = Ext.ComponentQuery.query('#availableDisputeSelect')[0];
		availableDisputeField.setOptions(availableContact);
		availableDisputeField.setReadOnly(isContactReadOnly);
	},

	onChangeCustomerSettingButtonTap : function(button) {
		customerDetailOption.hide();
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];

		customerTab.push({
			xtype : 'customerSettingChange',
		});

		// update customer change screen
		Ext.ComponentQuery.query('#settingStkOrder')[0].setValue(selectedCustSetting.stkOrderDays);
		Ext.ComponentQuery.query('#settingQuote')[0].setValue(selectedCustSetting.quoteDays);
		Ext.ComponentQuery.query('#settingIndOrder')[0].setValue(selectedCustSetting.indOrderDays);
		Ext.ComponentQuery.query('#settingConOrder')[0].setValue(selectedCustSetting.conOrderDays);
		Ext.ComponentQuery.query('#settingActivity')[0].setValue(selectedCustSetting.salesActDays);

		var button = Ext.ComponentQuery.query('#customerDetailOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
	},

	onChangeCustomerButtonTap : function(button) {

		customerDetailOption.hide();
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];

		customerTab.push({
			xtype : 'customerChange',
		});

		// update customer change screen
		Ext.ComponentQuery.query('#customerChName1')[0].setValue(selectedCustAddr.name1);
		Ext.ComponentQuery.query('#customerChName2')[0].setValue(selectedCustAddr.name2);
		Ext.ComponentQuery.query('#customerChStreetNumber')[0].setValue(selectedCustAddr.street);
		Ext.ComponentQuery.query('#customerChSuburb')[0].setValue(selectedCustAddr.city);
		Ext.ComponentQuery.query('#customerChPostcode')[0].setValue(selectedCustAddr.postcode);
		Ext.ComponentQuery.query('#customerChRegion')[0].setValue(selectedCustAddr.region);
		Ext.ComponentQuery.query('#customerChEmail')[0].setValue(selectedCustAddr.email);
		Ext.ComponentQuery.query('#customerChTelephone')[0].setValue(selectedCustAddr.tel);
		Ext.ComponentQuery.query('#customerChFax')[0].setValue(selectedCustAddr.fax);

		var button = Ext.ComponentQuery.query('#customerDetailOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

	},

	onCreateCustomerButtonTap : function(button) {
		customerContainerOption.hide();
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];
		customerTab.push({
			xtype : 'customerCreate',
		});
	},

	onCreateDisputeButtonTap : function(button) {
		customerDetailOption.hide();
		var title = 'Create Dispute Case';
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];

		customerTab.push({
			xtype : 'disputeCreation',
			title : title,
		});

		button = Ext.ComponentQuery.query('#customerDetailOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
	},

	onCreateContactOptionTap : function(button) {
		customerDetailOption.hide();
		var title = 'Create Contact';
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];

		customerTab.push({
			xtype : 'customerContactCreate',
			title : title,
		});

		var button;
		button = Ext.ComponentQuery.query('#customerDetailOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
	},

	onCreateActivityButtonTap : function(button) {
		customerDetailOption.hide();
		var title = 'Create Activity';
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];

		customerTab.push({
			xtype : 'activityCreation',
			title : title,
		});

		var button;
		button = Ext.ComponentQuery.query('#customerDetailOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
	},

	onContactTab : function(list, index, target, record, event) {
		console.log('contact tab');
		if (event.target.className == 'hold' || event.target.className == 'cont_phone') {
			event.stopEvent();
		} else if (event.target.className == 'contact_edit') {
			var title = 'Change ' + record.getData().contName;
			var customerTab = Ext.ComponentQuery.query('customerTab')[0];

			customerTab.push({
				xtype : 'customerContactChange',
				title : title,
			});

			Ext.ComponentQuery.query('#contactChFirstText')[0].setValue(record.getData().firstName);
			Ext.ComponentQuery.query('#contactChLastText')[0].setValue(record.getData().lastName);
			Ext.ComponentQuery.query('#contactChTel')[0].setValue(record.getData().phone);
			Ext.ComponentQuery.query('#contactChEmail')[0].setValue(record.getData().email);
			Ext.ComponentQuery.query('#contactChTitle')[0].setValue(record.getData().title);
			Ext.ComponentQuery.query('#contactChDepartment')[0].setValue(record.getData().department);
			Ext.ComponentQuery.query('#contactChFunction')[0].setValue(record.getData().functions);

			selectedContact = record.getData().contNo;

			var button = Ext.ComponentQuery.query('#createActivityButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
			button = Ext.ComponentQuery.query('#createDisputeButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
			button = Ext.ComponentQuery.query('#customerDetailOptionButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
		} else if (event.target.className == 'contact_delete') {
			// get selected contact
			selectedContact = record.getData().contNo;
			Ext.Msg.confirm("Confirm", "Do you want to delete a contact?", function(buttonId) {
				if (buttonId === 'yes') {
					deleteContact();
				}
			}, this // scope of the controller
			);
		}
	},

	onRecentActTab : function(list, index, target, record) {
		var data = record.getData();
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];
		var titleText = 'Act ' + data.actNo;

		// setup selectedSalesAct value
		selectedSalesAct = data.actNo;

		customerTab.push({
			xtype : 'activityUpdate',
			title : titleText
		});

		// dateFormat(actDate, 'yyyymmdd');
		var fromDate = new Date(convertSAPDateToJSDate(data.fromDate));
		Ext.ComponentQuery.query('#updateActivityDate')[0].setValue(fromDate);
		Ext.ComponentQuery.query('#updateAvailableContactSelect')[0].setValue(data.contNo);
		Ext.ComponentQuery.query('#updateActivityTypeSelect')[0].setValue(data.actTypeKey);
		Ext.ComponentQuery.query('#updateActivityReasonSelect')[0].setValue(data.reason);
		Ext.ComponentQuery.query('#updateActivityOutcomeSelect')[0].setValue(data.outcome);
		Ext.ComponentQuery.query('#updateOpportunityTypeSelect')[0].setValue(data.oppType);
		Ext.ComponentQuery.query('#updateVolOpportunity')[0].setValue(data.volume);
		Ext.ComponentQuery.query('#updateQtyOpportunity')[0].setValue(data.quantity);
		Ext.ComponentQuery.query('#updateAmountOpportunity')[0].setValue(data.amount);
		Ext.ComponentQuery.query('#updateSalesDocNo')[0].setValue(data.salesDoc);
		Ext.ComponentQuery.query('#updateActivityTextArea')[0].setValue(data.text);

		var button = Ext.ComponentQuery.query('#createActivityButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#createDisputeButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#customerDetailOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
	},

	onConsSubmitOrder : function(button) {
		var consItems = prepareConsCreateItem(simulatedConsOrder);
		var poNumber = Ext.ComponentQuery.query('#consPONumber')[0].getValue();

		if (Ext.ComponentQuery.query('#conConfirmName')[0].getValue().length > 0) {
			if (Ext.ComponentQuery.query('#signatureField')[0].getValue() != null) {
				consItems = consItems.replace(/%7C/g, '\|');
				createConsignmentOrder(selectedCust, poNumber, consItems);
			} else {
				Ext.Msg.alert('Alert', 'Please ask a customer to sign signature', function() {
				});
			}
		} else {
			Ext.Msg.alert('Alert', 'Please enter customer name', function() {
			});
		}
	},

	onDisputeCreationSubmit : function(button) {
		var title = Ext.ComponentQuery.query('#disputeTitle')[0].getValue();
		var category = Ext.ComponentQuery.query('#disputeTypeSelect')[0].getValue();
		var contact = Ext.ComponentQuery.query('#availableDisputeSelect')[0].getValue();
		var referenceDoc = Ext.ComponentQuery.query('#disputeRefDoc')[0].getValue().trim();
		var claimAmount = Ext.ComponentQuery.query('#disputeClaimAmount')[0].getValue();
		var disputeText = Ext.ComponentQuery.query('#disputeCreationTextArea')[0].getValue().trim();

		if (disputeText.length > 0) {
			// save activity data into memory to be added into activityData later
			tempDispute = {
				title : title,
				status : 'New',
				referenceDoc : referenceDoc,
				createdBy : userId,
				responsible : userId,
				type : "Dispute Cases",
			};
			Ext.Msg.confirm("Confirm", "Do you want to submit a dispute case?", function(buttonId) {
				if (buttonId === 'yes') {
					createDispute(title, category, contact, referenceDoc, claimAmount, disputeText);
				}
			}, this // scope of the controller
			);
		} else {
			Ext.Msg.alert('Alert', 'Please enter text before submit a case.', function() {
			});
		}
	},

	onActivitySubmit : function(button) {
		var actDate = Ext.ComponentQuery.query('#activityDate')[0].getValue();
		var formattedDate = dateFormat(actDate, 'yyyymmdd');
		var selectedContact = Ext.ComponentQuery.query('#availableContactSelect')[0].getValue();
		var actText = Ext.ComponentQuery.query('#activityCreationTextArea')[0].getValue().trim();
		var actType = Ext.ComponentQuery.query('#activityTypeSelect')[0].getValue();
		var actTypeText = Ext.ComponentQuery.query('#activityTypeSelect')[0].getComponent().getValue();
		var actReason = Ext.ComponentQuery.query('#activityReasonSelect')[0].getValue();
		var actOutcome = Ext.ComponentQuery.query('#activityOutcomeSelect')[0].getValue();
		var actOppType = Ext.ComponentQuery.query('#opportunityTypeSelect')[0].getValue();
		var actVol = Ext.ComponentQuery.query('#volOpportunity')[0].getValue();
		var actQty = Ext.ComponentQuery.query('#qtyOpportunity')[0].getValue();
		var actAmount = Ext.ComponentQuery.query('#amountOpportunity')[0].getValue();
		var actSalesDoc = Ext.ComponentQuery.query('#salesDocNo')[0].getValue();
		if (actText.length > 0) {
			// save activity data into memory to be added into activityData later
			tempActivity = {
				actType : actTypeText,
				contName : Ext.ComponentQuery.query('#availableContactSelect')[0].getComponent().getValue(),
				contNo : selectedContact,
				createdBy : userId,
				fromDate : dateFormat(actDate, 'yyyymmdd'),
				text : actText,
				toDate : dateFormat(actDate, 'yyyymmdd'),
				type : "Recent Activity",
			};

			Ext.Msg.confirm("Confirm", "Do you want to submit a sales activity?", function(buttonId) {
				if (buttonId === 'yes') {
					createSalesActivity(formattedDate, selectedContact, actText, actType, actReason, actOutcome, actVol, actQty, actAmount, actSalesDoc, actOppType);
				}
			}, this // scope of the controller
			);
		} else {
			Ext.Msg.alert('Alert', 'Please enter text before submit an activity.', function() {
			});
		}
	},

	onActivityUpdate : function(button) {
		var actDate = Ext.ComponentQuery.query('#updateActivityDate')[0].getValue();
		var formattedDate = dateFormat(actDate, 'yyyymmdd');
		var selectedContact = Ext.ComponentQuery.query('#updateAvailableContactSelect')[0].getValue();
		var actText = Ext.ComponentQuery.query('#updateActivityTextArea')[0].getValue().trim();
		var actType = Ext.ComponentQuery.query('#updateActivityTypeSelect')[0].getValue();
		var actTypeText = Ext.ComponentQuery.query('#updateActivityTypeSelect')[0].getComponent().getValue();
		var actReason = Ext.ComponentQuery.query('#updateActivityReasonSelect')[0].getValue();
		var actOutcome = Ext.ComponentQuery.query('#updateActivityOutcomeSelect')[0].getValue();
		var actOppType = Ext.ComponentQuery.query('#updateOpportunityTypeSelect')[0].getValue();
		var actVol = Ext.ComponentQuery.query('#updateVolOpportunity')[0].getValue();
		var actQty = Ext.ComponentQuery.query('#updateQtyOpportunity')[0].getValue();
		var actAmount = Ext.ComponentQuery.query('#updateAmountOpportunity')[0].getValue();
		var actSalesDoc = Ext.ComponentQuery.query('#updateSalesDocNo')[0].getValue();
		if (actText.length > 0) {

			Ext.Msg.confirm("Confirm", "Do you want to update a sales activity?", function(buttonId) {
				if (buttonId === 'yes') {
					changeSalesActivity(formattedDate, selectedContact, actText, actType, actReason, actOutcome, actVol, actQty, actAmount, actSalesDoc, actOppType);
				}
			}, this // scope of the controller
			);
		} else {
			Ext.Msg.alert('Alert', 'Please enter text before submit an activity.', function() {
			});
		}
	},

	onCustomerMainActivate : function(view) {

		// set customer general detail
		var customerDetailView = Ext.ComponentQuery.query('customerDetail')[0];
		customerDetailView.setData(selectedCustRecord);
		updateContactStore();
		updateActivityStore();

		// show delete all button
		var button = Ext.ComponentQuery.query('#customerContainerOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#directCustomerButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#customerDetailButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#createActivityButton');
		if (button.length > 0) {
			button[0].setHidden(false);
		}
		button = Ext.ComponentQuery.query('#createDisputeButton');
		if (button.length > 0) {
			button[0].setHidden(false);
		}
		button = Ext.ComponentQuery.query('#customerDetailOptionButton');
		if (button.length > 0) {
			button[0].setHidden(false);
		}
	},

	onCustomerCreateInit : function(customerCreate) {
		//console.log('customer create init');
		var button = Ext.ComponentQuery.query('#customerContainerOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#customerDetailButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#createActivityButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#createDisputeButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
		button = Ext.ComponentQuery.query('#customerDetailOptionButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
	},

	onMICreateBack : function(miCreateTab) {
		console.log('back to MICreate');

	},

	onCustomerTabBack : function(customerTab) {
		console.log('back to custTab');
		if (customerTab.getActiveItem().getItemId() == 'customerContainer') {

			// show delete all button
			var button = Ext.ComponentQuery.query('#customerContainerOptionButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
			button = Ext.ComponentQuery.query('#customerDetailButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
			button = Ext.ComponentQuery.query('#createActivityButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
			button = Ext.ComponentQuery.query('#createDisputeButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
			button = Ext.ComponentQuery.query('#customerDetailOptionButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
		}
	},

	onCreateCustomerSubmit : function(button) {
		var name1 = Ext.ComponentQuery.query('#customerCrName1')[0].getValue();
		var name2 = Ext.ComponentQuery.query('#customerCrName2')[0].getValue();
		var street = Ext.ComponentQuery.query('#customerCrStreetNumber')[0].getValue();
		var postcode = Ext.ComponentQuery.query('#customerCrPostcode')[0].getValue();
		var suburb = Ext.ComponentQuery.query('#customerCrSuburb')[0].getValue();
		var region = Ext.ComponentQuery.query('#customerCrRegion')[0].getValue();
		var email = Ext.ComponentQuery.query('#customerCrEmail')[0].getValue();
		var tel = Ext.ComponentQuery.query('#customerCrTelephone')[0].getValue();
		var fax = Ext.ComponentQuery.query('#customerCrFax')[0].getValue();

		if (name1.trim() == '') {
			Ext.Msg.alert('Alert', 'Customer name must be filled.', function() {
			});
		} else if (street.trim() == '') {
			Ext.Msg.alert('Alert', 'Street must be filled.', function() {
			});
		} else if (postcode == null) {
			Ext.Msg.alert('Alert', 'Postcode must be filled.', function() {
			});
		} else if (suburb.trim() == '') {
			Ext.Msg.alert('Alert', 'Suburb must be filled.', function() {
			});
		} else if (region.trim() == '') {
			Ext.Msg.alert('Alert', 'Region must be filled.', function() {
			});
		} else if (tel.toString().trim() == '') {
			Ext.Msg.alert('Alert', 'Telephone number must be filled.', function() {
			});
		} else if (!is_email(email)) {
			Ext.Msg.alert('Alert', 'Email is not correctly formatted. Please change.', function() {
			});
		} else {
			Ext.Msg.confirm("Confirm", "Please confirm to create a customer", function(buttonId) {
				if (buttonId === 'yes') {
					// keep contact data
					tempNewCustomer.custName = name1;
					tempNewCustomer.creditLimit = 0;
					tempNewCustomer.creditAvailable = 0;
					tempNewCustomer.creditUsed = 0;
					tempNewCustomer.custAddr = street + ', ' + suburb + ' ' + region + ', ' + postcode;
					tempNewCustomer.creditBlock = '';
					tempNewCustomer.plant = REGION_LIST.find({
						value : region
					}).plant;
					tempNewCustomer.telNo = tel;
					tempNewCustomer.p1Pts = 0;
					tempNewCustomer.p1Status = '';
					tempNewCustomer.accountGroup = 'Z005';

					//call create contact BAPI
					createCustomer(name1, name2, street, postcode, suburb, region, email, tel, fax);
				}
			}, this // scope of the controller
			);
		}
	},
	onChangeCustomerSettingSubmit : function(button) {

		var stkOrderDays = Ext.ComponentQuery.query('#settingStkOrder')[0].getValue();
		var quoteDays = Ext.ComponentQuery.query('#settingQuote')[0].getValue();
		var indOrderDays = Ext.ComponentQuery.query('#settingIndOrder')[0].getValue();
		var conOrderDays = Ext.ComponentQuery.query('#settingConOrder')[0].getValue();
		var salesActDays = Ext.ComponentQuery.query('#settingActivity')[0].getValue();

		Ext.Msg.confirm("Confirm", "Please confirm to change customer's setting", function(buttonId) {
			if (buttonId === 'yes') {
				changeCustomerSetting(stkOrderDays, quoteDays, indOrderDays, conOrderDays, salesActDays);
			}
		}, this // scope of the controller
		);

	},

	onChangeCustomerSubmit : function(button) {
		var name1 = Ext.ComponentQuery.query('#customerChName1')[0].getValue();
		var name2 = Ext.ComponentQuery.query('#customerChName2')[0].getValue();
		var street = Ext.ComponentQuery.query('#customerChStreetNumber')[0].getValue();
		var postcode = Ext.ComponentQuery.query('#customerChPostcode')[0].getValue();
		var suburb = Ext.ComponentQuery.query('#customerChSuburb')[0].getValue();
		var region = Ext.ComponentQuery.query('#customerChRegion')[0].getValue();
		var email = Ext.ComponentQuery.query('#customerChEmail')[0].getValue();
		var tel = Ext.ComponentQuery.query('#customerChTelephone')[0].getValue();
		var fax = Ext.ComponentQuery.query('#customerChFax')[0].getValue();

		if (name1.trim() == '') {
			Ext.Msg.alert('Alert', 'Customer name must be filled.', function() {
			});
		} else if (street.trim() == '') {
			Ext.Msg.alert('Alert', 'Street must be filled.', function() {
			});
		} else if (postcode == null) {
			Ext.Msg.alert('Alert', 'Postcode must be filled.', function() {
			});
		} else if (suburb.trim() == '') {
			Ext.Msg.alert('Alert', 'Suburb must be filled.', function() {
			});
		} else if (region.trim() == '') {
			Ext.Msg.alert('Alert', 'Region must be filled.', function() {
			});
		} else if (tel.toString().trim() == '') {
			Ext.Msg.alert('Alert', 'Telephone number must be filled.', function() {
			});
		} else if (!is_email(email)) {
			Ext.Msg.alert('Alert', 'Email is not correctly formatted. Please change.', function() {
			});
		} else {
			Ext.Msg.confirm("Confirm", "Please confirm to change a customer", function(buttonId) {
				if (buttonId === 'yes') {
					// keep contact data
					tempChangeCustomer.custNo = selectedCust;
					tempChangeCustomer.custName = name1;
					tempChangeCustomer.custAddr = street + ', ' + suburb + ' ' + region + ', ' + postcode;
					tempChangeCustomer.telNo = tel;

					//call create contact BAPI
					changeCustomer(name1, name2, street, postcode, suburb, region, email, tel, fax);
				}
			}, this // scope of the controller
			);
		}
	},

	onCreateContactSubmit : function(button) {
		var firstName = Ext.ComponentQuery.query('#contactCrFirstText')[0].getValue();
		var lastName = Ext.ComponentQuery.query('#contactCrLastText')[0].getValue();
		var tel = Ext.ComponentQuery.query('#contactCrTel')[0].getValue();
		var email = Ext.ComponentQuery.query('#contactCrEmail')[0].getValue();
		var title = Ext.ComponentQuery.query('#contactCrTitle')[0].getValue();
		var department = Ext.ComponentQuery.query('#contactCrDepartment')[0].getValue();
		var functions = Ext.ComponentQuery.query('#contactCrFunction')[0].getValue();

		if (firstName.trim() == '' || lastName.trim() == '') {
			Ext.Msg.alert('Alert', 'First and last name cannot be blank.', function() {
			});
		} else if (!is_email(email)) {
			Ext.Msg.alert('Alert', 'Email is not correctly formatted. Please change.', function() {
			});
		} else {
			Ext.Msg.confirm("Confirm", "Please confirm to create a contact", function(buttonId) {
				if (buttonId === 'yes') {
					// keep contact data
					tempNewContact.firstName = firstName;
					tempNewContact.lastName = lastName;
					tempNewContact.phone = tel;
					tempNewContact.email = email;
					tempNewContact.title = title;
					tempNewContact.functions = functions;
					tempNewContact.department = department;
					tempNewContact.contName = tempNewContact.title + ' ' + tempNewContact.firstName + ' ' + tempNewContact.lastName;
					tempNewContact.type = 'Contact';

					//call create contact BAPI
					createContact(firstName, lastName, tel, email, title, department, functions);
				}
			}, this // scope of the controller
			);
		}
	},

	onChangeContactSubmit : function(button) {
		var firstName = Ext.ComponentQuery.query('#contactChFirstText')[0].getValue();
		var lastName = Ext.ComponentQuery.query('#contactChLastText')[0].getValue();
		var tel = Ext.ComponentQuery.query('#contactChTel')[0].getValue();
		var email = Ext.ComponentQuery.query('#contactChEmail')[0].getValue();
		var title = Ext.ComponentQuery.query('#contactChTitle')[0].getValue();
		var department = Ext.ComponentQuery.query('#contactChDepartment')[0].getValue();
		var functions = Ext.ComponentQuery.query('#contactChFunction')[0].getValue();

		if (firstName.trim() == '' || lastName.trim() == '') {
			Ext.Msg.alert('Alert', 'First and last name cannot be blank.', function() {
			});
		} else if (!is_email(email)) {
			Ext.Msg.alert('Alert', 'Email is not correctly formatted. Please change.', function() {
			});
		} else {
			Ext.Msg.confirm("Confirm", "Please confirm to change a contact", function(buttonId) {
				if (buttonId === 'yes') {
					changeContact(firstName, lastName, tel, email, title, department, functions);
				}
			}, this // scope of the controller
			);
		}
	},

	onCustomerDetailButtonTap : function(button) {
		getCustomerDetail();
	},

	onCreateOrderButtonTap : function() {
		createOrder();
	},

	onCartOrderBack : function(cartOrder) {
		console.log('back to cartOrder');

		// allow to change tab
		isInOrderConfirmationScreen = false;

		if (cartOrder.getActiveItem().getId() == 'cartList') {
			// disable changes on all field in OrderDetail
			var cartOrderHeaderDetail = Ext.ComponentQuery.query('cartOrderDetail')[0];
			var allChilds = cartOrderHeaderDetail.getInnerItems();
			for (var i = 0; i < allChilds.length; i++) {
				if (allChilds[i].getItemId() != 'shippingAdr') {
					allChilds[i].setReadOnly(false);
				}
			}

			// show delete all button
			var button = Ext.ComponentQuery.query('#deleteAllButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}

			// show order confirmation
			button = Ext.ComponentQuery.query('#checkoutButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}

			// hide createOrder button
			button = Ext.ComponentQuery.query('#createOrderButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}
		}
	},

	onOrderConfirmationActivate : function() {
		// set height of orderConfirmationScreen
		var messageStoreCount = orderMessage.items.length;
		var orderItemStoreCount = simulatedOrder.items.length;
		var tempHeight;

		// update message and item store before show order confirmation screem
		updateOrderItemStore();
		updateOrderMessageStore();

		if (messageStoreCount > 0) {
			tempHeight = (messageStoreCount * MESSAGE_HEIGHT ) + HEADER_HEIGHT;
			this.getOrderMessageList().element.setHeight(tempHeight);
		}
		if (orderItemStoreCount > 0) {
			if (Ext.os.deviceType != 'Phone') {
				tempHeight = (orderItemStoreCount * LIST_IPAD_HEIGHT ) + HEADER_HEIGHT;
			} else {
				tempHeight = (orderItemStoreCount * LIST_IPHONE_HEIGHT) + HEADER_HEIGHT;
			}
			this.getOrderItemList().element.setHeight(tempHeight);
		}

	},

	onOrderTypeChange : function(select, newValue, oldValue) {
		var validToDate = Ext.ComponentQuery.query('#validToDate')[0];
		var createOrderButton = Ext.ComponentQuery.query('#createOrderButton')[0];
		var checkoutButton = Ext.ComponentQuery.query('#checkoutButton')[0];
		var quoteCommentField = Ext.ComponentQuery.query('#quoteCommentField')[0];
		var orderCommentField = Ext.ComponentQuery.query('#orderCommentField')[0];
		var delInstructionField = Ext.ComponentQuery.query('#delInstructionField')[0];

		if (newValue == 'ZSTK') {
			validToDate.setHidden(true);
			quoteCommentField.setHidden(true);
			orderCommentField.setHidden(false);
			delInstructionField.setHidden(false);
			createOrderButton.setText('Place Order Now');
			checkoutButton.setText('Order Confirmation');
		} else {
			validToDate.setHidden(false);
			quoteCommentField.setHidden(false);
			orderCommentField.setHidden(true);
			delInstructionField.setHidden(true);
			createOrderButton.setText('Place Quote Now');
			checkoutButton.setText('Quote Confirmation');
		}
	},

	onDeliveringPlantChange : function(select, newValue, oldValue) {
		updateCartStorageLoc(newValue);
	},

	onOrderConfirmation : function() {
		console.log('order confirmation clicked');
		var poValue = Ext.ComponentQuery.query('#poNumber')[0].getValue();

		if (productsInCart.items.length == 0) {
			Ext.Msg.alert('Cart', 'Please add product in the cart.', function() {
			})
		} else if (poValue == '') {
			Ext.Msg.alert('Cart', 'Please enter PO number.', function() {
				// move to order header screen
				var cartTab = Ext.ComponentQuery.query('#cartTab')[0];
				cartTab.setActiveItem(1);
			})
		} else {
			simulateOrder();
		}
	},

	onCustListIniialize : function() {
		console.log('customer List is init');
		// getCustomerList(' ');
	},

	onChangeTab : function(mainPanel, value, oldValue) {
		console.log('tab changes: ' + value.getItemId());
		currentTab = value.getItemId();
		if (!isInOrderConfirmationScreen) {
			if (value.getItemId() != 'customerTab') {
				if (selectedCust == null) {
					Ext.Msg.alert('Alert', 'Please select customer before proceeding', function() {
						// mainContainer.setActiveItem('#customerTab');
					});
					return false;
				}
				// reset selectedMIProduct
				selectedMIProduct = null;
			}
		} else {
			return false;
		}

	},

	onLoginButtonTap : function(button) {
		console.log('login tapped');

		var usernameField = Ext.ComponentQuery.query('#userIdCredential');
		if (usernameField.length > 0) {
			userId = usernameField[0].getValue();
		}

		var passwordField = Ext.ComponentQuery.query('#passwordCredential');
		if (passwordField.length > 0) {
			password = passwordField[0].getValue();
		}
		console.log('Password: ' + password);
		validateCredentials();
	},

	onSortChange : function(picker, value, opts) {
		var sortBy = picker.getValue()['sortBy'];
		console.log('sort by: ' + sortBy);
		if (sortBy != '') {
			var pickerId = picker.getItemId();
			if (pickerId == 'productSearch') {
				var store = Ext.getStore('productResult');
			} else if (pickerId == 'previousPurchase') {
				var store = Ext.getStore('previousPurchase');
			}

			var sortDirection;
			store.clearFilter();
			switch (sortBy) {
				case SORT_BY[PRODUCT_DESC_INDEX].value :
					sortDirection = 'ASC';
					break;
				case SORT_BY[PRODUCT_CODE_INDEX].value :
					sortDirection = 'ASC';
					break;
				case SORT_BY[PRICE_INDEX].value :
					sortDirection = 'ASC';
					break;
				case SORT_BY[ATP_QTY_INDEX].value :
					sortDirection = 'DESC';
					break;
				case SORT_BY[COUNT_INDEX].value :
					sortDirection = 'DESC';
					break;
				default :
					break;
			}
			store.sort(sortBy, sortDirection);
			picker.destroy();
		}
	},

	onPreviousPruchaseBack : function(view) {
		var activeItems = view.getActiveItem();

		if (activeItems._itemId == 'daysSelectField') {
			var button;
			// hide sort button
			button = Ext.ComponentQuery.query('#previousPurchaseSortButton');
			if (button.length > 0) {
				button[0].setHidden(true);
			}

		}
	},

	onMIProductListActivate : function() {

		// hide add button
		button = Ext.ComponentQuery.query('#miAddToCartButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}
	},

	onPreviousPurchaseActivate : function() {

		// show sort button
		button = Ext.ComponentQuery.query('#previousPurchaseSortButton');
		if (button.length > 0) {
			button[0].setHidden(false);
		}

		// hide add button
		button = Ext.ComponentQuery.query('#preAddToCartButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

	},

	onDaysSelected : function(select, newValue, oldValue) {
		console.log('new value: ' + newValue);
		if (newValue != '0') {
			getPreviousPurchase(newValue);
		}
	},

	onCartTabShow : function() {
		var cartList = Ext.ComponentQuery.query('cartList');
		if (cartList.length > 0) {
			if (cartList[0].isPainted()) {
				activateCartList();
				updateCartTotal();
			}
		}
	},

	onCartListActivate : function(component, newItem, oldItem) {

		console.log('cartList is active');
		activateCartList();
		updateCartTotal();

	},

	onDeleteAllTap : function(button) {
		Ext.Msg.confirm("Delete all?", "Do you want to delete all products in the cart?", function(buttonId) {
			if (buttonId === 'yes') {
				deleteAllInCart();
				updateCartBadgeText();
				updateCartStore();
				updateCartTotal();
			}
		}, this // scope of the controller
		);
	},

	// when product is selected then save product record in
	// selectedProduct variable
	// and display product description
	onCartListSelect : function(list, index, target, record, event) {

		if (event.target.className == 'cart_input') {
			event.stopEvent();
		} else {
			// save select record
			selectedProduct = JSON.parse(JSON.stringify(productsInCart.items[index]));
			console.log('product result list is select at: ' + selectedProduct.prodNo);

			// call Product Description screen
			list.up('cartOrder').push({
				xtype : 'productDesc',
				data : selectedProduct,
				id : 'cartProductDesc',
				title : selectedProduct.prodDesc
			});

			var cartProductDescView = Ext.ComponentQuery
			.query('#cartProductDesc')[0];
			var allItems = cartProductDescView.items.items;
			for (var i = 0; i < allItems.length; i++) {
				// set job number in the cart
				if (allItems[i].getItemId() == 'jobNumber') {
					allItems[i].setValue(selectedProduct.jobNumber);
				}
				// set orderQty in the cart
				if (allItems[i].getItemId() == 'orderQty') {
					allItems[i].setValue(selectedProduct.orderQty);
				}

				// set manualPr in the cart
				if (allItems[i].getItemId() == 'manualPr') {
					allItems[i].setValue(selectedProduct.manualPr);
				}

				// hide add MI button
				if (allItems[i].getItemId() == 'addMIButton') {
					allItems[i].setHidden(true);
				}

			}
		}
	},

	onCartItemDoubleTap : function(list, idx, target, record, event) {

		Ext.Msg.confirm("Delete item?", "Do you want to delete " + record.get('prodDesc') + " from the cart?", function(buttonId) {
			if (buttonId === 'yes') {
				// // TODO when the delete button is clicked, delete an
				// // array in productInCart variable
				deleteItemInCart(idx);
			}
		}, this // scope of the controller
		);
	},

	onProductDescActivate : function(list) {
		// hide delete all button
		var button = Ext.ComponentQuery.query('#deleteAllButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

		// hide sort button
		button = Ext.ComponentQuery.query('#productSortButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

		// hide sort button
		button = Ext.ComponentQuery.query('#previousPurchaseSortButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

		var listId = list.getId();
		if (listId == 'searchProductDesc') {
			// show add button
			button = Ext.ComponentQuery.query('#addToCartButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
		} else if (listId == 'previousProductDesc') {
			// show add button
			button = Ext.ComponentQuery.query('#preAddToCartButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}

		} else if (listId == 'cartProductDesc') {
			// show done button
			button = Ext.ComponentQuery.query('#doneButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
		} else if (listId == 'miProductDesc') {
			// show done button
			button = Ext.ComponentQuery.query('#miAddToCartButton');
			if (button.length > 0) {
				button[0].setHidden(false);
			}
		}

		// set uom in order qty field
		var orderQtyField = list.down('#orderQty');
		orderQtyField.setLabel('Order Qty (' + selectedProduct.uom + ')');

		// set uom in manual pr field
		var manualPrField = list.down('#manualPr');
		manualPrField.setLabel('Manual Price / ' + selectedProduct.uom);

	},

	// when product is selected then save product record in
	// selectedProduct variable
	// and display product description
	onPreviousPurchaseListSelect : function(list, record) {

		// save select record
		selectedProduct = record.getData();

		// call Product Description screen

		list.up('previousPurchaseTab').push({
			xtype : 'productDescMain',
			id : 'previousProductDescMain',
			title : selectedProduct.prodDesc
		});
		getProductSalesHistoryList(selectedProduct.prodNo, 0, 'previousProductDescMain');
		// get ATP based on customer plant
		getProductAtpList(selectedProduct.prodNo, selectedCustRecord.plant);
		getMIHistory(selectedCust, selectedCustRecord.plant, selectedProduct.prodNo);

	},

	// when product is selected then save product record in
	// selectedProduct variable
	// and display product description
	onProductResultListSelect : function(list, record) {

		// save select record
		selectedProduct = record.getData();
		console.log('product result list is select at: ' + selectedProduct.prodNo);

		// call Product Description screen
		list.up('productTab').push({
			xtype : 'productDescMain',
			id : 'searchProductDescMain',
			title : selectedProduct.prodDesc
		});
		getProductSalesHistoryList(selectedProduct.prodNo, 0, 'searchProductDescMain');
		// get ATP from selected plant in search product screen
		var searchPlant = Ext.ComponentQuery.query('#searchPlant')[0].getValue();
		getProductAtpList(selectedProduct.prodNo, searchPlant);
		getMIHistory(selectedCust, selectedCustRecord.plant, selectedProduct.prodNo);
	},

	// when done button is tapped, add update cart item
	onUpdateItemTap : function(button) {

		// copy selectedProduct to temp product by JSON parser
		var tempProduct = JSON.parse(JSON.stringify(selectedProduct));

		var cartProductDescView = Ext.ComponentQuery.query('#cartProductDesc')[0];
		var allItems = cartProductDescView.items.items;
		for (var i = 0; i < allItems.length; i++) {
			// set job number
			if (allItems[i].getItemId() == 'jobNumber') {
				tempProduct.jobNumber = allItems[i].getValue();
			}
			// set orderQty
			if (allItems[i].getItemId() == 'orderQty') {
				tempProduct.orderQty = allItems[i].getValue();
			}
			// set manualPr
			if (allItems[i].getItemId() == 'manualPr') {
				tempProduct.manualPr = allItems[i].getValue();
			}
		}

		// add temp object to productsInCart variable
		updateToCart(tempProduct);
		updateCartTotal();
		// return to previous page
		button.up('cartOrder').pop();
		Ext.toast(tempProduct.prodDesc + ' has been updated.', 1500);
	},

	// when + button is tapped, add selected product to productsInCart variable
	onAddToCartTap : function(button) {

		// var tempProduct = JSON.parse(JSON.stringify(selectedProduct));
		var tempData;
		var buttonId = button.getItemId();

		// determine which view used to retrieve a product data beofre adding to
		// the cart
		if (buttonId == 'addToCartButton') {
			var searchProductDescView = Ext.ComponentQuery
			.query('#searchProductDesc')[0];
			var allItems = searchProductDescView.items.items;
			tempData = searchProductDescView.getData();
		} else if (buttonId == 'preAddToCartButton') {
			var previousProductDescView = Ext.ComponentQuery
			.query('#previousProductDesc')[0];
			var allItems = previousProductDescView.items.items;
			tempData = previousProductDescView.getData();
		} else if (buttonId == 'miAddToCartButton') {
			var miProductDescView = Ext.ComponentQuery
			.query('#miProductDesc')[0];
			var allItems = miProductDescView.items.items;
			tempData = miProductDescView.getData();
		}

		// check whether product detail data already loaded succesfully
		if (tempData.uom != null) {
			// copy data from a view to temp product by JSON parser
			var tempProduct = JSON.parse(JSON.stringify(tempData));

			for (var i = 0; i < allItems.length; i++) {
				// set job number
				if (allItems[i].getItemId() == 'jobNumber') {
					tempProduct.jobNumber = allItems[i].getValue();
				}
				// set orderQty
				if (allItems[i].getItemId() == 'orderQty') {
					tempProduct.orderQty = allItems[i].getValue();
				}
				// set manualPr
				if (allItems[i].getItemId() == 'manualPr') {
					tempProduct.manualPr = allItems[i].getValue();
				}
			}

			// add temp object to productsInCart variable
			addToCart(tempProduct);
			updateCartTotal();

			Ext.toast(tempProduct.prodDesc + ' has been added to the cart.', 1500);
			// return to previous page
			if (buttonId == 'addToCartButton') {
				button.up('productTab').pop(0);
			} else if (buttonId == 'preAddToCartButton') {
				button.up('previousPurchaseTab').pop(0);
			} else if (buttonId == 'miAddToCartButton') {
				button.up('miProductTab').pop(0);
			}

		} else {
			Ext.toast('Please wait while product information being loaded before adding to the cart', 3000);
		}

	},

	// when sort button is tapped, show sort type
	onSortTap : function(button) {
		console.log('sort is tapped');
		var picker = Ext.create('SpicersOrder.resource.SortPicker');
		var buttonId = button.getItemId();
		if (buttonId == 'productSortButton') {
			picker.setItemId('productSearch');
		} else if (buttonId == 'previousPurchaseSortButton') {
			picker.setItemId('previousPurchase');
		} else if (buttonId == 'favoriteSortButton') {
			picker.setItemId('favorite');
		}

		Ext.Viewport.add(picker);
		picker.show();
	},

	// when product tab active, show exit button and hide sort button
	onProductActivate : function(view) {
		console.log('product tab active');
		var button = Ext.ComponentQuery.query('#productSortButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

		button = null;
	},

	// when product result is active, hide exit button and show sort
	// button
	onProductResultActivate : function(list) {
		console.log('Result list is active');
		var button = Ext.ComponentQuery.query('#addToCartButton');
		if (button.length > 0) {
			button[0].setHidden(true);
		}

		button = Ext.ComponentQuery.query('#productSortButton');
		if (button.length > 0) {
			button[0].setHidden(false);
		}
		button = null;

	},

	// when search button is clicked
	// call trex_search in R3 then display result
	onSearchTap : function(button, e, options) {
		// validate atp qty field before calling search fn
		var atpField = Ext.ComponentQuery.query('#searchAtpQty')[0];
		if (validateNumberField(atpField.getValue(), 'Minimum stock must be number!')) {
			getProductSearch(button);
		}

	},

	// validate atp qty field whether input is a number or not
	// if not then popup alert message
	onBlur : function(field) {!validateNumberField(field.getValue(), 'ATP Qty must be number!');
	},

	// when exit button is tapped
	onExitTap : function() {
		console.log('close workflow');

		Ext.Msg.confirm('Warning', 'Do you want to exit?', function(buttonId) {
			if (buttonId === 'yes') {
				closeWorkflow();
			}
		}, this // scope of the controller
		);

	},
	onCustomerListDoubleTap : function(list, index, target, record) {
		console.log('double tap customer list');
		selectedCustRecord = record.getData();
		selectedCust = record.get('custNo');
		//		selectedCustomerAddress = record.get('custAddr');
		updateCartOrderHeader(record);
		updateProductSearch(record);
		getCustomerDetail();
	},
	// when customer is selected then save customer number to global
	// variable
	onCustomerListSelect : function(list, record) {
		console.log('cust list is select at: ' + record.get('custNo'));
		// save customer number
		selectedCustRecord = record.getData();
		selectedCust = record.get('custNo');

		// set customer name in consignment tab
		// var consCustField = Ext.ComponentQuery.query('#consCustomerName')[0];
		// consCustField.setLabel(selectedCustRecord.custName);

		// get new MI product
		var store = Ext.getStore('miProduct');
		store.removeAll();
		getMIProduct(selectedCust, selectedCustRecord.plant);
		getCustomerCons(selectedCust);
		setCustomerConsLabel(selectedCust, selectedCustRecord.custName);
		updateCartOrderHeader(record);
		updateProductSearch(record);
		getShiptoList();
	},

	onMIProductListHold : function(list, index, target, record) {
		var product = record.getData();
		// check whether a product has MI record
		if (product.requestStatus != '') {
			//clear future mthly input

			var reasonText = product.reason;
			Ext.ComponentQuery.query('#miDisplayReason')[0].setValue(reasonText);
			Ext.ComponentQuery.query('#miDisplayDetail')[0].setValue(product.detail);
			miDisplayPanel.show();
		}
	},

	onMIProductListSelect : function(list, index, target, record) {
		selectedProduct = record.getData();

		list.up('miProductTab').push({
			xtype : 'productDescMain',
			id : 'miProductDescMain',
			title : selectedProduct.prodDesc
		});
		getProductSalesHistoryList(selectedProduct.prodNo, 0, 'miProductDescMain');
		// get ATP based on customer plant
		getProductAtpList(selectedProduct.prodNo, selectedCustRecord.plant);
		getMIProductDetail(selectedCust, selectedCustRecord.plant, selectedProduct.prodNo);
		getMIHistory(selectedCust, selectedCustRecord.plant, selectedProduct.prodNo);
	},

	onMISearchKeyUp : function(searchField) {
		// queryString = searchField.getValue();
		// console.log(this, 'Please search by: ' + queryString);
		//
		// var store = Ext.getStore('miProduct');
		// store.clearFilter();
		//
		// if (queryString) {
		// var thisRegEx = new RegExp(queryString, "i");
		// store.filterBy(function(record) {
		// if (thisRegEx.test(record.get('prodDesc')) || thisRegEx.test(record.get('prodNo'))) {
		// return true;
		// };
		// return false;
		// });
		// }

	},

	onSearchKeyUp : function(searchField, e) {
		// queryString = searchField.getValue();
		// if (e.event.keyCode != BACK_SPACE_KEYCODE) {
		// if (selectedSalesOffice == '') {
		// var store = Ext.getStore('customer');
		// store.clearFilter();
		//
		// if (queryString) {
		// var thisRegEx = new RegExp(queryString, "i");
		// store.filterBy(function(record) {
		// if (thisRegEx.test(record.get('custName')) || thisRegEx.test(record.get('custNo'))) {
		// return true;
		// };
		// return false;
		// });
		// }
		// } else {
		// var queryLength = queryString.length;
		// if (queryLength >= MIN_CHAR_SEARCH) {
		// searchString = queryString;
		// getCustomerList(selectedSalesOffice);
		// searchString = '';
		// }
		// }
		// }

	},

	onMIClearSearch : function() {
		console.log('Clear icon is tapped');
		var store = Ext.getStore('miProduct');
		store.clearFilter();
	},

	onClearSearch : function() {
		console.log('Clear icon is tapped');
		var store = Ext.getStore('customer');
		store.clearFilter();
	},

	onActivate : function() {
		console.log('Controller initialized');
		Ext.Ajax.setTimeout(REQUEST_TIMEOUT);

		// user account validation
		credScreen = Ext.create('SpicersOrder.view.Credentials');
		Ext.Viewport.add(credScreen);

		sharedStorage = window.localStorage;
		// // get user name
		if (sharedStorage != null) {
			userId = sharedStorage.getItem(USER_KEY);
		};
		if (userId != null) {
			userId = userId.toUpperCase();
		}
		// get saved password
		if (sharedStorage != null) {
			password = sharedStorage.getItem(PASSWORD_KEY);
		};
		//
		if (environment == 'R3D') {
			serverConnection = 'http://shop.spicers.com.au:8085/sap/opu/odata/sap/ZGW_SPICERS_CORE_NEW_SRV/';
			//			serverConnection = 'http://pxdcla26.domain1.local:8000/sap/opu/odata/sap/ZGW_SPICERS_CORE_NEW_SRV/';
		} else {
			// prod oData
			serverConnection = 'http://shop.spicers.com.au:8445/sap/opu/odata/sap/ZGW_SPICERS_CORE_NEW_SRV/';
		}
		oDataBackEnd = serverConnection;
		if (password == null) {
			// no password saved then show credential screen
			showCredentialScreen(userId);
		} else {
			validateCredentials();
		}

	},
	// prepare global variable when app first get loaded
	// onActivate : function() {
	// console.log('Main container is active');
	//
	// }
});

function refreshPanel(fullRefreshPanel) {
	// set wait time to 1 second
	Ext.defer(function() {
		// TODO: load customer price from Sybase
		// ------------

		// set customer price to temporary record
		var tempProduct = JSON.parse(JSON.stringify(fullRefreshPanel.getParent().getData()));
		tempProduct.custPr = custPrice;
		// TODO: save customer price data in local store
		// ------------

		// save customer price
		updateCustPrice(tempProduct);

		// refresh data in product description screen
		fullRefreshPanel.up('productDesc').setData(tempProduct);
		console.log('refresh panel');
		fullRefreshPanel.refreshReady();
		// update total
		updateCartTotal();
	}, 1000);

}

function number(nStr, shortForm) {
	var result;
	if (isNaN(nStr) || nStr == null) {
		return "";
	} else {
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		result = x1 + x2.substring(0, 3);
	}

	x = result.split('.');
	if (shortForm && x[0].length > 3) {
		result = x[0].slice(0, x[0].length - 4) + 'k';
		result = result.remove(',');
	}

	return result;
}

function validateNumberField(value, errorMessage) {
	if (value == null) {
		Ext.toast(errorMessage, 1500);
		return false;
	} else {
		return true;
	}
}

function addToCart(product) {

	var isDuplicate = false;
	for (var i = 0; i < productsInCart.items.length; i++) {
		if (product.prodNo == productsInCart.items[i].prodNo) {
			productsInCart.items[i].orderQty += product.orderQty;
			productsInCart.items[i].jobNumber = product.jobNumber;
			productsInCart.items[i].manualPr = product.manualPr;
			isDuplicate = true;
			break;
		}
	}

	if (!isDuplicate) {
		productsInCart.items.push(product);
		// TODO need to save this variable into local storage

		// update badgeText
		updateCartBadgeText();
	}
	// update cartStore
	updateCartStore();
}

function updateCustPrice(product) {

	// Update product in cart
	for (var i = 0; i < productsInCart.items.length; i++) {
		if (product.prodNo == productsInCart.items[i].prodNo) {
			productsInCart.items[i].custPr = product.custPr;
			updateCartStore();
			break;
		}
	}

	// Update productResult
	for (var i = 0; i < prodResultData.items.length; i++) {
		if (product.prodNo == prodResultData.items[i].prodNo) {
			prodResultData.items[i].custPr = product.custPr;
			updateProductResultStore();
			break;
		}
	}

	// Update previousPurchase
	for (var i = 0; i < prevProdData.items.length; i++) {
		if (product.prodNo == prevProdData.items[i].prodNo) {
			prevProdData.items[i].custPr = product.custPr;
			updatePreviousPurchaseStore();
			break;
		}
	}

	// Update favorite
	for (var i = 0; i < favoriteData.items.length; i++) {
		if (product.prodNo == favoriteData.items[i].prodNo) {
			favoriteData.items[i].custPr = product.custPr;
			updateFavoriteStore();
			break;
		}
	}

}

function updateToCart(product) {

	for (var i = 0; i < productsInCart.items.length; i++) {
		if (product.prodNo == productsInCart.items[i].prodNo) {
			productsInCart.items[i].orderQty = product.orderQty;
			productsInCart.items[i].jobNumber = product.jobNumber;
			productsInCart.items[i].manualPr = product.manualPr;
			break;
		}
	}
	// update cartStore
	updateCartStore();
}

function deleteAllInCart() {
	productsInCart = {
		items : []
	};
}

function deleteItemInCart(idx) {
	// remove object[idx] from the cart
	productsInCart.items.splice(idx, 1);

	// update badgeText
	updateCartBadgeText();
	// update cartStore
	updateCartStore();
	// update total
	updateCartTotal();
}

function updateCartBadgeText() {
	// update badgeText
	var cartTab = mainContainer.getTabBar().getComponent(4);
	var noItems = productsInCart.items.length;
	cartTab.setBadgeText(noItems);
}

// update orderMessageStore
function updateOrderMessageStore() {
	var store = Ext.getStore('message');
	if (store != null) {
		store.setData(orderMessage);
	}
}

// update customerStore
function updateCustomerStore() {
	var store = Ext.getStore('customer');
	if (store != null) {
		store.setData(customerData);
	}
}

// update contactStore
function updateContactStore() {
	var store = Ext.getStore('contact');
	if (store != null) {
		store.setData(contactData);
	}
}

// update activityStore
function updateActivityStore() {
	var store = Ext.getStore('activity');
	if (store != null) {
		store.setData(activityData);
	}
}

function updateDisputeStore() {
	var store = Ext.getStore('dispute');
	if (store != null) {
		store.setData(disputeData);
	}
}

// update cartStore
function updateCartStore() {
	var store = Ext.getStore('cart');
	if (store != null) {
		store.setData(productsInCart);
	}
}

// update orderMessageStore
function updateOrderMessageStore() {
	var store = Ext.getStore('message');
	if (store != null) {
		store.setData(orderMessage);
	}
}

// update orderItemStore
function updateOrderItemStore() {
	var store = Ext.getStore('orderitem');
	if (store != null) {
		store.setData(simulatedOrder);
	}
}

function updateConsOrderItemStore() {
	var store = Ext.getStore('consorderitem');
	if (store != null) {
		store.setData(sumSimulatedConsOrder);
	}
}

// update productResultStore
function updateProductResultStore() {
	var store = Ext.getStore('productResult');
	if (store != null) {
		store.setData(prodResultData);
	}
}

// update previousPurchaseStore
function updatePreviousPurchaseStore() {
	var store = Ext.getStore('previousPurchase');
	if (store != null) {
		store.setData(prevProdData);
	}
}

function updateMIProductStore() {
	var store = Ext.getStore('miProduct');
	if (store != null) {
		store.setData(miProdData);
	}
}

function updateCustomerConsStore() {
	var store = Ext.getStore('customerCons');
	if (store != null) {
		store.setData(customerConsData);
	}
}

function updateProductMIHistStore() {
	var store = Ext.getStore('searchProductMIHist');
	if (store != null) {
		store.setData(searchProdMIHistData);
	}
	store = Ext.getStore('previousProductMIHist');
	if (store != null) {
		store.setData(previousProdMIHistData);
	}
	store = Ext.getStore('miProductMIHist');
	if (store != null) {
		store.setData(miProdMIHistData);
	}
}

function updateProductAtpStore() {
	var store = Ext.getStore('searchProductAtp');
	if (store != null) {
		store.setData(searchProdAtpData);
	}
	store = Ext.getStore('previousProductAtp');
	if (store != null) {
		store.setData(previousProdAtpData);
	}
	store = Ext.getStore('miProductAtp');
	if (store != null) {
		store.setData(miProdAtpData);
	}
}

function updateProductSalesHistoryStore() {
	var store = Ext.getStore('searchProductSalesHistory');
	if (store != null) {
		store.setData(searchProdSalesHistoryData);
	}
	store = Ext.getStore('preProductSalesHistory');
	if (store != null) {
		store.setData(preProdSalesHistoryData);
	}
	store = Ext.getStore('miProductSalesHistory');
	if (store != null) {
		store.setData(miProdSalesHistoryData);
	}
}

// update favoriteStore
function updateFavoriteStore() {
	var store = Ext.getStore('favorite');
	if (store != null) {
		store.setData(favoriteData);
	}
}

function getSelectedProductOrderQty() {
	if (jPath(selectedProduct, 'orderQty') == null) {
		return 1;
	} else {
		return selectedProduct.orderQty;
	}
}

function jPath(obj, a) {
	a = a.split(".");
	var p = obj || {};
	for (var i in a) {
		if (p === null || typeof p[a[i]] === 'undefined')
			return null;
		p = p[a[i]];
	}
	return p;
}

function changeCartOrderQty(prodNo, newOrderQty) {
	console.log('change order qty : ' + prodNo + '  ' + newOrderQty);

	for (var i = 0; i < productsInCart.items.length; i++) {
		if (prodNo == productsInCart.items[i].prodNo) {
			productsInCart.items[i].orderQty = newOrderQty;
			updateCartStore();
			updateCartTotal();
			break;
		}
	}
}

function changeConsQty(prodNo, newOrderQty) {
	console.log('change consignment qty : ' + prodNo + '  ' + newOrderQty);

	for (var i = 0; i < customerConsData.items.length; i++) {
		if (prodNo == customerConsData.items[i].prodNo) {
			customerConsData.items[i].remainingStk = newOrderQty;
			break;
		}
	}
}

function updateCartTotal() {
	var totalPrice = 0;
	for (var i = 0; i < productsInCart.items.length; i++) {
		if (productsInCart.items[i].manualPr != null) {
			totalPrice = totalPrice + productsInCart.items[i].manualPr * productsInCart.items[i].orderQty;
		} else if (productsInCart.items[i].custPr != null) {
			totalPrice = totalPrice + productsInCart.items[i].custPr * productsInCart.items[i].orderQty;
		} else {
			// customer price will always be available
			// totalPrice = totalPrice + productsInCart.items[i].listPr *
			// productsInCart.items[i].orderQty;
		}

	}
	var totalField = Ext.ComponentQuery.query('#cartTotal');
	if (totalField.length > 0) {
		totalField[0].setValue(number(totalPrice));
	}
	return totalPrice;
}

function activateCartList() {
	var button = Ext.ComponentQuery.query('#deleteAllButton');
	if (button.length > 0) {
		button[0].setHidden(false);
	}

	// hide done button
	var button = Ext.ComponentQuery.query('#doneButton');
	if (button.length > 0) {
		button[0].setHidden(true);
	}
}

function showCredentialScreen(userId) {
	if (sharedStorage != null) {
		credScreen.down('#userIdCredential').setValue(userId);
		credScreen.show();
	}
}

function validateCredentials() {

	if (mainContainer != null) {
		mainContainer.setMasked({
			xtype : 'loadmask',
			message : VALIDATE_ACCOUNT_LOADING,
			indicator : true
		});
	} else {
		Ext.toast(VALIDATE_ACCOUNT_LOADING, 10000);
	}
	// Ext.toast(VALIDATE_ACCOUNT_LOADING, 1500);

	filters = {};
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getValidateAccountOData, filterString, successUserValidate, errCallback, null);

}

function getPreviousPurchase(selectedDays) {
	// set wait time to half second
	days = selectedDays;
	searchString = '';
	filters = [{
		field : 'inputPrevPur',
		value : 'X',
	}, {
		field : 'inputNumDays',
		value : selectedDays,
		type : 'int'
	}, {
		field : 'inputCustomer',
		value : selectedCust,
	}];
	var filterString = constructFilter(filters, searchString);

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : PRODUCT_LOADING,
		indicator : true
	});

	callOData(getPurchasedProductOData, filterString, successPreviousProductCallback, errCallback, null);
}

function getMIReasons() {
	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getMIReasonsOData, filterString, successMIReasonsCallback, errCallback, null);
}

function getActivitySubTypes() {
	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getActivitySubTypeOData, filterString, successActivitySubTypesCallback, errCallback, null);
}

function getDisputList() {
	filters = [{
		field : 'CustomerNo',
		value : selectedCust,
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getDisputeOData, filterString, successDisputeListCallback, errCallback, null);
}

function getCustomerContactList() {
	filters = [{
		field : 'Customer',
		value : selectedCust,
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getContactOData, filterString, successCustomerContactListCallback, errCallback, null);
}

function getCustomerRecentActivity() {

	filters = [{
		field : 'CustomerNo',
		value : selectedCust,
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getSalesActivityOData, filterString, successCustomerRecentActivityCallback, errCallback, null);
}

function getCustomerCons(customer) {
	filters = [{
		field : 'Customer',
		value : customer,
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getCustomerConsOData, filterString, successCustomerConsCallback, errCallback, null);

}

function getMIHistory(customer, plant, material) {

	filters = [{
		field : 'Customer',
		value : customer,
	}, {
		field : 'Plant',
		value : plant,
	}, {
		field : 'Material',
		value : material,
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getMIHistoryOData, filterString, successMIHistoryCallback, errCallback, null);
}

function getMIProduct(customer, plant) {
	Ext.ComponentQuery.query('#miProductList')[0].setEmptyText('Loading products information');

	filters = [{
		field : 'Customer',
		value : customer,
	}, {
		field : 'Plant',
		value : plant,
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getMIProductOData, filterString, successMIProductCallback, errCallback, null);
}

function getCustomerSetting() {
	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getCustomerSettingOData, filterString, successCustomerSetting, errCallback, null, selectedCust);
}

function getCustomerAddress() {
	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getSingleCustomerOData, filterString, successCustomerAddress, errCallback, null, selectedCust);
}

function getCustomerList(salesOffice) {

	if (salesOffice == '' || salesOffice == null) {
		salesOffice = '';
	}

	filters = [{
		field : 'inputVan',
		value : '',
	}, {
		field : 'inputSalesOff',
		value : salesOffice,
	}];
	var filterString = constructFilter(filters, searchString);

	callOData(getCustomerOData, filterString, successCustomerCallback, errCallback, null);
}

function getProductSearch(button) {

	var searchString = Ext.ComponentQuery.query('#searchString')[0].getValue();

	if (searchString == '') {
		Ext.Msg.alert('Alert', 'Please enter search string!', function() {
		})
	} else {

		var searchAtpQty;
		var searchAltProduct;
		var searchSupZero;
		var searchPlant;

		searchAtpQty = Ext.ComponentQuery.query('#searchAtpQty')[0].getValue();
		if (Ext.ComponentQuery.query('#searchAltProduct')[0].getChecked()) {
			searchAltProduct = 'X';
		} else {
			searchAltProduct = ' ';
		}

		if (Ext.ComponentQuery.query('#searchSupZero')[0].getChecked()) {
			searchSupZero = 'X';
		} else {
			searchSupZero = ' ';
		}

		searchPlant = Ext.ComponentQuery.query('#searchPlant')[0].getValue();

		filters = [{
			field : 'inputTrex',
			value : 'X',
		}, {
			field : 'inputAtpQty',
			value : searchAtpQty,
		}, {
			field : 'inputSupZero',
			value : searchSupZero,
		}, {
			field : 'inputFindAlt',
			value : searchAltProduct,
		}, {
			field : 'inputCustomer',
			value : selectedCust
		}, {
			field : 'inputPlant',
			value : searchPlant
		}];
		var filterString = constructFilter(filters, searchString);

		mainContainer.setMasked({
			xtype : 'loadmask',
			message : PRODUCT_LOADING,
			indicator : true
		});

		callOData(getProductSearchOData, filterString, successProductSearchCallback, errCallback, null);
	}
}

function getMIProductDetail(customer, plant, prodNo) {

	filters = [{
		field : 'inputTrex',
		value : 'X',
	}, {
		field : 'inputAtpQty',
		value : 0,
	}, {
		field : 'inputSupZero',
		value : '',
	}, {
		field : 'inputFindAlt',
		value : '',
	}, {
		field : 'inputCustomer',
		value : selectedCust
	}, {
		field : 'inputPlant',
		value : selectedCustRecord.plant
	}];
	var filterString = constructFilter(filters, prodNo);

	callOData(getProductSearchOData, filterString, successMIProductDetailCallback, errCallback, null);
}

function savePasswordCredential() {
	sharedStorage.setItem(USER_KEY, userId);
	sharedStorage.setItem(PASSWORD_KEY, password);

}

function showIncorrectPasswordAlert() {
	Ext.Msg.alert('Alert', 'Incorrect password. Please enter new password.', function() {
		showCredentialScreen(userId);
	});
}

function simulateConsignmentOrder(customer, poNumber, consItems) {
	mainContainer.setMasked({
		xtype : 'loadmask',
		message : CONS_ORDER_SIMULATE_LOADING,
		indicator : true
	});

	filters = [{
		field : 'inputCustomer',
		value : customer,
	}, {
		field : 'inputOrderItem',
		value : consItems,
	}, {
		field : 'inputPO',
		value : poNumber,
	}];

	var filterString = constructFilter(filters, searchString);

	callOData(simulateConsOrderItemOData, filterString, successSimulateConsOrderItemCallback, errCallback, null);
}

function createConsignmentOrder(customer, poNumber, consItems) {
	mainContainer.setMasked({
		xtype : 'loadmask',
		message : ORDER_CREATE_LOADING,
		indicator : true
	});

	filters = [];

	consOrderPayload = {
		'inputCustomer' : customer,
		'inputOrderItem' : consItems,
		'inputPO' : poNumber
	};

	var filterString = constructFilter(filters, searchString);

	callOData(simulateConsOrderItemOData, filterString, callCreateConsOrderOData, errCallback, consOrderPayload);
}

function simulateOrder() {
	// set wait time to half second

	orderHeader = prepareOrderHeader();
	orderItem = prepareOrderItem();
	orderPartner = prepareOrderPartner();

	// prepare data
	var docType, salesOrg, distChan, division, reqDate, poNum, shipCond;

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : ORDER_SIMULATE_LOADING,
		indicator : true
	});

	simulatedOrder = {
		items : []
	};
	orderMessage = {
		items : []
	};

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

	callOData(simulateOrderMessageOData, filterString, successSimulateOrderMessageCallback, errCallback, null);
}

function updateCartOrderHeader(record) {
	customerPlant = record.get('plant');
	updateCartPlant(customerPlant);
	updateCartStorageLoc(customerPlant);
}

function updateProductSearch(record) {
	var searchPlantField = Ext.ComponentQuery.query('#searchPlant')[0];
	searchPlantField.setValue(record.get('plant'));
}

function updateCartPlant(plant) {
	var deliveringPlantField = Ext.ComponentQuery.query('#deliveringPlant')[0];
	deliveringPlantField.setValue(plant);
}

function updateCartStorageLoc(plant) {
	for (var i = 0; i < STORAGE_LOC.length; i++) {
		if (STORAGE_LOC[i].value == plant) {
			storageLocOptions = STORAGE_LOC[i].items;
			break;
		}
	}
	var storageLocField = Ext.ComponentQuery.query('#storageLoc')[0];
	storageLocField.setOptions(storageLocOptions);
	if (userStorageLoc != '') {
		storageLocField.setValue(userStorageLoc);
	}
}

function prepareOrderHeader() {
	//order_header_in format is
	//DOC_TYPE|SALES_ORG|DIST_CHAN|DIVISION|REQ_DATE|PO_NUMBER|SHIPPING_COND|QUO_VALIDTO_DAT
	var orderHeader = '';
	var requestedDelDate;
	var quoteValidToDate;

	var orderType = Ext.ComponentQuery.query('#orderType')[0].getValue().trim();
	var date = Ext.ComponentQuery.query('#deliveryDate')[0].getValue();
	var valDate = Ext.ComponentQuery.query('#validToDate')[0].getValue();
	var poNumber = Ext.ComponentQuery.query('#poNumber')[0].getValue().trim();
	var shippingCond = Ext.ComponentQuery.query('#shippingCond')[0].getValue().trim();

	requestedDelDate = getSAPDate(date);
	quoteValidToDate = getSAPDate(valDate);

	orderHeader = orderType + '%7C1010%7C50%7C00%7C' + requestedDelDate + '%7C' + poNumber + '%7C' + shippingCond + '%7C' + quoteValidToDate;
	return orderHeader;
}

function getSAPDate(dateInput) {

	var year = dateInput.getFullYear().toString();
	var month = (dateInput.getMonth() + 1).toString();
	var day = dateInput.getDate().toString();

	if (month.length == 1) {
		month = '0' + month;
	}

	if (day.length == 1) {
		day = '0' + day;
	}

	return year + month + day;
}

function prepareOrderItem() {
	var orderItem = '';
	var temp;
	var tempManualPr;

	// convert product in a cart to string
	//*MATERIAL|REQ_QTY|SALES_UNIT|MANUAL_PRICE|PURCH_NO_S|STOR_LOC|PLANT

	var plant = Ext.ComponentQuery.query('#deliveringPlant')[0].getValue().trim();
	var storLoc = Ext.ComponentQuery.query('#storageLoc')[0].getValue().trim();

	for (var i = 0; i < productsInCart.items.length; i++) {
		temp = '';
		if (productsInCart.items[i].manualPr == null) {
			tempManualPr = '';
		} else {
			tempManualPr = productsInCart.items[i].manualPr;
		}
		if (i != 0) {
			temp = '%7C';
		}
		temp += productsInCart.items[i].prodNo + '%7C' + productsInCart.items[i].orderQty + '%7C' + productsInCart.items[i].uom + '%7C' + tempManualPr + '%7C' + productsInCart.items[i].jobNumber + '%7C' + storLoc + '%7C' + plant;

		orderItem += temp;
	};

	return orderItem;
}

function prepareOrderPartner() {
	//order_partner format is
	//WE|customerNo|AG|customerNo
	var selectedShipto = Ext.ComponentQuery.query('#shiptoParty')[0].getValue();
	var orderPartner = 'WE%7C' + selectedShipto + '%7CAG%7C' + selectedCust;

	return orderPartner;
}

function createOrder() {
	var inputSample;
	// prepare header text
	var quoteComment = Ext.ComponentQuery.query('#quoteCommentField')[0].getValue();
	var orderComment = Ext.ComponentQuery.query('#orderCommentField')[0].getValue();
	var delInstruction = Ext.ComponentQuery.query('#delInstructionField')[0].getValue();
	quoteComment = removeSpecialCharacter(quoteComment);
	orderComment = removeSpecialCharacter(orderComment);
	delInstruction = removeSpecialCharacter(delInstruction);

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : ORDER_CREATE_LOADING,
		indicator : true
	});
	var orderHeaderCreate = orderHeader.replace(/%7C/g, '\|');
	var orderItemCreate = orderItem.replace(/%7C/g, '\|');
	var orderPartnerCreate = orderPartner.replace(/%7C/g, '\|');

	var sampleOrder = Ext.ComponentQuery.query('#sampleOrder')[0].getValue();
	if (sampleOrder == 1) {
		inputSample = 'X';
	} else {
		inputSample = '';
	}

	orderPayload = {
		'inputOrderHeader' : orderHeaderCreate,
		'inputOrderItem' : orderItemCreate,
		'inputOrderPartner' : orderPartnerCreate,
		'inputAppType' : (mobAppType == null) ? '' : mobAppType.toString(),
		'orderText' : (orderComment == null) ? '' : orderComment.toString(),
		'deliveryText' : (delInstruction == null) ? '' : delInstruction.toString(),
		'quoteText' : (quoteComment == null) ? '' : quoteComment.toString(),
		'inputSample' : inputSample,
	};

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(simulateOrderItemOData, filterString, callCreateOrderOData, errCallback, orderPayload, null);
}

function showConsOrderSimulation() {
	// cannot move tab when in the order confirmation
	// isInOrderConfirmationScreen = true;

	var consOrder = Ext.ComponentQuery.query('consignmentTab')[0];

	consOrder.push({
		xtype : 'consOrderConfirmation',
		title : 'Cons Confirmation'
	});

	var now = new Date();

	//setup geolocation and timestamp
	navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationError);
	Ext.ComponentQuery.query('#consConfirmTime')[0].setValue(now.toLocaleString());

}

function showOrderSimulation() {
	// cannot move tab when in the order confirmation
	isInOrderConfirmationScreen = true;

	var hasError = false;
	var orderType = Ext.ComponentQuery.query('#orderType')[0].getValue();
	var title;
	var cartOrder = Ext.ComponentQuery.query('cartOrder')[0];

	if (orderType == 'ZSTK') {
		title = 'Order Confimation';
	} else {
		title = 'Quote Confirmation';
	}

	cartOrder.push({
		xclass : 'SpicersOrder.view.OrderConfirmation',
		title : title
	});

	// disable changes on all field in OrderDetail
	var cartOrderHeaderDetail = Ext.ComponentQuery.query('cartOrderDetail')[0];
	var allChilds = cartOrderHeaderDetail.getInnerItems();
	for (var i = 0; i < allChilds.length; i++) {
		allChilds[i].setReadOnly(true);
	}

	// hide delete all button
	var button = Ext.ComponentQuery.query('#deleteAllButton');
	if (button.length > 0) {
		button[0].setHidden(true);
	}

	// hide order confirmation
	button = Ext.ComponentQuery.query('#checkoutButton');
	if (button.length > 0) {
		button[0].setHidden(true);
	}

	for (var i = 0; i < orderMessage.items.length; i++) {
		if (orderMessage.items[i].messageType == ERROR_MESSAGE) {
			hasError = true;
			break;
		}
	}

	if (!hasError) {
		// show createOrder button
		button = Ext.ComponentQuery.query('#createOrderButton');
		if (button.length > 0) {
			button[0].setHidden(false);
		}

		var totalField = Ext.ComponentQuery.query('#cartTotal');
		if (totalField.length > 0) {
			totalField[0].setValue(number(getOrderTotal()));
		}
	}

}

function getOrderTotal() {
	var total = 0;
	for (var i = 0; i < simulatedOrder.items.length; i++) {
		total = total + parseFloat(simulatedOrder.items[i].netValue);
	}
	return total;
}

function changeCustomer(name1, name2, street, postcode, suburb, region, email, tel, fax) {

	customerDetailPayload = {
		'CustomerNo' : selectedCust,
		'Name1' : (name1 == null) ? '' : name1.toString(),
		'Name2' : (name2 == null) ? '' : name2.toString(),
		'Street' : (street == null) ? '' : street.toString(),
		'PostCode' : (postcode == null) ? '' : postcode.toString(),
		'City' : (suburb == null) ? '' : suburb.toString(),
		'Region' : (region == null) ? '' : region.toString(),
		'Email' : (email == null) ? '' : email.toString(),
		'Tel' : (tel == null) ? '' : tel.toString(),
		'Fax' : (fax == null) ? '' : fax.toString()
	};

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : CUSTOMER_CHANGE_LOADING,
		indicator : true
	});

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getSingleCustomerOData, filterString, callChangeCustomerOData, errCallback, customerDetailPayload, selectedCust);

}

function changeCustomerSetting(stkOrderDays, quoteDays, indOrderDays, conOrderDays, salesActDays) {

	customerSettingPayload = {
		'Customer' : selectedCust,
		'StkOrderDays' : stkOrderDays,
		'QuoteDays' : quoteDays,
		'IndOrderDays' : indOrderDays,
		'ConOrderDays' : conOrderDays,
		'SalesActDays' : salesActDays,
	};

	selectedCustSetting.stkOrderDays = stkOrderDays;
	selectedCustSetting.quoteDays = quoteDays;
	selectedCustSetting.indOrderDays = indOrderDays;
	selectedCustSetting.conOrderDays = conOrderDays;
	selectedCustSetting.salesActDays = salesActDays;

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : CUSTOMER_SETTING_CHANGE_LOADING,
		indicator : true
	});

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getCustomerSettingOData, filterString, callChangeCustomerSettingOData, errCallback, customerSettingPayload, selectedCust);

}

function submitMIRequest(material, customer, plant, futureMthSales, reasonKey, reason, fromDate, toDate, detail, reqType) {
	imRequestPayload = {
		'Material' : material,
		'Customer' : customer,
		'Plant' : plant,
		'FutureMthSales' : futureMthSales.toString(),
		'MIKey' : reasonKey,
		'Reason' : reason,
		'FromDate' : fromDate,
		'ToDate' : toDate,
		'Detail' : detail,
		'ReqType' : reqType,
	};

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : MI_REQ_CREATE_LOADING,
		indicator : true
	});

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getMIProductOData, filterString, callSubmitMIReqOData, errCallback, imRequestPayload, null);
}

function createCustomer(name1, name2, street, postcode, suburb, region, email, tel, fax) {

	customerDetailPayload = {
		'Name1' : (name1 == null) ? '' : name1.toString(),
		'Name2' : (name2 == null) ? '' : name2.toString(),
		'Street' : (street == null) ? '' : street.toString(),
		'PostCode' : (postcode == null) ? '' : postcode.toString(),
		'City' : (suburb == null) ? '' : suburb.toString(),
		'Region' : (region == null) ? '' : region.toString(),
		'Email' : (email == null) ? '' : email.toString(),
		'Tel' : (tel == null) ? '' : tel.toString(),
		'Fax' : (fax == null) ? '' : fax.toString()
	};

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : CUSTOMER_CREATE_LOADING,
		indicator : true
	});

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getSingleCustomerOData, filterString, callCreateCustomerOData, errCallback, customerDetailPayload, null);
}

function createContact(firstName, lastName, tel, email, title, department, functions) {

	contactPayload = {
		'Customer' : selectedCust,
		'FirstName' : (firstName == null) ? '' : firstName.toString(),
		'LastName' : (lastName == null) ? '' : lastName.toString(),
		'Email' : (email == null) ? '' : email.toString(),
		'Phone' : (tel == null) ? '' : tel.toString(),
		'Title' : (title == null) ? '' : title.toString(),
		'Department' : (department == null) ? '' : department.toString(),
		'Function' : (functions == null) ? '' : functions.toString(),
	};

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : CONTACT_CREATE_LOADING,
		indicator : true
	});

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getContactOData, filterString, callCreateContactOData, errCallback, contactPayload, null);

}

function changeContact(firstName, lastName, tel, email, title, department, functions) {

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : CONTACT_CHANGE_LOADING,
		indicator : true
	});

	contactPayload = {
		'Customer' : selectedCust,
		'ContactNo' : selectedContact,
		'FirstName' : (firstName == null) ? '' : firstName.toString(),
		'LastName' : (lastName == null) ? '' : lastName.toString(),
		'Email' : (email == null) ? '' : email.toString(),
		'Phone' : (tel == null) ? '' : tel.toString(),
		'Title' : (title == null) ? '' : title.toString(),
		'Department' : (department == null) ? '' : department.toString(),
		'Function' : (functions == null) ? '' : functions.toString()
	};

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getContactOData, filterString, callChangeContactOData, errCallback, contactPayload, null);
}

function deleteCustomer() {
	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getSingleCustomerOData, filterString, callDeleteCustomerOData, errCallback, null, selectedCust);
}

function deleteContact() {
	Ext.toast('Deleting the contact...', 1500);

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getContactOData, filterString, callDeleteContactOData, errCallback, null, selectedContact);
}

function createDispute(title, category, contact, referenceDoc, claimAmount, text) {

	text = removeSpecialCharacter(text);

	disputePayload = {
		'CustomerNo' : selectedCust,
		'CaseTitle' : (title == null) ? '' : title.toString(),
		'Category' : (category == null) ? '' : category.toString(),
		'ContactNo' : (contact == null) ? '' : contact.toString(),
		'ReferenceDoc' : (referenceDoc == null) ? '' : referenceDoc.toString(),
		'ClaimAmount' : (claimAmount == null) ? '' : claimAmount.toString(),
		'CaseText' : (text == null) ? '' : text.toString()
	};

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : DISPUTE_CREATE_LOADING,
		indicator : true
	});

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getDisputeOData, filterString, callCreateDisputeOData, errCallback, disputePayload, null);
}

function changeSalesActivity(actDate, actContact, actText, actType, actReason, actOutcome, actVol, actQty, actAmount, actSalesDoc, actOppType) {

	actText = removeSpecialCharacter(actText);

	activityPayload = {
		'ActNo' : selectedSalesAct,
		'CustomerNo' : selectedCust,
		'ContactNo' : (actContact == null) ? '' : actContact.toString(),
		'ToDate' : (actDate == null) ? '' : actDate.toString(),
		'ActText' : (actText == null) ? '' : actText.toString(),
		'ActType' : (actType == null) ? '' : actType.toString(),
		'ActReason' : (actReason == null) ? '' : actReason.toString(),
		'ActOutcome' : (actOutcome == null) ? '' : actOutcome.toString(),
		'Volume' : (actVol == null) ? '0' : actVol.toString(),
		'Quantity' : (actQty == null) ? '0' : actQty.toString(),
		'Amount' : (actAmount == null) ? '0' : actAmount.toString(),
		'SalesDoc' : (actSalesDoc == null) ? '' : actSalesDoc.toString(),
		'OpportunityType' : (actOppType == null) ? '' : actOppType.toString()
	};

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : ACTIVITY_CHANGE_LOADING,
		indicator : true
	});

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getSalesActivityOData, filterString, callChangeSalesActivityOData, errCallback, activityPayload, null);

}

function createSalesActivity(actDate, actContact, actText, actType, actReason, actOutcome, actVol, actQty, actAmount, actSalesDoc, actOppType) {

	actText = removeSpecialCharacter(actText);

	activityPayload = {
		'CustomerNo' : selectedCust,
		'ContactNo' : (actContact == null) ? '' : actContact.toString(),
		'ToDate' : (actDate == null) ? '' : actDate.toString(),
		'ActText' : (actText == null) ? '' : actText.toString(),
		'ActType' : (actType == null) ? '' : actType.toString(),
		'ActReason' : (actReason == null) ? '' : actReason.toString(),
		'ActOutcome' : (actOutcome == null) ? '' : actOutcome.toString(),
		'Volume' : (actVol == null) ? '0' : actVol.toString(),
		'Quantity' : (actQty == null) ? '0' : actQty.toString(),
		'Amount' : (actAmount == null) ? '0' : actAmount.toString(),
		'SalesDoc' : (actSalesDoc == null) ? '' : actSalesDoc.toString(),
		'OpportunityType' : (actOppType == null) ? '' : actOppType.toString()
	};

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : ACTIVITY_CREATE_LOADING,
		indicator : true
	});

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getSalesActivityOData, filterString, callCreateSalesActivityOData, errCallback, activityPayload, null);

}

function refreshConsData() {
	getCustomerCons(selectedCust);
	var consignmentTab = Ext.ComponentQuery.query('consignmentTab')[0];
	consignmentTab.pop(0);
}

function refreshData(successful) {

	// allow to change tab
	isInOrderConfirmationScreen = false;

	if (successful) {
		deleteAllInCart();
		updateCartBadgeText();
		updateCartStore();
		updateCartTotal();
	}
	var cartOrder = Ext.ComponentQuery.query('cartOrder')[0];
	cartOrder.pop();
	orderNumber = null;

	// show createOrder button
	button = Ext.ComponentQuery.query('#createOrderButton');
	if (button.length > 0) {
		button[0].setHidden(true);
	}

	// hide order confirmation
	button = Ext.ComponentQuery.query('#checkoutButton');
	if (button.length > 0) {
		button[0].setHidden(false);
	}

	var cartOrderHeaderDetail = Ext.ComponentQuery.query('cartOrderDetail')[0];
	var allChilds = cartOrderHeaderDetail.getInnerItems();
	for (var i = 0; i < allChilds.length; i++) {
		if (allChilds[i].getItemId() != 'shippingAdr') {
			allChilds[i].setReadOnly(false);
		}
		if (allChilds[i].getItemId() == 'poNumber') {
			allChilds[i].setValue('');
		}
		if (allChilds[i].getItemId() == 'quoteCommentField') {
			allChilds[i].setValue('');
		}
		if (allChilds[i].getItemId() == 'orderCommentField') {
			allChilds[i].setValue('');
		}
		if (allChilds[i].getItemId() == 'delInstructionField') {
			allChilds[i].setValue('');
		}
	}
	mainContainer.unmask();
}

function isP1Customer(status) {
	if (status == 'P1') {
		return 'X';
	} else {
		return '';
	}
}

function clearActivityText() {
	Ext.ComponentQuery.query('#activityCreationTextArea')[0].setValue('');
}

function clearDisputeView() {
	Ext.ComponentQuery.query('#disputeCreationTextArea')[0].setValue('');
	Ext.ComponentQuery.query('#disputeClaimAmount')[0].setValue(0);
	Ext.ComponentQuery.query('#disputeRefDoc')[0].setValue('');
	Ext.ComponentQuery.query('#disputeTitle')[0].setValue('');
}

function customerTabPop() {
	var customerTab = Ext.ComponentQuery.query('customerTab')[0];
	customerTab.pop();
}

function updateRecentCustomerDelete() {
	customerData.items.remove({
		custNo : selectedCust
	});
	selectedCust = '';
}

function updateRecentContactDelete() {
	contactData.items.remove({
		contNo : selectedContact
	});
	availableContact.remove({
		value : selectedContact
	});
	selectedContact = '';
}

function updateRecentContactChange() {
	for (var i = 0; i < contactData.items.length; i++) {
		if (contactData.items[i].contNo == selectedContact) {
			contactData.items[i].firstName = Ext.ComponentQuery.query('#contactChFirstText')[0].getValue();
			contactData.items[i].lastName = Ext.ComponentQuery.query('#contactChLastText')[0].getValue();
			contactData.items[i].email = Ext.ComponentQuery.query('#contactChEmail')[0].getValue();
			contactData.items[i].phone = Ext.ComponentQuery.query('#contactChTel')[0].getValue();
			contactData.items[i].title = Ext.ComponentQuery.query('#contactChTitle')[0].getValue();
			contactData.items[i].functions = Ext.ComponentQuery.query('#contactChFunction')[0].getValue();
			contactData.items[i].department = Ext.ComponentQuery.query('#contactChDepartment')[0].getValue();
			contactData.items[i].contName = contactData.items[i].title + ' ' + contactData.items[i].firstName + ' ' + contactData.items[i].lastName;
			updateContactStore();

			availableContact.remove({
				value : selectedContact
			});
			// update available contacts used in activity and dispute creation
			var contactItem = {};
			contactItem.text = contactData.items[i].contName;
			contactItem.value = contactData.items[i].contNo;
			availableContact.push(contactItem);

		}
	};;
}

// convert SAP date format YYYYMMDD to DD-MM-YYYY
function convertToDMYDate(sapDate) {
	var year = sapDate.substring(0, 4);
	var month = sapDate.substring(4, 6);
	var day = sapDate.substring(6, 8);
	return day + '-' + month + '-' + year;
}

function moveToSelectedCustomer() {
	var moveToIndex;
	var custList = Ext.ComponentQuery.query('customerList')[0];
	var scroller = custList.getScrollable().getScroller();

	customerData.items = customerData.items.sortBy('custName');
	moveToIndex = customerData.items.findIndex({
		custNo : selectedCust
	});
	custList.select(moveToIndex);

	var containerSize = scroller.getContainerSize().y, size = scroller.getSize().y, maxOffset = size - containerSize, offsetTop = custList.getItemMap().map[moveToIndex], offset = (offsetTop > maxOffset) ? maxOffset : offsetTop;

	scroller.scrollTo(0, offset - 15, true);
	if (custList.updatedItems.length > 0 && (!custList.scheduledTasks || custList.scheduledTasks.length === 0)) {
		custList.refreshScroller();
	}
}

function is_email(email) {
	if (email != '') {
		var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return emailReg.test(email);
	} else {
		return true;
	}
}

function removeSpecialCharacter(inText) {
	var outText;
	inText = inText.replace(/"/g, '\'');
	inText = inText.replace(/[`~!^;:]/gi, '');
	inText = inText.replace(/{/g, '\(');
	inText = inText.replace(/}/g, '\)');
	inText = inText.replace(/</g, '\(');
	inText = inText.replace(/>/g, '\)');

	outText = inText;
	return outText;
}

function positionText(functions) {
	return CONTACT_FUNCTION.find({
		value : functions
	}).text;
}

function constructFilter(filters, searchString) {
	var filterString = '?$format=json';
	// var filterString = '';

	if (searchString != null && searchString != '') {
		filterString += '&search=' + searchString;
	}

	for (var i = 0; i < filters.length; i++) {
		// construct filters
		if (filters[i].field != 'skip' && filters[i].field != 'top') {
			if (i != 0) {
				filterString += ' and ';
			} else {
				filterString += '&$filter=';
			}
			if (filters[i].type == 'int') {
				// if value is integer, don't put ' in the filter string
				filterString += filters[i].field + ' eq ' + filters[i].value;
			} else {
				filterString += filters[i].field + ' eq ' + "'" + filters[i].value + "'";
			}
		}

		// construct skip and top
		if (filters[i].field == 'skip' || filters[i].field == 'top') {
			filterString += '&$' + filters[i].field + '=' + filters[i].value;
		}
	};
	return filterString;
}

function getCustomerDetail() {
	if (selectedCust != null) {
		// call R3 BAPI to get list of contacts, disputes and customer address
		Ext.toast('Please wait while loading customer information', 5000);
		getCustomerContactList();
		getCustomerRecentActivity();
		getDisputList();
		getCustomerAddress();
		getCustomerSetting();
		//call customer main view
		var customerTab = Ext.ComponentQuery.query('customerTab')[0];

		customerTab.push({
			xtype : 'customerMain',
			id : 'customerMain',
			title : 'Customer Detail'
		});

	} else {
		Ext.toast('Please select customer before proceeding', 1500);
	}
}

function getShiptoList() {
	filters = [{
		field : 'Customer',
		value : selectedCust,
	}];
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getShiptoOData, filterString, successShiptoListCallback, errCallback, null);

}

function getProductAtpList(materialNo, plant) {

	filters = [{
		field : 'Material',
		value : materialNo,
	}, {
		field : 'Plant',
		value : plant,
	}];

	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getStockAtpOData, filterString, successProductAtpListCallback, errCallback, null);
}

function getProductSalesHistoryList(materialNo, skippedRecords, viewID) {
	productHistoryViewID = viewID;

	filters = [{
		field : 'Customer',
		value : selectedCust,
	}, {
		field : 'Material',
		value : materialNo,
	}, {
		field : 'skip',
		value : skippedRecords,
	}];
	// set skip flag variable
	if (skippedRecords > 0) {
		isSkipProductSalesHistory = true;
	} else {
		isSkipProductSalesHistory = false;
	}
	searchString = '';
	var filterString = constructFilter(filters, searchString);

	callOData(getProductSalesHistoryOData, filterString, successProductSalesHistoryCallback, errCallback, null);
}

function onCustomerKeySearch() {
	var queryString = Ext.ComponentQuery.query('#custSearch')[0].getValue();
	if (selectedSalesOffice == '') {
		var store = Ext.getStore('customer');
		store.clearFilter();

		if (queryString) {
			var thisRegEx = new RegExp(queryString, "i");
			store.filterBy(function(record) {
				if (thisRegEx.test(record.get('custName')) || thisRegEx.test(record.get('custNo'))) {
					return true;
				};
				return false;
			});
		}
	} else {
		var queryLength = queryString.length;
		if (queryLength >= MIN_CHAR_SEARCH) {
			searchString = queryString;
			getCustomerList(selectedSalesOffice);
			searchString = '';
		}
	}
}

function onConsignmentSearch() {
	var queryString = Ext.ComponentQuery.query('#consSearch')[0].getValue();

	var store = Ext.getStore('customerCons');
	store.clearFilter();

	if (queryString) {
		var thisRegEx = new RegExp(queryString, "i");
		store.filterBy(function(record) {
			if (thisRegEx.test(record.get('prodDesc')) || thisRegEx.test(record.get('prodNo'))) {
				return true;
			};
			return false;
		});
	}
}

function onMIProductSearch() {
	var queryString = Ext.ComponentQuery.query('#miProductSearch')[0].getValue();

	var store = Ext.getStore('miProduct');
	store.clearFilter();

	if (queryString) {
		var thisRegEx = new RegExp(queryString, "i");
		store.filterBy(function(record) {
			if (thisRegEx.test(record.get('prodDesc')) || thisRegEx.test(record.get('prodNo'))) {
				return true;
			};
			return false;
		});
	}
}

function getReasonText(miKey, sequence) {
	return miReasonsList.findAll({miKey : miKey, sequence : sequence})[0].text;
}

function getUsedConsignment() {
	var usedConsignment = [];
	var consStk;
	var remainingStk;
	var usedStk;
	var item;
	for (var i = 0; i < customerConsData.items.length; i++) {
		consStk = parseFloat(customerConsData.items[i].conStk);
		remainingStk = parseFloat(customerConsData.items[i].remainingStk);
		if (consStk != remainingStk) {
			usedStk = consStk - remainingStk;
			item = {};
			item = {
				prodNo : customerConsData.items[i].prodNo,
				prodDesc : customerConsData.items[i].prodDesc,
				uom : customerConsData.items[i].uom,
				conStk : customerConsData.items[i].conStk,
				remainingStk : customerConsData.items[i].remainingStk,
				usedStk : usedStk
			};
			usedConsignment.push(item);
		}
	};
	return usedConsignment;
}

function prepareConsignmentItem(usedConsignment) {
	var orderItem = '';
	var temp;
	// convert used consignments to
	//*MATERIAL|USED_QTY|SALES_UNIT|

	for (var i = 0; i < usedConsignment.length; i++) {
		temp = '';
		if (i != 0) {
			temp = '%7C';
		}
		temp += usedConsignment[i].prodNo + '%7C' + usedConsignment[i].usedStk + '%7C' + usedConsignment[i].uom;

		orderItem += temp;
	};

	return orderItem;

}

function prepareConsCreateItem(simulatedItems) {
	var orderItem = '';
	var temp;
	// convert used consignments to
	//*MATERIAL|USED_QTY|SALES_UNIT|NET_PRICE|BATCH|FILLUP_ORDER

	for (var i = 0; i < simulatedItems.items.length; i++) {
		temp = '';
		if (i != 0) {
			temp = '%7C';
		}
		temp += simulatedItems.items[i].prodNo + '%7C' + simulatedItems.items[i].reqQty + '%7C' + simulatedItems.items[i].uom + '%7C' + simulatedItems.items[i].netPrice + '%7C' + simulatedItems.items[i].batch + '%7C' + simulatedItems.items[i].fillupOrder + '%7C' + simulatedItems.items[i].fillupItem;

		orderItem += temp;
	};

	return orderItem;

}

function updateConsTotal(consList) {
	var consTotal = Ext.ComponentQuery.query('#consTotal')[0];
	var consTotalValue = 0;
	for (var i = 0; i < consList.length; i++) {
		consTotalValue += consList[i].netValue;
	}
	consTotal.setValue(number(consTotalValue));
}

var getLocationSuccess = function(position) {
	currentGeoLocation = position.coords.latitude + ', ' + position.coords.longitude;
	var deliveryGeolocation = Ext.ComponentQuery.query('#consConfirmGeo')[0].setValue(currentGeoLocation);
};

// onError Callback receives a PositionError object
//
function getLocationError(error) {
	currentGeoLocation = 'Cannot determine location';
	var deliveryGeolocation = Ext.ComponentQuery.query('#consConfirmGeo')[0].setValue(currentGeoLocation);
}

function processConsOrder(orderList) {

	var signatureValue = Ext.ComponentQuery.query('#signatureField')[0];
	var signatureBase64 = signatureValue.getValue().split(',')[1];
	var consName = "Recipient Name: " + Ext.ComponentQuery.query('#conConfirmName')[0].getValue();
	var consTime = "Delivery Time: " + Ext.ComponentQuery.query('#consConfirmTime')[0].getValue();
	var consGeo = "Geolocation:" + Ext.ComponentQuery.query('#consConfirmGeo')[0].getValue();

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : PROCESSING_CONS_LOADING,
		indicator : true
	});

	filters = [];

	processedConsPayload = {
		'InputOrderList' : orderList,
		'Signature' : signatureBase64,
		'Timestamp' : consTime,
		'Geolocation' : consGeo,
		'Recipient' : consName,
	};

	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getProcessedConsOrderOData, filterString, callProcessedConsOrderOData, errCallback, processedConsPayload, null);

}

function addOrderAttachment(orderNo) {

	var signatureValue = Ext.ComponentQuery.query('#signatureField')[0];
	var signatureBase64 = signatureValue.getValue().split(',')[1];
	var consName = "Recipient Name: " + Ext.ComponentQuery.query('#conConfirmName')[0].getValue();
	var consTime = "Delivery Time: " + Ext.ComponentQuery.query('#consConfirmTime')[0].getValue();
	var consGeo = "Geolocation:" + Ext.ComponentQuery.query('#consConfirmGeo')[0].getValue();

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : ADD_ATTACHMENT_LOADING,
		indicator : true
	});

	attachmentPayload = {
		'OrderNo' : orderNo,
		'Signature' : signatureBase64,
		'Timestamp' : consTime,
		'Geolocation' : consGeo,
		'Recipient' : consName,
		'DocumentType' : 'S',
	};

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getAttachmentOData, filterString, callAddAttachmentOData, errCallback, attachmentPayload, null);

}

function createDelivery(orderNo) {

	var signatureValue = Ext.ComponentQuery.query('#signatureField')[0];
	var signatureBase64 = signatureValue.getValue().split(',')[1];
	var consName = "Recipient Name: " + Ext.ComponentQuery.query('#conConfirmName')[0].getValue();
	var consTime = "Delivery Time: " + Ext.ComponentQuery.query('#consConfirmTime')[0].getValue();
	var consGeo = "Geolocation:" + Ext.ComponentQuery.query('#consConfirmGeo')[0].getValue();
	var consItems = (simulatedConsOrder == null || simulatedConsOrder == '') ? '' : prepareConsCreateItem(simulatedConsOrder);

	if (simulatedConsOrder != null && simulatedConsOrder != '') {
		consItems = consItems.replace(/%7C/g, '\|');
	}

	mainContainer.setMasked({
		xtype : 'loadmask',
		message : PROCESSING_CONS_LOADING,
		indicator : true
	});

	deliveryPayload = {
		'SalesOrderNo' : orderNo,
		'Signature' : signatureBase64,
		'Timestamp' : consTime,
		'Geolocation' : consGeo,
		'Recipient' : consName,
		'inputConsItems' : consItems,
	};

	filters = [];
	searchString = '';
	var filterString = constructFilter(filters, searchString);
	callOData(getDeliveryPGIOData, filterString, callCreateDeliveryOData, errCallback, deliveryPayload, null);
}

function setCustomerConsLabel(custNo, custName) {
	var consCustomerName = Ext.ComponentQuery.query('#consCustomerName')[0];
	consCustomerName.setLabel(custName + ' (#' + custNo + ')');
}
