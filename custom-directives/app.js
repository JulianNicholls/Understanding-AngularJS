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
myApp.controller('mainController', ['$scope', function($scope) {
    $scope.person = {
        name: 'Jane Doe',
        address: '555 5th Avenue, New York, NY 10023'
    };

    $scope.people = [
        {
            name: 'Julian Nicholls',
            address: 'Bournemouth, Dorset, UK'
        },
        {
            name: 'John Doe',
            address: '123 Fake St, Springfield, OR 74021'
        },
    ];
}]);

myApp.controller('secondController', ['$scope', '$log', function($scope, $log) {

}]);

myApp.directive('searchResult', function () {
    return {
        restrict: 'AECM',     // Attribute and Element as default, Class and comMent turned on
//      template: '<a><p> etc'
        templateUrl: 'directives/search-result.html',
        replace: true,  // Replace the directive with contents, default is to wrap
        scope: {        // Turn off access to controller scope
            personName: "@",        // Text, needs {{ }}
            personAddress: "@",
            personObject: "=",      // Two-way binding object, no {{ }}
        }
    }
})
