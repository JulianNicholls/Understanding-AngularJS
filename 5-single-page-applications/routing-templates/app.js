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

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log) {
    $scope.name = 'Main';
}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams',
    function($scope, $location, $log, $routeParams) {
        $scope.num = $routeParams.num || 0;
}]);
