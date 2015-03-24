Ext.define('SpicersOrder.view.MICreate', {
	extend : 'Ext.form.Panel',
	xtype : 'miCreate',
	itemId : 'miCreate',
	config : {
		padding : '0 5 0 5',
		title : 'Create MI',
		items : [{
			xtype : 'fieldset',
			title : 'Market Intelligence',
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
				itemId : 'miProductText',
				readOnly : true,
			}, {
				xtype : 'textfield',
				itemId : 'miCustomerText',
				readOnly : true,
			}, {
				xtype : 'numberfield',
				itemId : 'futureMthSalesMI',
				label : 'Future Mthly',
				labelWidth : '50%'
			}, {
				xtype : 'selectfield',
				label : 'Reasons',
				itemId : 'miReasonsSelect',
				required : true,
				usePicker : true,
				labelWidth : '50%'
			}, {
				xtype : 'datepickerfield',
				itemId : 'miFromDate',
				label : 'From Date',
				dateFormat : 'd/m/Y',
				// value : getDefaultMIFromDate(),
				picker : {
					yearFrom : parseInt(getCurrentYear()),
					yearTo : parseInt(getMaxYear())
				},
				labelWidth : '50%'
			}, {
				xtype : 'datepickerfield',
				itemId : 'miToDate',
				label : 'To Date',
				dateFormat : 'd/m/Y',
				// value : getDefaultMIToDate(),
				picker : {
					yearFrom : parseInt(getCurrentYear()),
					yearTo : parseInt(getMaxYear())
				},
				labelWidth : '50%'
			}, {
				xtype : 'checkboxfield',
				itemId : 'miRemoveCheckbox',
				label : 'Don\'t show',
				value : 'X',
				labelWidth : '50%',
				hidden : true,
			}, {
				xtype : 'textareafield',
				itemId : 'miDetail',
				label : 'Detail',
				autoCapitalize : true,
				maxRows : 2,
				maxLength : 72,
				labelWidth : '50%'
			}, {
				xtype : 'button',
				text : 'Submit',
				itemId : 'miSubmitButton',
				ui : 'confirm',
				align : 'right'
			}],
		}]
	}
});
