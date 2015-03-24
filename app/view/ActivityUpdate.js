Ext.define('SpicersOrder.view.ActivityUpdate', {
	extend : 'Ext.form.Panel',
	xtype : 'activityUpdate',
	config : {
		padding : '0 5 0 5',
		fullscreen : true,
		items : [{
			xtype : 'fieldset',
			title : 'Update Activity',
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
			items : [{
				xtype : 'selectfield',
				label : 'Type',
				itemId : 'updateActivityTypeSelect',
				options : ACTIVITY_TYPE,
				usePicker : false,
				readOnly : true,
			}, {
				xtype : 'selectfield',
				label : 'Sub-Type',
				itemId : 'updateOpportunityTypeSelect',
				usePicker : false,
			}, {
				xtype : 'datepickerfield',
				label : 'Date',
				itemId : 'updateActivityDate',
				value : new Date(),
				dateFormat : 'd/m/Y',
				picker : {
					yearFrom : parseInt(getCurrentYear()),
					yearTo : parseInt(getMaxYear())
				},
			}, {
				xtype : 'selectfield',
				label : 'Contact',
				itemId : 'updateAvailableContactSelect'
			}, {
				xtype : 'selectfield',
				label : 'Reason',
				itemId : 'updateActivityReasonSelect',
				usePicker : false,
				options : ACTIVITY_REASON
			}, {
				xtype : 'selectfield',
				label : 'Outcome',
				itemId : 'updateActivityOutcomeSelect',
				usePicker : false,
				options : ACTIVITY_OUTCOME
			}, {
				xtype : 'numberfield',
				label : 'Volume',
				itemId : 'updateVolOpportunity',
				value : 0,
				hidden : true
			}, {
				xtype : 'numberfield',
				label : 'Quantity',
				itemId : 'updateQtyOpportunity',
				value : 0,
				hidden : true
			}, {
				xtype : 'numberfield',
				label : 'Amount',
				itemId : 'updateAmountOpportunity',
				value : 0,
				hidden : true
			}, {
				xtype : 'numberfield',
				label : 'Sales Doc',
				itemId : 'updateSalesDocNo',
				hidden : true
			}, {
				xtype : 'textareafield',
				itemId : 'updateActivityTextArea',
				label : 'Text',
				autoCapitalize : true,
				maxRows : 10,
				maxLength : 1500
			}, {
				xtype : 'button',
				itemId : 'updateActivityButton',
				text : 'Update Activity',
				ui : 'action'
			}]
		}]
		// }]
	}
});
