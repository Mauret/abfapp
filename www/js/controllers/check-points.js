app.controller('CheckPointsCtrl', function ($scope, RepositorySrv, SpringDataRestAdapter, ErrorSrv) {
    /**
     * Get all check points.
     * Note: using spring-data-rest plugin to use hateoas resources.
     */
    SpringDataRestAdapter.process(RepositorySrv.getCheckPoints()).then(function (processedRes) {
        /*
         If there is an error, feedback to user.
         If in test show test data
         */
        if (processedRes.error) {
            if (processedRes.test) {

            } else {
                ErrorSrv.getError(processedRes.errorType);
            }
        }
        /*
         Success response, show the data
         */
        else {
            $scope.checkPoints = processedRes._embeddedItems;
        }
    });
});