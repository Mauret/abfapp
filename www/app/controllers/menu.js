app.controller('MenuCtrl', function ($scope, $stateParams, CompaniesSrv, SpringDataRestAdapter) {
    /**
     * Get a company menu.
     */
    SpringDataRestAdapter.process(CompaniesSrv.getCompany($stateParams.restMenu)).then(function (processedRes) {
        $scope.menu = processedRes;
    });
});