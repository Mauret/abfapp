app.controller('CheckPointsCtrl', function ($scope, RepositorySrv, SpringDataRestAdapter) {
    /**
     * Get all check points.
     * Note: using spring-data-rest plugin to use hateoas resources.
     */
    SpringDataRestAdapter.process(RepositorySrv.getCheckPoints()).then(function (processedRes) {
        $scope.checkPoints = processedRes._embeddedItems;
    });
});