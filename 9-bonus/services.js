// City transfer service

app.service('transferService', function () {
    this.city = 'Bournemouth';
});

app.service('weatherService', ['$resource', function($resource) {
    this.get = function(city, days) {
        var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?appid=9e7c67954b17f031bb8c2d367c8c6cda',
            { callback: "JSON_CALLBACK" },
            { get: { method: "JSONP" } }
        );

        return weatherAPI.get({ q: city, cnt: days });
    }
}]);
