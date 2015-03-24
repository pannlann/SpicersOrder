Ext.define('SpicersOrder.view.OrderItemList', {
	extend : 'Ext.List',
	xtype : 'orderItemList',
	config : {
		title : 'Order',
        scrollable : false,
        grouped : true,
        disableSelection: true,
        variableHeight : false,
		itemTpl : [
                '<b><div class="order_item_name">{prodDesc}</div></b><br>',
                '<table style="width:100%">',
				'<tpl if="isIPad() || isDesktop()">',
                '<tr>',
                '<td style="width:20%" class="order_item">Item: <b>{item}</b></td>',
                '<td style="width:20%" class="order_item">Product: <b>{prod}</b></td>',
                '<td style="width:20%" class="order_item">Plant: <b>{plant}</b></td>',
                '<td style="width:20%" class="order_item">Qty: <b>{[number(values.orderQty)]} {uom}</b></td>',
                '<td style="width:20%" class="order_item">Net: <b>{[number(values.netValue)]} {currency}</b></td>',
                '</tr>',
                '</tpl>',
				'<tpl if="!isIPad() && !isDesktop()">',
                '<tr>',
                '<td style="width:35%" class="order_item">Item: <b>{item}</b></td>',
                '<td style="width:40%" class="order_item">Prd: <b>{prod}</b></td>',
                '<td style="width:25%" class="order_item">Plant: <b>{plant}</b></td>',
                '</tr>',
                '<tr>',
                '<td class="order_item">Qty: <b>{[number(values.orderQty)]} {uom}</b></td>',
                '<td class="order_item">Net: <b>{[number(values.netValue)]} {currency}</b></td>',
                '<td></td>',
                '</tr>', '</tpl>', '</table>'],
		store : {
			type : 'orderitem'
		}
	}
})