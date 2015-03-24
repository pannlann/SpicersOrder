Ext.define('SpicersOrder.view.DisputeCreation', {
	extend : 'Ext.form.Panel',
	xtype : 'disputeCreation',
	config : {
		padding : '0 5 0 5',
		fullscreen : true,
		items : [{
			xtype : 'fieldset',
			title : 'New Dispute Case',
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
				xtype : 'textfield',
				label : 'Title',
				itemId : 'disputeTitle',
				placeHolder : 'Please enter case title',
				maxLength : 255,
				autoCapitalize : true,
			}, {
				xtype : 'selectfield',
				label : 'Category',
				itemId : 'disputeTypeSelect',
				usePicker : false,
				options : DISPUTE_CATEGORY,
			}, {
				xtype : 'selectfield',
				label : 'Contact',
				itemId : 'availableDisputeSelect',
			}, {
				xtype : 'textfield',
				label : 'Ref. Doc.',
				itemId : 'disputeRefDoc',
				placeHolder : 'Please enter any reference documents',
				maxLength : 20,
			}, {
				xtype : 'numberfield',
				label : 'Claim Amount',
				itemId : 'disputeClaimAmount',
				value : 0,
			}, {
				xtype : 'textareafield',
				itemId : 'disputeCreationTextArea',
				label : 'Text',
				placeHolder : 'Please enter as much information as possible about a case in this area.',
				maxRows : 10,
				maxLength : 1500,
				autoCapitalize : true,
			}, {
				xtype : 'button',
				itemId : 'disputeCreationButton',
				text : 'Submit Case',
				ui : 'action'
			}]
		}]
		// }]
	}
});
