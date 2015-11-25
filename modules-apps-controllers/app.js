// MODULE
var myApp = angular.module('myApp', ['ngMessages']);

// CONTROLLERS
// Angular injects $scope, $logt, and $filter
myApp.controller('mainController', function($scope, $log, $filter) {
    $log.info($scope);
    $log.info($log);

    $scope.name = 'Julian Nicholls';
    formattedName = $filter('uppercase')($scope.name);
    $log.debug($scope.name)
    $log.debug(formattedName)
});

var searchPeople = function(first, last, height, age, occupation) {
    return 'Julian Nicholls';
}

// console.log(searchPeople)   // Shows text of function

console.log(angular.injector().annotate(searchPeople)); // Array of parameter names
