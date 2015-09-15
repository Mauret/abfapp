app.controller('CheckPointCtrl', function ($scope, $stateParams, RepositorySrv, SpringDataRestAdapter, $cordovaGeolocation) {
    /**
     * Get a check point.
     * Note: using spring-data-rest plugin to use hateoas resources.
     */
    SpringDataRestAdapter.process(RepositorySrv.getItem($stateParams.restUrl)).then(function (processedRes) {
        $scope.checkPoint = processedRes;
        // create the check point map
        var latLng = new google.maps.LatLng($scope.checkPoint.latitude, $scope.checkPoint.longitude);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        $scope.checkPoint.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        // get user position
        var userPosOpt = {timeout: 10000, enableHighAccuracy: false};
        $cordovaGeolocation.getCurrentPosition(userPosOpt).then(function(position) {
            // see http://ngcordova.com/docs/plugins/geolocation/ if you want to refresh user
            // position frequently
            $scope.userPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        });
            //Wait until the map is loaded then add marker
        google.maps.event.addListenerOnce($scope.checkPoint.map, 'idle', function(){
            var marker = new google.maps.Marker({
                map: $scope.checkPoint.map,
                animation: google.maps.Animation.DROP,
                position: latLng
            });
            var infoWindow = new google.maps.InfoWindow({
                content: $scope.checkPoint.name
            });
            var user = new google.maps.Marker({
                map: $scope.checkPoint.map,
                position: $scope.userPosition,
                icon: '../img/user_marker.gif'
            });
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open($scope.checkPoint.map, marker);
            });
        });
    });
});