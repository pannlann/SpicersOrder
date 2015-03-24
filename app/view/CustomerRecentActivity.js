Ext.define('SpicersOrder.view.CustomerRecentActivity', {
	extend : 'Ext.List',
	xtype : 'customerRecentActivity',
	config : {
		grouped : true,
//		indexBar : true,
		flex : 3,
		emptyText : 'No recent activity for this customer.',
		refreshHeightOnUpdate : false,
		itemTpl : [
	        '<tpl if="actType == SALES_OPPORTUNITY_TYPE">',		
				'<table style="table-layout: fixed; width: 100%; border-right-width: 10px; border-right-style: solid; border-right-color: green;">',
			'</tpl>',
	        '<tpl if="actType != SALES_OPPORTUNITY_TYPE">',		
				'<table style="table-layout: fixed; width: 100%;">',
			'</tpl>',
				'<tr>',
				'<td><div class="cont_name"><b>{contName}</b></td>',
				'</tr>',
				'<tr>',
		        '<td><div class="cont_no">Type: <b>{actType}</td>',
				'<td><div class="cont_position">Created By: <b>{createdBy}</b></td>',
				'</tr>',
				'<tr>',
				'<td><div class="cont_phone">From Date: {[convertToDMYDate(values.fromDate)]}</td>',
				'<td><div class="cont_email">To Date: {[convertToDMYDate(values.toDate)]}</td>',
				'</tr>',
				'</table>',
				'<table style="table-layout: fixed; width: 100%;">',
				'<tr>',
				'<td>',
				'<textarea rows="4" readonly="true" cols="150"; style="width: 100%;font-size: 60%;";>',
				'{text}',
				'</textarea>',
				'</td>',
				'</tr>',				
				'</table>',
				],
		store : {
			type : 'activity'
		}
	}
});