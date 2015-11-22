app.controller('CheckPointCtrl', function ($scope, $stateParams, RepositorySrv, ErrorSrv, $cordovaGeolocation, SpringDataRestAdapter) {
    /**
     * Get a check point.
     * Note: using spring-data-rest plugin to use hateoas resources.
     */
    SpringDataRestAdapter.process(RepositorySrv.getItem($stateParams.restUrl)).then(function (processedRes) {
        /*
         If there is an error, feedback to user.
         If in test show test data
         */
        if (processedRes.error) {
            if (processedRes.test) {

            } else {
                ErrorSrv.getError(processedRes.errorType);
            }
        }
        /*
         Success response, show the data
         */
        else {
            $scope.checkPoint = processedRes;
            //get check point map
            $scope.checkPoint.map = {
                center: {
                    latitude: $scope.checkPoint.latitude,
                    longitude: $scope.checkPoint.longitude
                },
                zoom: 13
            };
            //get check point marker
            $scope.checkPoint.marker = {
                idKey: 1,
                coords: {
                    latitude: $scope.checkPoint.latitude,
                    longitude: $scope.checkPoint.longitude
                }
            };
            //get user marker
            var userPosOpt = {timeout: 10000, enableHighAccuracy: false};
            $cordovaGeolocation.getCurrentPosition(userPosOpt).then(function(position) {
                // see http://ngcordova.com/docs/plugins/geolocation/ if you want to refresh user
                // position frequently
                $scope.markerUser = {
                    idKey: 2,
                    coords: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    },
                    options: {
                        icon: 'img/user_marker.gif',
                        animation: google.maps.Animation.DROP
                    }
                }
            });
            //get kml layer
            $scope.checkPoint.kmlLayer = {
                url: "https://drive.google.com/open?id=0B7F4Vcu4eokUc3Z2OEJYUGdpeVE"
            }
        }
    });
});