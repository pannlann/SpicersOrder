Ext.define('SpicersOrder.view.CustomerSettingChange', {
	extend : 'Ext.form.Panel',
	xtype : 'customerSettingChange',
	config : {
		padding : '0 5 0 5',
		title : 'Change Customer Setting',
		items : [{
			xtype : 'fieldset',
			title : 'Alert when last contact exceeded (days)',
			defaults : {
				labelWidth : '70%',
			},
			items : [{
				xtype : 'numberfield',
				label : 'All Order',
				itemId : 'settingAllOrder',
				minValue : 0,
			}, {
				xtype : 'numberfield',
				label : 'Stock Order',
				itemId : 'settingStkOrder',
				minValue : 0,
			}, {
				xtype : 'numberfield',
				label : 'Quote',
				itemId : 'settingQuote',
				minValue : 0,
			}, {
				xtype : 'numberfield',
				label : 'Indent Order',
				itemId : 'settingIndOrder',
				minValue : 0,
			}, {
				xtype : 'numberfield',
				label : 'Consignment Order',
				itemId : 'settingConOrder',
				minValue : 0,
			}, {
				xtype : 'numberfield',
				label : 'Sales Activity',
				itemId : 'settingActivity',
				minValue : 0,
			}]
		}, {
			xtype : 'button',
			itemId : 'customerChangeSettingButton',
			text : 'Change',
			ui : 'action'
		}]
	}
});
