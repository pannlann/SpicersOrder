// product description screen to add product to favorite and cart
Ext.define('SpicersOrder.view.CustomerDetail', {
	extend : 'Ext.Panel',
	xtype : 'customerDetail',
	config : {
		style : 'background-color:rgb(238, 238, 238);',
		// scrollable : false,
		defaults : {
			style : 'border-width: 1px 0px 0px 0px;border-style: groove;'
		},
		tpl : [
				'<div class="prd_desc_header">Summary</div>',
				'<div class="prd_desc_product_desc"><b>{custName}</b></div>',
				'<div class="prd_desc_uom">Contact no: <a href="tel:{telNo}"><b>{telNo}</b></a></div>',
				'<div class="prd_desc_product_code">Customer code: <b>{custNo}</b></div>',
				'<div class="prd_desc_cost">Address: <a href="maps:q={custAddr}"><b>{custAddr}</b></a></div>',
				'<div class="prd_desc_cost">Assigned Reps: <b>{assignedReps}</b></div>',
				'<div class="prd_desc_header"">Credit</div>',
				'<div class="prd_desc_cost">Block: <b>{creditBlock}</b></div>',
				'<div class="prd_desc_cust_price">Available: <b>{[number(values.creditAvailable)]}</b></div>',
				'<div class="prd_desc_list_price">Limit: <b>{[number(values.creditLimit)]}</b></div>',
				'<div class="prd_desc_header"">Priority One</div>',
				'<div class="prd_desc_cust_purch">Available Points: <b>{[number(values.p1Pts)]}</b></div>',
				'<div class="prd_desc_obs">P1 Customer: <b>{[isP1Customer(values.p1Status)]}</b></div>',
				]
	}
});
