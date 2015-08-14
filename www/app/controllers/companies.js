app.controller('CompaniesCtrl', ['$scope', 'CompaniesSrv', function ($scope, CompaniesSrv) {
    $scope.companies = CompaniesSrv.getCompanies();
}]);