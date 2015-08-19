app.controller('CompaniesCtrl', function ($scope, CompaniesSrv, SpringDataRestAdapter) {
    /**
     * Get all companies,
     */
    var res = CompaniesSrv.getCompanies();
    SpringDataRestAdapter.process(res).then(function (processedRes) {
        $scope.companies = processedRes._embeddedItems;
    });
});