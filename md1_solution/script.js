(function () {
    'use strict';
    angular.module('LunchCheck' ,[])
    .controller('LunchCheckController' , LunchCheckController);
    LunchCheckController.$inject['$scope'];
    function LunchCheckController($scope){
        $scope.input = "";
        $scope.message = "";
        $scope.sayMessage = function (){
            
            if ($scope.input.split(',').length < 4){
                if($scope.input.split(',') == 0)
                    $scope.message = "Please enter data first";
                else $scope.message = "Enjoy";
            }
            else $scope.message = "Too much!"
                
        };
    }
})();