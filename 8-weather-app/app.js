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
        return Math.round(kelvin - 273.15);
    }

    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }

    $scope.formatWind = function(dir, m_s) {
        var directions = [
            [-22.5, 22.5,  'N'],
            [22.5,  67.5,  'NE'],
            [67.5,  112.5, 'E'],
            [112.5, 157.5, 'SE'],
            [157.5, 202.5, 'S'],
            [202.5, 247.5, 'SW'],
            [247.5, 292.5, 'W'],
            [292.5, 337.5, 'NW']
        ],
        dir_text;

        for(var i = 0; i < directions.length; ++i) {
            if(dir > directions[i][0] && dir < directions[i][1]) {
                dir_text = directions[i][2];
                break
            }
        }

        return dir_text + ' at ' + Math.round(m_s * 3.6 * 0.6214) + ' mph'
    }
}]);

app.directive('weatherResult', function () {
    return {
        templateUrl: 'directives/weather-result.html',
        replace: true,
        transclude: true,
        scope: {
            forecast: "=",
            toC: "&",
            toDate: "&",
            formatWind: "&"
        }
    }
});
