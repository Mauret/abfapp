app.controller('CompanyCtrl', function ($scope, $stateParams, RepositorySrv, SpringDataRestAdapter) {
    /**
     * Get a company.
     * Note: using spring-data-rest plugin to use hateoas resources.
     */
    SpringDataRestAdapter.process(RepositorySrv.getItem($stateParams.restUrl)).then(function (processedRes) {
        $scope.company = processedRes;
    });
});