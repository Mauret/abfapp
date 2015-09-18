app.controller('CheckPointCtrl', function ($scope, $stateParams, RepositorySrv, GoogleMapsSrv, SpringDataRestAdapter) {
    /**
     * Get a check point.
     * Note: using spring-data-rest plugin to use hateoas resources.
     */
    SpringDataRestAdapter.process(RepositorySrv.getItem($stateParams.restUrl)).then(function (processedRes) {
        $scope.checkPoint = processedRes;
        // get the check point map
        GoogleMapsSrv.getMap($scope.checkPoint.latitude, $scope.checkPoint.longitude, $scope.checkPoint.name);
    });
});