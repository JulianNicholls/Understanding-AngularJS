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
    }).when('/forecast/:days', {
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

app.controller('forecastController', ['$scope', '$resource', '$routeParams', 'transferService',
  function($scope, $resource, $routeParams, transferService) {

    $scope.city = transferService.city;
    $scope.days = $routeParams.days || '3';

    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',
        { callback: "JSON_CALLBACK" },
        { get: { method: "JSONP"}}
    );

    $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: $scope.days,
        appid: '9e7c67954b17f031bb8c2d367c8c6cda'
    });

    $scope.convertToCelsius = function(kelvin) {
        return Math.round((kelvin - 273.15) * 10) / 10;
    }

    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }
}]);

app.directive('weatherResult', function () {
    return {
        templateUrl: 'directives/weather-result.html',
        replace: true,
        transclude: true,
        scope: {
            forecast: "=",
            convertToCelsius: "&",
            convertToDate: "&"
        }
    }
});
