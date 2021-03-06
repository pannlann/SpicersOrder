Ext.define('SpicersOrder.view.CustomerList', {
	extend : 'Ext.List',
	xtype : 'customerList',
	config : {
		title : 'Customers',
		// grouped : true,
		allowDeselect : true,
		flex : 3,
		refreshHeightOnUpdate : true,
		variableHeights : true,
		// itemHeight : customerListItemHeight,
		itemTpl : [
				'<tpl if="( creditAvailable &lt;= CREDIT_LOW  || creditBlock == CREDIT_BLOCK ) && lastContactFlag != \'X\'">',
				'<b><div class="cust_list_name" id="block_no_idx">{custName}</div></b><br></tpl>',
				'<tpl if="( creditAvailable &lt;= CREDIT_LOW  || creditBlock == CREDIT_BLOCK ) && lastContactFlag == \'X\'">',
				'<b><div class="cust_list_name" id="block_phone_no_idx">{custName}</div></b><br></tpl>',
				'<tpl if="( creditAvailable &gt; CREDIT_LOW  && creditBlock != CREDIT_BLOCK )  && lastContactFlag == \'X\'">',
				'<b><div class="cust_list_name"  id="phone_no_idx">{custName}</div></b><br></tpl>',
				'<tpl if="( creditAvailable &gt; CREDIT_LOW  && creditBlock != CREDIT_BLOCK )  && lastContactFlag != \'X\'">',
				'<b><div class="cust_list_name">{custName}</div></b><br></tpl>',
				'<div class="cust_list_no"># {custNo}</div>',
				'<div class="cust_list_crlim_text">Credit: <b>{[number(values.creditAvailable, true)]}</b> / <b>{[number(values.creditLimit, true)]}</b></div>',
				'<tpl if="openOpportunity &gt; 0">',
				'<div class="cust_list_cravl_text" id="green_no_idx">Open Opp: <b>{openOpportunity}</b></div>',
				'</tpl>',
				'<table style="width:100%">',
				'<tr>',
				'<td style="width:28%">',				
				'<div class="cust_general_text">Last Act: <b>{daysLastAct}</b></div>',
				'</td>',
				'<td style="width:44%">',				
				'<div class="cust_general_text">Last Ord: <b>{daysLastOrder}</b></div>',
				'</td>',
				'<td style="width:28%">',				
				'<div class="cust_general_text">Last Quo: <b>{daysLastQuote}</b></div>',
				'</td>',
				'</tr>',
				'</table>',		
				'<table style="width:100%">',
				'<tr>',
				'<td>',				
				'<div class="cust_general_text">Last 3 month revenue: <b>${[number(values.salesMtd, true)]} | ${[number(values.salesM01, true)]} | ${[number(values.salesM02, true)]}</b></div>',
				'</td>',
				'</tr>',
				'</table>',		
				],
		store : {
			type : 'customer'
		}
	}
});