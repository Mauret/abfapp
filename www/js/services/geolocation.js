app.service('GeolocationSrv', function ($cordovaGeolocation) {
    var icon = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: 'blue',
        fillOpacity: 0.8,
        scale: 1,
        strokeColor: 'blue',
        strokeWeight: 2
    };
    return {
        getDynamicUserPosition: function(timeout) {
            var watchOptions = {
                timeout : timeout,
                enableHighAccuracy: false // may cause errors if true
            };

            var watch = $cordovaGeolocation.watchPosition(watchOptions);
            watch.then(
                null,
                function(err) {
                    // error
                },
                function(position) {
                    position.icon = icon;
                    return position;
                });


            watch.clearWatch();
        },

        getStaticUserPosition: function(timeout) {
            var userPosOpt = {timeout: timeout, enableHighAccuracy: false};
            $cordovaGeolocation.getCurrentPosition(userPosOpt).then(function(position) {
                // see http://ngcordova.com/docs/plugins/geolocation/ if you want to refresh user
                // position frequently
                position.icon = icon;
                return position;
            });
        }
    }
});