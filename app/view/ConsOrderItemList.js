Ext.define('SpicersOrder.view.ConsOrderItemList', {
	extend : 'Ext.List',
	xtype : 'consOrderItemList',
	config : {
		title : 'Cons Order',
		flex : 3,
		scrollable : true,
        grouped : true,
        disableSelection: true,
        variableHeight : false,
		itemTpl : [
                '<b><div class="order_item_name">{prodDesc}</div></b><br>',
                '<table style="width:100%">',
                '<tr>',
                '<td style="width:20%" class="order_item">#<b>{prodNo}</b></td>',
                '<td style="width:25%" class="order_item">Price: <b>${[number(values.netPrice)]}</b></td>',
                '<td style="width:33%" class="order_item">Used Qty: <b>{[number(values.reqQty)]} {uom}</b></td>',
                '<td style="width:22%" class="order_item">Net: <b>${[number(values.netValue)]}</b></td>',
                '</tr>',
				// '<tpl if="!isIPad() && !isDesktop()">',
                // '<tr>',
                // '<td style="width:30%" class="order_item">Price: <b>${netPrice}</b></td>',
                // '<td style="width:40%" class="order_item">Used Qty: <b>{[number(values.reqQty)]} {uom}</b></td>',
                // '<td style="width:30%" class="order_item">Net: <b>${[number(values.netValue)]}</b></td>',
                // '</tr>',
                // '<tr>',
                // '<td class="order_item">#<b>{prodNo}</b></td>',
                // '<td class="order_item">Ref: <b>{fillupOrder}</b></td>',
                // '<td></td>',
                // '</tr>', 
                // '</tpl>', 
                '</table>'],
		store : {
			type : 'consorderitem'
		}
	}
});