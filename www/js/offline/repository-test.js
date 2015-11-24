var repoTest = {
    checkPoint: {
        name: "Nome ristoro",
        latitude: "46.152360",
        longitude: "13.345938",
        map: {
            zoom: props.maps.zoom
        },
        marker: {
            animation: "Animation.DROP"
        }
    },

    checkPoints: [
        {
            name: "Nome ristoro",
            _links: {
                self: {
                    href: beUrlMap.base + appUrlMap.checkPoints + "/1"
                }
            }
        }
    ]
};