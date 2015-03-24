Ext.define('SpicersOrder.view.MIReasonDisplay', {
	extend : 'Ext.Panel',
	xtype : 'miReasonDisplay',
	config : {
		draggable : true,
		floating : true,
		hideOnMaskTap : true,
		modal : true,
		width : '95%',
		top : '15%',
		hidden : true,
		items : [{
			xtype : 'titlebar',
			docked : 'top',
			title : 'Reason',
			items : [{
				xtype : 'button',
				text : 'Back',
				itemId : 'miReasonDisplayButton',
				ui : 'action',
				align : 'left'
			}]
		}, {
			xtype : 'fieldset',
			items : [{
				xtype : 'textfield',
				itemId : 'miDisplayReason',
				readOnly : true,
				labelWidth : '50%'
			}, {
				xtype : 'textareafield',
				itemId : 'miDisplayDetail',
				label : 'Detail',
				readOnly : true,
				labelWidth : '50%'
			}],
		}]
	}
});
