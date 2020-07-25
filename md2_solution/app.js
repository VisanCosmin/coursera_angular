(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var buyController = this;
    buyController.items = ShoppingListCheckOffService.getBuyItems();
    buyController.buyItem = function (itemIndex){
        ShoppingListCheckOffService.buyItem(itemIndex);
    };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtController = this;
    boughtController.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService(){
    var service = this;
    var toBuyItems = [{ name: "cookies", quantity: 10 } , { name: "drinks", quantity: 5 },{ name: "ice cream", quantity: 3 } , { name: "fruits", quantity: 5 },{ name: "chips", quantity: 20 } , { name: "m&m", quantity: 6 }];
    var boughtItems =[];

    service.buyItem = function (itemIndex){
        boughtItems.push(toBuyItems[itemIndex]);
        toBuyItems.splice(itemIndex, 1);
    };
    service.getBuyItems = function (){
        return toBuyItems;
    };
    service.getBoughtItems = function (){
        return boughtItems;
    };
}



})();