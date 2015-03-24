Ext.define('SpicersOrder.resource.SortPicker', {
			extend : 'Ext.Picker',
			xtype : 'sortPicker',
			config : {
				doneButton : false,
				slots : [{
							name : 'sortBy',
							title : 'Sort By',
							data : SORT_BY,
							text : 'Sort By'
						}]
			}
		});
