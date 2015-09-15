app.controller('CheckPointCtrl', function ($scope, $stateParams, RepositorySrv, SpringDataRestAdapter) {
    /**
     * Get a check point.
     * Note: using spring-data-rest plugin to use hateoas resources.
     */
    SpringDataRestAdapter.process(RepositorySrv.getItem($stateParams.restUrl)).then(function (processedRes) {
        $scope.checkPoint = processedRes;
    });
});