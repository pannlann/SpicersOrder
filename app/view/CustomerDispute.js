Ext.define('SpicersOrder.view.CustomerDispute', {
	extend : 'Ext.List',
	xtype : 'customerDispute',
	config : {
		grouped : true,
//		indexBar : true,
		flex : 3,
		emptyText : 'No dispute for this customer.',
		refreshHeightOnUpdate : false,
		itemTpl : [
				'<table style="table-layout: fixed; width: 100%;">',
				'<tr style="width: 100%;>',
				'<td><div class="cont_name">{title}</td>',
				'</tr>',
				'<tr>',
		        '<td><div class="cont_no">Case# <b>{caseNo}</b></td>',
				'<td><div class="cont_position">Created By: <b>{createdBy}</b></td>',
				'</tr>',
				'<tr>',
				'<td><div class="cont_phone">Status: {status}</td>',
				'</tr>',
				'</table>',
				],
		store : {
			type : 'dispute'
		}
	}
});