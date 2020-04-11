(function () {
  'use strict';
  angular.module('NameCalulator', [])
  .controller('NameCalulatorController', function ($scope) {
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric = function () {
      var totalNameValue = calculateNeumericForString($scope.name);
      $scope.totalValue = totalNameValue
    };

    function calculateNeumericForString(string) {
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }
      return totalStringValue;
    }

  });

})();
