// Module

var app = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// Routes

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    }).when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController'
    });
});

// City transfer service

app.service('transferService', function () {
    this.city = 'Bournemouth';
});

// Controllers

app.controller('mainController', ['$scope', 'transferService', function($scope, transferService) {
    $scope.city = transferService.city;

    $scope.$watch('city', function () {
        transferService.city = $scope.city;
    })
}]);

app.controller('forecastController', ['$scope', 'transferService', function($scope, transferService) {
    $scope.city = transferService.city
}]);
