app.service('CompaniesSrv', function ($http) {
    this.getCompanies = function() {
        return $http.get(beUrlMap.baseLocal + beUrlMap.companies).then(function(data) {
            return data;
        }, function() {
            return false;
        });
    }
});