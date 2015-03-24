Ext.define('SpicersOrder.view.PreviousPurchaseList', {
	extend : 'Ext.List',
	xtype : 'previousPurchaseList',
	config : {
		title : 'Product History',
		flex : 3,
		refreshHeightOnUpdate : true,
		allowDeselect : true,
		itemTpl : [
				'<tpl if="atpQty &lt;= ATP_LOW">',
				'<b><div class="prd_result_name" id="red_no_idx">{prodDesc}</div></b><br></tpl>',
				'<tpl if="atpQty &gt;= ATP_HIGH">',
				'<b><div class="prd_result_name" id="green_no_idx">{prodDesc}</div></b><br></tpl>',
				'<tpl if="atpQty &lt; ATP_HIGH && atpQty &gt; ATP_LOW">',
				'<b><div class="prd_result_name" id="yellow_no_idx">{prodDesc}</div></b><br></tpl>',
				'<table style="width:100%">',
				'<tpl if="isIPad() || isDesktop()">',
				'<tr>',
				'<td style="width:25%" class="prd_result_no">#<b>{prodNo}</b></td>',
				'<td style="width:35%" class="prd_result_lpr_val">Price: <b>{[number(values.custPr)]}/{uom}</b></td>',
				'<td style="width:25%" class="prd_result_atp_val">ATP Qty: <b>{[number(values.atpQty)]}</b></td>',
				'<td style="width:10" class="prd_result_atp_val">Purch. Qty: <b>{[number(values.count)]}</b></td>',
				'</tr>',
				'</tr>',
				'</tpl>',
				'<tpl if="!isIPad() && !isDesktop()">',
				'<tr>',
				'<td style="width:20%" class="prd_result_no">#<b>{prodNo}</b></td>',
				'<td style="width:45%" class="prd_result_lpr_val">Price: <b>{[number(values.custPr)]}/{uom}</b></td>',
				'<td style="width:35%" class="prd_result_atp_val">ATP Qty: <b>{[number(values.atpQty)]}</b></td>',
				'</tr>',
				'<tr>',
				'<td></td>',
				'<td></td>',
				'<td class="prd_result_atp_val">Purch. Qty: <b>{[number(values.count)]}</b></td>',
				'</tr>', '</tpl>', '</table>'],
		store : {
			type : 'previousPurchase'
		}
	}
})