app.service('GoogleMapsSrv', function ($cordovaGeolocation) {
    return {
        getMap: function(latitude, longitude, infos) {
            var latLng = new google.maps.LatLng(latitude, longitude);
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("g-map"), mapOptions);
            // get user position
            var userPosOpt = {timeout: 10000, enableHighAccuracy: false};
            var userPosition;
            $cordovaGeolocation.getCurrentPosition(userPosOpt).then(function(position) {
                // see http://ngcordova.com/docs/plugins/geolocation/ if you want to refresh user
                // position frequently
                userPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            });
            //Wait until the map is loaded then add marker
            google.maps.event.addListenerOnce(map, 'idle', function(){
                var marker = new google.maps.Marker({
                    map: map,
                    animation: google.maps.Animation.DROP,
                    position: latLng
                });
                var infoWindow = new google.maps.InfoWindow({
                    content: infos
                });
                var user = new google.maps.Marker({
                    map: map,
                    position: userPosition,
                    icon: '../img/user_marker.gif'
                });
                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.open(map, marker);
                });
            });
            return map;
        }
    }
});