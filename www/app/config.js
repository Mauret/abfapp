app.config(function ($stateProvider, $urlRouterProvider, SpringDataRestInterceptorProvider) {

    // Configure rest
    SpringDataRestInterceptorProvider.apply();

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

        .state('companies', {
            url: appUrlMap.companies,
            controller: 'CompaniesCtrl',
            templateUrl: 'app/views/companies.html'
        })

        .state('company', {
            url: appUrlMap.company,
            controller: 'CompanyCtrl',
            templateUrl: 'app/views/company.html'
        })

        .state('menu', {
            url: appUrlMap.menu,
            controller: 'MenuCtrl',
            templateUrl: 'app/views/menu.html'
        });

    // if none of the below states are matched, use this as the fallback
    $urlRouterProvider.otherwise(appUrlMap.home);
});