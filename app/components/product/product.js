angular.module('ecommerce').component('product', {
    templateUrl: 'app/components/product/product.html',
    controller: function (cartSrvc) {
        // this.addItem = function () {
        //     cartSrvc.addItem(this.product)
        // }
    },
    controllerAs: 'product',
    bindings: {
        product: '<',       // < == one way binding
        buttonLabel: "@",   // @ == string binding
        buttonAction: "&"   // & == action binding
    }
})