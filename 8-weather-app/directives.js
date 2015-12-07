// weather-result directive

app.directive('weatherResult', function () {
    return {
        restrict: 'E',
        templateUrl: 'directives/weather-result.html',
        replace: true,
        transclude: true,
        scope: {
            forecast: "=",
            dateFormat: "@",
            toC: "&",
            toDate: "&",
            formatWind: "&"
        }
    }
});
