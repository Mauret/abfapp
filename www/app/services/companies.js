app.service('CompaniesSrv', ['CompaniesRes', function (CompaniesRes) {
    var getCompanies = function () {
        return CompaniesRes.query();
    };
}]);