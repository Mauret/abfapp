app.controller('CheckPointCtrl', function ($scope, $stateParams, RepositorySrv, $cordovaGeolocation, SpringDataRestAdapter) {
    /**
     * Get a check point.
     * Note: using spring-data-rest plugin to use hateoas resources.
     */
    SpringDataRestAdapter.process(RepositorySrv.getItem($stateParams.restUrl)).then(function (processedRes) {
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
    });
});