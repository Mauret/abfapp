var props = {
    geolocation: {
        timeout: { // in milliseconds
            dynamic: 3000,
            static: 10000
        },
        marker: {
            title: "Sei qui",
            icon: {
                path: "SymbolPath.CIRCLE",
                fillColor: "#FF8C8C",
                fillOpacity: 1,
                scale: 6,
                strokeColor: "gray",
                strokeWeight: 2
            },
            animation: "Animation.BOUNCE"
        }
    },
    maps: {
        zoom: 10,
        marker: {
            animation: "Animation.DROP"
        }
    }
};