(function () {
  'use strict';

  angular.module('FlipImage', [])
  .controller('FlipImageController', FlipImageController);
  FlipImageController.$inject = ['$scope'];

  function FlipImageController($scope) {
    $scope.stateOfBeing = 'happy';
    $scope.flip = function () {
      $scope.stateOfBeing = 'sad';
    };
  }
})();
