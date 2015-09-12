app.controller('CompanyCtrl', function ($scope, $stateParams, CompaniesSrv, SpringDataRestAdapter) {
    /**
     * Get a company.
     * Note: using spring-data-rest plugin to use hateoas resources.
     */
    SpringDataRestAdapter.process(CompaniesSrv.getCompany($stateParams.restCompany)).then(function (processedRes) {
        $scope.company = processedRes;
    });
});