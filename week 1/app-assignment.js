(function () {
  'use strict';

  angular.module('DietCheck', [])
  .controller('DietCheckController', DietCheckController);

  DietCheckController.$inspect = ['$scope'];

  function DietCheckController($scope) {
    $scope.name = "";
    $scope.message = "";
    $scope.calculateDiet = function () {
      const items = $scope.name.split(',');
      console.log(items)
      if (items.length == 1 && items[0] == "") {
        $scope.message = "Please enter data first";
      } else if (items.length <= 3) {
        $scope.message = "Enjoy!";
      } else if (items.length > 3) {
        $scope.message = "Too much!";
      } else {
        $scope.message = "Unknown number of items!";
      }
    };
  }
})();
