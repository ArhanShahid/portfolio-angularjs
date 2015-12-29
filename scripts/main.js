var mainApp = angular.module('mainApp',['ui.router','ngResource','ui.bootstrap','duScroll']);

mainApp.config(function($stateProvider, $urlRouterProvider,$locationProvider,$httpProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url:'/',
            templateUrl: 'partials/home.html',
            controller:'homeController',
            controllerAs:'home'
        })

});

