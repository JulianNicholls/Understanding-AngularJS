// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$http', function($scope, $http) {

    // Watch the handle and report changes
    // $scope.$watch('handle', function (new_val, old_val) {
    //     console.debug('Changed - Old: ' + old_val + ', New: ' + new_val);
    // });

    // This will go behind Angular's back, hence the $timeout service

    // setTimeout(function () {
    //     console.debug('Changed!')
    //     $scope.handle = 'Nothing';
    // }, 2000)

    // This is another way to apply the change

    // setTimeout(function () {
    //     $scope.$apply(function() {
    //         console.debug('Changed via apply!')
    //         $scope.handle = 'Surprise!';
    //     })
    // }, 4000)

    $scope.characters = 5;

    // Static Rules
    // $scope.rules = [
    //     { rulename: 'must be 5 characters' },
    //     { rulename: 'must not be used elsewhere' },
    //     { rulename: 'must be cool' }
    // ];

    // Asynchronously collected rules
    $http({
        method: 'GET',
        url: 'http://node.local:3100/api'
    }).then(function successful(result) {
            console.debug(result)
            $scope.rules = result.data;
            console.debug($scope.rules)
        }, function failure(data, status) {
            console.warn('GET Failed: ');
            console.warn(data);
        });

    $scope.name = "Julian Nicholls";

    $scope.newRule = '';

    postToApi = function( data ) {
        $http({
            method: 'POST',
            url: 'http://node.local:3100/api',
            data: data
        }).then(function success(result) {
            console.debug('POST Success');
            $scope.rules = result.data;
            $scope.newRule = '';
        }, function error(data, status) {
            console.warn("POST Failed:");
            console.warn(data);
        });
    }

    // Add a new rule via POST
    $scope.addRule = function() {
        postToApi({ newRule: $scope.newRule });
        return false;
    }

    $scope.resetRules = function() {
        postToApi({ reset: 1 });
        return false;
    }

    // Delete a new rule
    $scope.deleteRule = function(index) {
        postToApi({ remove: index });
        return false;
    }
}]);
