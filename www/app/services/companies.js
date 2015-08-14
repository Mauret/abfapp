app.service('CompaniesSrv', ['$http', function ($http) {
    getCompanies = function () {
        $http.get(beUrlMap.baseLocal + beUrlMap.companies)
            .then(function (response) {
                return response.data;
            }, function () {
                return false;
            });
    };
}]);