Ext.define('SpicersOrder.view.Consignment', {
	extend : 'Ext.NavigationView',
	xtype : 'consignmentTab',
	config : {
		itemId : 'consignmentTab',
		title : 'Consignment',
		iconCls : 'list',
		items : [{
			xtype : 'consignmentContainer'
		}]
	}
}); 