angular.module('quiz', [])
  .controller('Main', ['$scope', function ($scope) {
    var change = function (i, j) {
      $scope.state[i][j] = !$scope.state[i][j];
    };

    $scope.state = [
      [true, false, true, true],
      [false, false, false, true],
      [false, false, true, false],
      [true, false, true, true]
    ];

    $scope.step = function (i, j) {
      change(i, j);

      for (var _j = 0; _j < 4; _j++) {
        if (_j == j) {
          continue;
        }
        change(i, _j);
      }

      for (var _i = 0; _i < 4; _i++) {
        if (_i == i) {
          continue;
        }
        change(_i, j);
      }
    };
  }])