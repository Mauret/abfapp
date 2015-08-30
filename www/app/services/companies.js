app.service('CompaniesSrv', function ($http) {
    this.getCompanies = function() {
        return $http.get(beUrlMap.baseLocal + beUrlMap.companies).then(function(data) {
            return data;
        }, function() {
            return false;
        });
    }

    this.getCompany = function(urlCompany) {
        return $http.get(urlCompany).then(function(data) {
            return data;
        }, function() {
            return false;
        });
    }
});