!function(){"use strict";function e(e,t){t.otherwise("/"),e.state("home",{url:"/",templateUrl:"home.template.html"}).state("categories",{url:"/categories",templateUrl:"categories.template.html",controller:"CategoriesListController as categoriesList",resolve:{categories:["MenuDataService",function(e){return e.getAllCategories()}]}}).state("items",{url:"/{categoryShortName}/items",templateUrl:"items.template.html",controller:"ItemsListController as itemsList",params:{categoryShortName:null},resolve:{items:["MenuDataService","$stateParams",function(e,t){return e.getItemsForCategory(t.categoryShortName)}]}})}angular.module("MenuApp").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}();