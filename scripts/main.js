var mainApp = angular.module('mainApp',['ui.router','ngResource','ui.bootstrap']);

mainApp.config(function($stateProvider, $urlRouterProvider,$locationProvider,$httpProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url:'/',
            templateUrl: 'partials/home.html',
            controller:'viewController',
            controllerAs:'view'
        })
        .state('login', {
            url:'/Login',
            templateUrl: 'partials/login.html',
            controller:'loginController',
            controllerAs:'login'
        })


});

