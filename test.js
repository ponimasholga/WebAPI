function getCurrentPosition() {
    var latitude , longitude;
    navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true
    })
    
    function success({ coords }) {
        latitude = coords.latitude
        longitude = coords.longitude
        console.log(longitude , longitude)

        map = new OpenLayers.Map("demoMap");
        var mapnik         = new OpenLayers.Layer.OSM();
        var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
        var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
        var position       = new OpenLayers.LonLat(longitude , latitude).transform( fromProjection, toProjection);
        var zoom           = 15; 

        map.addLayer(mapnik);

        map.setCenter(position, zoom);
    }
    
    function error({ message }) {
     console.log(message)
    }

}

let timerId = setInterval(() => getCurrentPosition(), 3000);
setTimeout(() => { clearInterval(timerId); }, 18000);

;

