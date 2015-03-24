Ext.define('SpicersOrder.view.CustomerContact', {
	extend : 'Ext.List',
	xtype : 'customerContact',
	config : {
		title : 'Contacts',
		grouped : true,
//		indexBar : true,
		emptyText : 'No contact for this customer.',
		flex : 3,
		disableSelection : true,
		refreshHeightOnUpdate : false,
		itemTpl : [
				'<table style="table-layout: fixed; width: 100%;">',
				'<tr>',
				'<td style="width:80%"><div class="cont_name"><b>{contName}</b></div></td>',
				'<td style="width:10%"><div class="contact_edit"></div></td>',
				'<td style="width:10%"><div class="contact_delete"></div></td>',
				'</tr>',
				'</table>',
				'<table style="table-layout: fixed; width: 100%;">',
				'<tr>',
		        '<td><div class="cont_no"># <b>{contNo}</b></div></td>',
				'<td><div class="cont_position">Position: <b>{[positionText(values.functions)]}</b></div></td>',
				'</tr>',
				'<tr>',
				'<td><div class="cont_phone">Contact No: <a  class="hold" href="tel:{phone}">{phone}</a></div></td>',
				'<td><div class="cont_email"><a class="hold" href="mailto:{email}">{email}</a></div></td>',
				'</tr>',
				'</table>',
				],
		store : {
			type : 'contact'
		}
	}
});