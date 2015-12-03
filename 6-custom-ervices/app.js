// MODULE
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    }).when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    }).when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    });
});

myApp.service('nameService', function () {
    var self = this;

    this.name = 'Julian Nicholls';

    this.nameLength = function () {
        return self.name.length;
    }
});

// CONTROLLERS
myApp.controller('mainController', ['$scope', 'nameService', function($scope, nameService) {
    $scope.name = nameService.name;

    $scope.$watch('name', function () {
        nameService.name = $scope.name;
    })
}]);

myApp.controller('secondController', [
    '$scope', '$log', '$routeParams', 'nameService',
    function($scope, $log, $routeParams, nameService) {
    $scope.num  = $routeParams.num || 0;
    $scope.name = nameService.name;

    $log.info(nameService.name);
    $log.info(nameService.nameLength());

    $scope.$watch('name', function () {
        nameService.name = $scope.name;
    })
}]);
