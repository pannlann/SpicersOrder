Ext.define('SpicersOrder.view.CartList', {
	extend : 'Ext.List',
	xtype : 'cartList',
	id : 'cartList',
	config : {
		title : 'Cart',
		flex : 3,
        refreshHeightOnUpdate : true,
        variableHeights : true,
		// allowDeselect : true,
		itemHeight : 70,
		cls : 'myList',
		itemTpl : [
				'<table style="table-layout: fixed; width: 100%;">',
				'<tr>',
				'<td style="width:75%"><div class="cart_product_desc"><b>{prodDesc}</b></div></td>',
				'<tpl if="orderQty &lt;= atpQty"><td style="width:5%" id="green_cart"></td></tpl>',
				'<tpl if="atpQty &gt; ATP_LOW && orderQty &gt; atpQty"><td style="width:5%" id="yellow_cart"></td></tpl>',
				'<tpl if="atpQty &lt;= ATP_LOW"><td style="width:5%" id="red_cart"></td></tpl>',
				'<td style="width:20%"><input onchange="changeCartOrderQty({[values.prodNo]},this.value)" class="cart_input" type="number" value="{orderQty}"></input></td>',
				'</tr>',
				'</table>',
				'<div class="cart_no"># {prodNo}</div>',
				'<tpl if="manualPr &gt; 0"><div class="cust_list_crlim_text">${manualPr}/{uom} </div></tpl>',
				'<tpl if="manualPr &lt;= 0"><div class="cust_list_crlim_text">${custPr}/{uom} </div></tpl>'],
		store : {
			type : 'cart'
		}
	}
});