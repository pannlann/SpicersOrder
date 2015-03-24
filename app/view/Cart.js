Ext.define('SpicersOrder.view.Cart', {
    extend : 'Ext.Carousel',
    xtype : 'cartTab',
    config : {
        itemId : 'cartTab',
        indicator : false,
        iconCls : 'shop',
        title : 'Cart',
        badgeText : productsInCart.items.length,
        items : [{
            xtype : 'cartOrder',
        }, {
            xtype : 'cartOrderDetail'
        }]
    },

});
