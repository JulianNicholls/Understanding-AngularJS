// Controllers

app.controller('mainController', ['$scope', '$location', 'transferService', function($scope, $location, transferService) {
    $scope.city = transferService.city;

    $scope.$watch('city', function () {
        transferService.city = $scope.city;
    })

    $scope.submit = function () {
        $location.path("/forecast")
    }
}]);

app.controller('forecastController', ['$scope', '$resource', '$routeParams', '$sce', 'transferService',
  function($scope, $resource, $routeParams, $sce, transferService) {

    $scope.city = transferService.city;
    $scope.days = $routeParams.days || '3';

    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',
        { callback: "JSON_CALLBACK" },
        { get: { method: "JSONP" } }
    );

    $scope.weatherResult = $scope.weatherAPI.get({
        q: $scope.city,
        cnt: $scope.days,
        appid: '9e7c67954b17f031bb8c2d367c8c6cda'
    });

    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }

    $scope.convertToCelsius = function(kelvin) {
        return Math.round(kelvin - 273.15);
    }

    $scope.formatWind = function(dir, m_s) {
        var directions = [
            [-11.25,  11.25, 'N'],
            [ 11.25,  33.75, 'NNE'],
            [ 33.75,  56.25, 'NE'],
            [ 56.25,  78.75, 'ENE'],
            [ 78.75, 101.25, 'E'],
            [101.25, 123.75, 'ESE'],
            [123.75, 146.25, 'SE'],
            [146.25, 168.75, 'SSE'],
            [168.75, 191.25, 'S'],
            [191.25, 213.75, 'SSW'],
            [213.75, 236.25, 'SW'],
            [236.25, 258.75, 'WSW'],
            [258.75, 281.25, 'W'],
            [281.25, 303.75, 'WNW'],
            [303.75, 326.25, 'NW'],
            [326.25, 348.75, 'NNW'],
            [348.75, 359.95, 'N']
        ],
        dir_text;

        for(var i = 0; i < directions.length; ++i) {
            if(dir > directions[i][0] && dir < directions[i][1]) {
                dir_text = directions[i][2];
                break
            }
        }

        return $sce.trustAsHtml(dir_text + ' (' + dir + '&deg;) at ' + Math.round(m_s * 3.6 * 0.6214) + 'mph');
    }
}]);
