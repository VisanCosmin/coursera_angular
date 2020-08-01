(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController )
.service('MenuSearchService', MenuSearchService)
.directive("foundItems", FoundItemsDirective);

    
function FoundItemsDirective(){
    var ddo = {
        templateUrl: 'template.html',
        scope: {
            items: '<',
            remove: '&'
        }
    };

    return ddo;
}    
    
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
    var ctrl = this;
    ctrl.searchTerm = "";
    ctrl.getItems = function () {
        console.log("search term : ");
        console.log(ctrl.searchTerm);
        MenuSearchService.getItems(ctrl.searchTerm).then(
            function(response){
                ctrl.items = response;
            }
        );
    };
    ctrl.removeItem = function (index){
        ctrl.items.splice(index, 1);
    };
    
}

    

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
    var service = this;
    
    service.getItems = function (searchTerm) {
        return $http({url : "https://davids-restaurant.herokuapp.com/menu_items.json"}).then(function (result) {
            var foundItems = [];
            for ( var i = 0 ; i < result.data.menu_items.length ; i++ ) {
                if(result.data.menu_items[i].name.toLowerCase().indexOf(searchTerm) !== -1 ) {
                      foundItems.push( result.data.menu_items[i] );
                }
            }
            if(searchTerm == "")
                foundItems = []
            console.log(foundItems);    
            return foundItems;
        })
    };


}

})();