Ext.define('SpicersOrder.view.CustomerCreate', {
	extend : 'Ext.form.Panel',
	xtype : 'customerCreate',
	config : {
		padding : '0 5 0 5',
		title : 'Create Customer',
		items : [{
			xtype : 'fieldset',
			title : 'Customer',
			defaults : {
				style : 'border-width: 2px 1px 0px 1px; border-style: groove; font-size: 80%;',
				labelWidth : '40%',
				listeners : {
					focus : function(comp, e, eopts) {
						if (Ext.os.name == 'WindowsPhone') {
							var ost = comp.element.dom.offsetTop;
							this.getParent().getParent().getScrollable().getScroller().scrollTo(0, ost);
						}
					}
				}
			},
			// defaults : {
			// labelWidth : fieldLabelWidth,
			// usePicker : false,
			// },
			items : [{
				xtype : 'textfield',
				label : 'Detail',
				itemId : 'customerCrName1',
				required : true,
				maxLength : 35,
				autoCapitalize : true,
			}, {
				xtype : 'textfield',
				label : ' ',
				itemId : 'customerCrName2',
				maxLength : 35,
				autoCapitalize : true,
			}]
		}, {
			xtype : 'fieldset',
			title : 'Street',
			defaults : {
				style : 'border-width: 2px 1px 0px 1px; border-style: groove; font-size: 80%;',
				labelWidth : '40%',
				autoCapitalize : true,
			},
			// defaults : {
			// labelWidth : fieldLabelWidth,
			// usePicker : false,
			// },
			items : [{
				xtype : 'textfield',
				label : 'Street number',
				itemId : 'customerCrStreetNumber',
				required : true,
				maxLength : 40,
				autoCapitalize : true,
			}, {
				xtype : 'textfield',
				label : 'Suburb',
				itemId : 'customerCrSuburb',
				required : true,
				maxLength : 35,
				autoCapitalize : true,
			}, {
				xtype : 'numberfield',
				label : 'Postcode',
				itemId : 'customerCrPostcode',
				required : true,
				maxLength : 10,
			}, {
				xtype : 'selectfield',
				label : 'Region',
				itemId : 'customerCrRegion',
				required : true,
				usePicker : false,
				options : REGION_LIST,
			}]
		}, {
			xtype : 'fieldset',
			title : 'Communication',
			defaults : {
				style : 'border-width: 2px 1px 0px 1px; border-style: groove; font-size: 80%;',
				labelWidth : '40%',
			},
			items : [{
				xtype : 'textfield',
				label : 'Email',
				itemId : 'customerCrEmail',
				maxLength : 50,
			}, {
				xtype : 'textfield',
				label : 'Tel',
				itemId : 'customerCrTelephone',
				required : true,
				maxLength : 30,
			}, {
				xtype : 'textfield',
				label : 'Fax',
				itemId : 'customerCrFax',
				maxLength : 30,
			}]
		}, {
			xtype : 'button',
			itemId : 'customerCreateButton',
			text : 'Create',
			ui : 'action'
		}]
		// }]
	}
});
