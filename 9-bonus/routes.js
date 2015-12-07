// Routes

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController as main'
    }).when('/forecast', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController as fcCtlr'
    }).when('/forecast/:days', {
        templateUrl: 'pages/forecast.html',
        controller: 'forecastController as fcCtlr'
    });
});
