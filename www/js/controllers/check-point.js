app.controller('CheckPointCtrl', function ($scope, $stateParams, RepositorySrv, ErrorSrv, SpringDataRestAdapter) {
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
                $scope.checkPoint = repoTest.checkPoint;
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
                zoom: props.maps.zoom
            };
            //get check point marker
            $scope.checkPoint.marker = {
                animation: props.maps.marker.animation
            };
        }
        //user geolocation
        $scope.markerUser = {
            title: props.geolocation.marker.title,
            icon: props.geolocation.marker.icon,
            animation: props.geolocation.marker.animation
        };
        //get kml layer
        $scope.checkPoint.kmlLayer = {
            url: "https://drive.google.com/open?id=0B7F4Vcu4eokUc3Z2OEJYUGdpeVE"
        }
    });
});