app.service('RepositorySrv', function ($http) {
    return {
        /**
         * @returns a list of companies.
         */
        getCompanies: function () {
            return this.getItems(beUrlMap.baseRemoteCert + beUrlMap.companies);
        },

        /**
         * @returns a list of check points.
         */
        getCheckPoints: function () {
            return this.getItems(beUrlMap.baseRemoteCert + beUrlMap.checkPoints);
        },

        /**
         * @param restUrl the items rest url.
         * @returns a list of items, false if error.
         */
        getItems: function (restUrl) {
            return $http.get(restUrl).then(function (data) {
                return data;
            }, function () {
                return false;
            });
        },

        /**
         * @param restUrl the item rest url.
         * @returns a item, false if error.
         */
        getItem: function (restUrl) {
            return $http.get(restUrl).then(function (data) {
                return data;
            }, function () {
                return false;
            });
        }
    }
});