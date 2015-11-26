// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.name = 'Julian';

    $timeout(function () {
        $scope.name = 'Everybody';
    }, 2000);
}]);
