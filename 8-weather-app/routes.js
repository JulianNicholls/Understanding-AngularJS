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
