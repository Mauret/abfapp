app.controller('MenuCtrl', function ($scope, $stateParams, CompaniesSrv, SpringDataRestAdapter) {
    /**
     * Get a company menu.
     * Note: using spring-data-rest plugin to use hateoas resources.
     */
    SpringDataRestAdapter.process(CompaniesSrv.getMenu($stateParams.restMenu)).then(function (processedRes) {
        $scope.menu = processedRes;
        //get the menu entries
        SpringDataRestAdapter.process(CompaniesSrv.getMenuEntries($scope.menu._links.menuEntries.href)).then(function (processedRes) {
            $scope.menuEntries = processedRes._embeddedItems;
        });
    });
});