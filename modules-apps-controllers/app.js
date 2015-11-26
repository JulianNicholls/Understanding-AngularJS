// MODULE
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
// Angular injects $scope, $logt, and $filter
// Listing them allows for minification
myApp.controller('mainController', ['$scope', '$log', '$filter', '$resource', function($scope, $log, $filter, $resource) {
    $log.info($scope);
    $log.info($log);

    $scope.name = 'Julian Nicholls';
    formattedName = $filter('uppercase')($scope.name);
    $log.debug($scope.name)
    $log.debug(formattedName)

    var User = $resource('/user/:id', { user_id: '@id'});
}]);

var searchPeople = function(first, last, height, age, occupation) {
    return 'Julian Nicholls';
}

// console.log(searchPeople)   // Shows text of function

console.log(angular.injector().annotate(searchPeople)); // Array of parameter names
