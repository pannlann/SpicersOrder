Ext.define('SpicersOrder.view.CustomerList', {
	extend : 'Ext.List',
	xtype : 'customerList',
	config : {
		title : 'Customers',
		grouped : true,
		indexBar : true,
		flex : 3,
		refreshHeightOnUpdate : true,
		variableHeights : true,
		itemHeight : customerListItemHeight,
		itemTpl : [
				'<tpl if="creditAvailable &lt;= CREDIT_LOW  || creditBlock == CREDIT_BLOCK">',
				'<b><div class="cust_list_name" id="red">{custName}</div></b><br></tpl>',
				'<tpl if="creditUsed &lt;= CREDIT_USED_HIGH && creditAvailable &gt; CREDIT_LOW && creditBlock == CREDIT_NOT_BLOCK">',
				'<b><div class="cust_list_name" id="green">{custName}</div></b><br></tpl>',
				'<tpl if="creditUsed &gt; CREDIT_USED_HIGH && creditAvailable &gt; CREDIT_LOW && creditBlock == CREDIT_NOT_BLOCK">',
				'<b><div class="cust_list_name" id="yellow">{custName}</div></b><br></tpl>',
				'<div class="cust_list_no"># {custNo}</div>',
				'<div class="cust_list_crlim_text">Cr. Lmt: </div>',
				'<div class="cust_list_crlim_val"><b>{[number(values.creditLimit)]}</b></div>',
				'<div class="cust_list_cravl_val"><b>{[number(values.creditAvailable)]}</b></div>',
				'<div class="cust_list_cravl_text">Cr. Avl: </div>',
				

				],
		store : {
			type : 'customer'
		}
	}
});