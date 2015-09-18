app.controller('MenuCtrl', function ($scope, $stateParams, RepositorySrv, SpringDataRestAdapter) {
    /**
     * Get a company menu.
     * Note: using spring-data-rest plugin to use hateoas resources.
     */
    SpringDataRestAdapter.process(RepositorySrv.getItem($stateParams.restUrl)).then(function (processedRes) {
        $scope.menu = processedRes;
        //get the menu entries
        SpringDataRestAdapter.process(RepositorySrv.getItems($scope.menu._links.menuEntries.href)).then(function (processedRes) {
            $scope.menuEntries = processedRes._embeddedItems;
        });
    });
});