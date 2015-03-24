Ext.define('SpicersOrder.view.OrderMessageList', {
    extend : 'Ext.List',
    xtype : 'orderMessageList',
    config : {
        title : 'Messages',
        grouped : true,
        scrollable : false,
        disableSelection: true,
        variableHeight : false,
        itemHeight : MESSAGE_HEIGHT,
        itemTpl : [
        				'<tpl if="messageType == ERROR_MESSAGE">',
        				'<div class="order_message" id="red_no_idx">{message}</div></tpl>',
                        '<tpl if="messageType == WARNING_MESSAGE">',
                        '<div class="order_message" id="yellow_no_idx">{message}</div></tpl>',
        ],
        store : {
            type : 'message'
        }
    }
})