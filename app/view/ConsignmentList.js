Ext.define('SpicersOrder.view.ConsignmentList', {
	extend : 'Ext.List',
	xtype : 'consignmentList',
	id : 'consignmentList',
	config : {
		title : 'Consignment',
		flex : 3,
        refreshHeightOnUpdate : true,
        variableHeights : true,
		// allowDeselect : true,
		itemHeight : 70,
		emptyText : 'No consignments at selected customer',
		cls : 'myList',
		itemTpl : [
				'<tpl if="fillupOrderFlag == \'X\'">',
					'<table style="table-layout: fixed; width: 100%;">',
				'</tpl>',	
				'<tpl if="fillupOrderFlag == \'\'">',
					'<table style="table-layout: fixed; width: 100%; border-left-width: 3px; border-left-style: solid; border-left-color: red;">',
				'</tpl>',	
				'<tr>',
				'<td style="width:75%"><div class="cons_prd"><b>{prodDesc}</b></div></td>',
				'</tr>',
				'</table>',		
				'<table style="table-layout: fixed; width: 100%;">',
				'<tr>',
				'<td class="cons_no">#{prodNo}</td>',
				'<tpl if="fillupOrderFlag == \'X\'">',
					'<td class="cons_input_td">Cnt Stk <input onchange="changeConsQty({[values.prodNo]},this.value)" class="cons_input" type="number"></input></td>',
				'</tpl>',	
				'<tpl if="fillupOrderFlag == \'\'">',
					'<td class="cons_input_td">Cnt Stk <input onchange="changeConsQty({[values.prodNo]},this.value)" class="cons_input" type="number" readonly></input></td>',
				'</tpl>',	
				'<td class="cons_total"> / {conStk} {uom}</td>',
				'</tr>',
				'</table>',
				],
		store : {
			type : 'customerCons'
		}
	}
});