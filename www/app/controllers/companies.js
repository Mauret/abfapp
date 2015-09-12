app.controller('CompaniesCtrl', function ($scope, CompaniesSrv, SpringDataRestAdapter) {
    /**
     * Get all companies.
     * Note: using spring-data-rest plugin to use hateoas resources.
     */
    SpringDataRestAdapter.process(CompaniesSrv.getCompanies()).then(function (processedRes) {
        $scope.companies = processedRes._embeddedItems;
    });
});