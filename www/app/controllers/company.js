app.controller('CompanyCtrl', function ($scope, $stateParams, CompaniesSrv, SpringDataRestAdapter) {
    /**
     * Get a company.
     */
    SpringDataRestAdapter.process(CompaniesSrv.getCompany($stateParams.restCompany)).then(function (processedRes) {
        $scope.company = processedRes;
    });
});