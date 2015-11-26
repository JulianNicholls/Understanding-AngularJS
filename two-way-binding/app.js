// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLERS
myApp.controller('mainController', ['$scope', function($scope) {

    $scope.$watch('handle', function (new_val, old_val) {
        console.info('Changed - Old: ' + old_val + ', New: ' + new_val);
    });

    // // This will go behind Angular's back, hence the $timeout service

    // setTimeout(function () {
    //     console.debug('Changed!')
    //     $scope.handle = 'Nothing';
    // }, 2000)

    // // This is another way to apply the change

    // setTimeout(function () {
    //     $scope.$apply(function() {
    //         console.debug('Changed via apply!')
    //         $scope.handle = 'Surprise!';
    //     })
    // }, 4000)

    $scope.characters = 5;

    $scope.rules = [
        { rulename: 'must be 5 characters' },
        { rulename: 'must not be used elsewhere' },
        { rulename: 'must be cool' }
    ];

    $scope.clicked = function () {
        alert("Clicked!");
    };

    $scope.name = "Julian Nicholls";
}]);
