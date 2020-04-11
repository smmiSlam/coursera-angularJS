(function () {
  'use strict';

  angular.module('UpperCase', [])
  .controller('UpperCaseController', UpperCaseController);
  UpperCaseController.$inject = ['$scope', '$filter'];
  function UpperCaseController($scope, $filter) {
    $scope.name = "Mazharul";

    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name)
    };
  }
})();
