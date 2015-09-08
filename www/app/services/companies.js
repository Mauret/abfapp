app.service('CompaniesSrv', function ($http) {
    return {
        /**
         * @returns a list of companies, false if error.
         */
        getCompanies: function() {
            return $http.get(beUrlMap.baseLocal + beUrlMap.companies).then(function (data) {
                        return data;
                    }, function () {
                        return false;
                    });
        },

        /**
         * @param restCompany the company rest url.
         * @returns a company object, false if error.
         */
        getCompany: function (restCompany) {
            return $http.get(restCompany).then(function (data) {
                return data;
            }, function () {
                return false;
            });
        },

        /**
         * @param restMenu the company menu rest url.
         * @returns a menu object, false if error.
         */
        getMenu: function(restMenu) {
            return $http.get(restMenu).then(function (data) {
                return data;
            }, function () {
                return false;
            });
        }
    }
});