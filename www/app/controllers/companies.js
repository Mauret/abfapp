app.controller('CompaniesCtrl', function ($scope, RepositorySrv, SpringDataRestAdapter) {
    /**
     * Get all companies.
     * Note: using spring-data-rest plugin to use hateoas resources.
     */
    SpringDataRestAdapter.process(RepositorySrv.getCompanies()).then(function (processedRes) {
        $scope.companies = processedRes._embeddedItems;
    });
});