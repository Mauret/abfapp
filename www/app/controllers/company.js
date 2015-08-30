app.controller('CompanyCtrl', function ($scope, company, SpringDataRestAdapter) {
    /**
     * Get a company.
     */
    SpringDataRestAdapter.process(company).then(function (processedRes) {
        $scope.company = processedRes._embeddedItems;
    });
});