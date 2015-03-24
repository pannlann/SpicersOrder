Ext.define('SpicersOrder.view.Credentials', {
	extend : 'Ext.Panel',
	xtype : 'credentialScreen',
	config : {
		// draggable : true,
		floating : true,
		hideOnMaskTap : false,
		modal : true,
		width : '100%',
		top : '20%',
		hidden : true,
		defaults : {
			style : 'font-size: 100%'
		},
		items : [{
			xtype : 'titlebar',
			docked : 'top',
			title : 'Credentials',
			items : [{
				xtype : 'button',
				text : 'Login',
				itemId : 'loginButton',
				ui : 'action',
				align : 'right'
			}]
		}, {
			xtype : 'textfield',
			label : 'SAP Username',
			itemId : 'userIdCredential',
			autoComplete : false,
			autoCorrect : false,
			labelWidth : '45%',
		}, {
			xtype : 'passwordfield',
			label : 'Password',
			itemId : 'passwordCredential',
			labelWidth : '45%',
			// placeHolder : 'SAP password'
		}]
	}
}); 