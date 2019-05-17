angular
    .module('app', [
        'ngRoute',
        'app.mainController',
        'app.PersonController',
    ])

    .config(config)

function config($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'AppClient/templates/home.html'
        })
        .when('/Person', {
            templateUrl: 'AppClient/templates/PersonManager.html',
            controller: 'PersonController'
        })
        .otherwise({
            redirectTo: '/'
        });
};