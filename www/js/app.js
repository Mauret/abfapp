// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module('abfapp', ['ionic', 'spring-data-rest', 'ngCordova', 'ngMap'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('home', {
                url: appUrlMap.home,
                templateUrl: 'templates/home.html'
            })

            .state('companies', {
                url: appUrlMap.companies,
                controller: 'CompaniesCtrl',
                templateUrl: 'templates/companies.html'
            })

            .state('company', {
                url: appUrlMap.company,
                controller: 'CompanyCtrl',
                templateUrl: 'templates/company.html'
            })

            .state('menu', {
                url: appUrlMap.menu,
                controller: 'MenuCtrl',
                templateUrl: 'templates/menu.html'
            })

            .state('checkPoints', {
                url: appUrlMap.checkPoints,
                controller: 'CheckPointsCtrl',
                templateUrl: 'templates/check-points.html'
            })

            .state('checkPoint', {
                url: appUrlMap.checkPoint,
                controller: 'CheckPointCtrl',
                templateUrl: 'templates/check-point.html'
            });

        // if none of the below states are matched, use this as the fallback
        $urlRouterProvider.otherwise(appUrlMap.home);
    });
