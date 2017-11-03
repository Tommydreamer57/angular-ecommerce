angular.module('ecommerce').component('cartChip', {
    template: '{{chip.getItems()}}',
    controller: function (cartSrvc) {
        this.getItems = cartSrvc.getNumberItems
    },
    controllerAs: 'chip'
})