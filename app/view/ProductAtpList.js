Ext.define('SpicersOrder.view.ProductAtpList', {
    extend : 'Ext.List',
    xtype : 'productAtpList',
    config : {
        title : 'ATP List',
        scrollable : true,
		grouped : true,
		emptyText : 'No future stock arriving.',
        disableSelection: true,
        itemTpl : [
		'<table style="width:100%">',
			'<tr>',
				'<td style="width:50%"><div class="atp_list_text">Date: <b>{[convertToDMYDate(values.date)]}</b></div></td>',
				'<td style="width:50%"><div class="atp_list_text">Atp Qty: <b>{[number(values.atpQty)]}</b></div></td>',
			'</tr>',
		'</table>'
		],
    }
});
