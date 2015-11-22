app.controller('MenuCtrl', function ($scope, $stateParams, RepositorySrv, SpringDataRestAdapter, ErrorSrv) {
    /**
     * Get a company menu.
     * Note: using spring-data-rest plugin to use hateoas resources.
     */
    SpringDataRestAdapter.process(RepositorySrv.getItem($stateParams.restUrl)).then(function (processedRes) {
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
            $scope.menu = processedRes;
            //get the menu entries
            SpringDataRestAdapter.process(RepositorySrv.getItems($scope.menu._links.menuEntries.href)).then(function (processedRes) {
                $scope.menuEntries = processedRes._embeddedItems;
            });
        }
    });
});