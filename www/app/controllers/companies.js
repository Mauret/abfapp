app.controller('CompaniesCtrl', function ($scope, CompaniesSrv, SpringDataRestAdapter) {
    /**
     * Get all companies.
     */
    SpringDataRestAdapter.process(CompaniesSrv.getCompanies()).then(function (processedRes) {
        $scope.companies = processedRes._embeddedItems;
    });
});