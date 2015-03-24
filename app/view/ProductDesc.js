// product description screen to add product to favorite and cart
Ext.define('SpicersOrder.view.ProductDesc', {
	extend : 'Ext.Panel',
	xtype : 'productDesc',
	config : {
		style : 'background-color:rgb(238, 238, 238);',
		scrollable : true,
		defaults : {
			style : 'border-width: 1px 0px 0px 0px;border-style: groove; font-size: 80%;'
		},
		// plugins : [{
		// xtype : 'pullRefreshPanel',
		// pullRefreshText : 'Refresh customer price!',
		// lastUpdatedText : '',
		// refreshFn : function() {
		// refreshPanel(this);
		// }
		// }],
		items : [{
					xtype : 'textfield',
					docked : 'bottom',
					name : 'jobNumber',
					itemId : 'jobNumber',
					label : 'Job Number',
					placeHolder : 'End customer ref no',
					labelWidth : '50%'
				}, {
					xtype : 'numberfield',
					docked : 'bottom',
					itemId : 'manualPr',
					name : 'manualPr',
					labelWidth : '50%'
				}, {
					xtype : 'numberfield',
					docked : 'bottom',
					itemId : 'orderQty',
					name : 'orderQty',
					minValue : 0,
					value : 1,
					labelWidth : '50%'
				}, {
					xtype : 'button',
					itemId : 'addMIButton',
					docked : 'bottom',
					text : 'Add to MI request',
					ui : 'action',
					align : 'right',
					// hidden : true
				}
		],
		tpl : [
				'<div class="prd_desc_header">Product summary</div>',
				'<div class="prd_desc_product_desc"><b>{prodDesc}</b></div>',
				'<div class="prd_desc_uom">UoM: <b>{uom}</b></div>',
				'<div class="prd_desc_product_code">Product Code: <b>{prodNo}</b></div>',
				'<div class="prd_desc_header"">Prices</div>',
				'<div class="prd_desc_cost">Cost: <b>{[number(values.cost)]}</b></div>',
				'<div class="prd_desc_cust_price">Customer Price: <b>{[number(values.custPr)]}</b></div>',
				'<div class="prd_desc_list_price">List Price: <b>{[number(values.listPr)]}</b></div>',
				'<div class="prd_desc_header"">Stock</div>',
				'<table style="width:100%">',
				'<tr>',
				'<td style="width:50%"><div class="prd_desc_stock">Stock: <b>{[number(values.stock)]}</b></div></td>',
				'<td style="width:50%"><div class="prd_desc_atp2">ATP2: <b>{[number(values.atp2Qty)]}</b></div></td>',
				'</tr>',
				'<tr>',
				'<td style="width:50%"><div class="prd_desc_atp">ATP: <b>{[number(values.atpQty)]}</b></div></td>',
				'<td style="width:50%"><div class="prd_desc_atp5">ATP5: <b>{[number(values.atp5Qty)]}</b></div></td>',
				'</tr>',
				'</table>',
				'<div class="prd_desc_header"">Conversions</div>',
				'<div class="prd_desc_cost">Thousands / Pal: <b>{[number(values.thsPerPal)]}</b></div>',
				'<div class="prd_desc_cust_price">KG / Thousand: <b>{[number(values.kgPerThs)]}</b></div>',
				'<div class="prd_desc_list_price">Sheets / Pack: <b>{[number(values.eaPerPk)]}</b></div>',
				'<div class="prd_desc_header"">Others</div>',
				'<div class="prd_desc_message">Message: <b>{message}</b></div>',
				'<div class="prd_desc_cust_purch">Customer Purch.: <b>{isCustPurch}</b></div>',
				'<div class="prd_desc_obs">Obsolete / Aged: <b>{isObs}</b></div>']
	}
});
