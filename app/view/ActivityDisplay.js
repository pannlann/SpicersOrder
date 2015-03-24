Ext.define('SpicersOrder.view.ActivityDisplay', {
	extend : 'Ext.form.Panel',
	xtype : 'activityDisplay',
	config : {
		padding : '0 5 0 5',
		title : 'Activity Text',
		scrollable : true,
		items : [{
			xtype : 'textareafield',
			itemId : 'activityDisplayTextArea',
			maxRows : 70,
			maxLength: 1500,
			readOnly : true,
		}]
		// }]
	}
});
