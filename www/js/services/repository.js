app.service('RepositorySrv', function ($http) {
    var error = {
        error: true,
        test: true, // TODO set false in production
    }

    return {
        /**
         * @returns a list of companies.
         */
        getCompanies: function () {
            return this.getItems(beUrlMap.base + beUrlMap.companies);
        },

        /**
         * @returns a list of check points.
         */
        getCheckPoints: function () {
            return this.getItems(beUrlMap.base + beUrlMap.checkPoints);
        },

        /**
         * @param restUrl the items rest url.
         * @returns a list of items, false if error.
         */
        getItems: function (restUrl) {
            return $http.get(restUrl).then(function (data) {
                return data;
            }, function (data) {
                error.errorType = data.status;
                return error;
            });
        },

        /**
         * @param restUrl the item rest url.
         * @returns a item, false if error.
         */
        getItem: function (restUrl) {
            return $http.get(restUrl).then(function (data) {
                return data;
            }, function (data) {
                error.errorType = data.status;
                return error;
            });
        }
    }
});