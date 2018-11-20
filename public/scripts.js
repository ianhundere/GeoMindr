



function getLocation(cb) {              // gets user location using geolocation api
    let lats;
    let longs;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(location) {
            lats = location.coords.latitude;
            longs = location.coords.longitude;
            console.log("Your Lat/Lon: " + lats + "/" + longs);
            cb({'myLat': lats, 'myLon': longs});
        })
    } else {
        let lats_longs = new google.maps.LatLng(33.8486179, -84.3731044);
        lats = lats_longs.lat();
        longs = lats_longs.lng();
        console.log("Test Lat/Lon: " + lats + "/" + longs);
        cb({'myLat': lats, 'myLon': longs});
    } 
}


var marker = false;
function initMap() {                    // initial paint of the Google map centered on user
    getLocation(function(myLatLon) {
        let myGPS = {lat: parseFloat(myLatLon.myLat), lng: parseFloat(myLatLon.myLon)};
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: myGPS
        });

        // Create a marker and set its position.
        marker = new google.maps.Marker({
            // map: map,
            position: myGPS,
            map: map,
            title: 'Your location',
            draggable:true
          });
        google.maps.event.addListener(marker, 'dragend', function(event){
            markerLocation();
        });

        google.maps.event.addListener(map, 'click', function(event) {                
            //Get the location that the user clicked.
            marker.setPosition(event.latLng);
        
        //Get the marker's location.
        markerLocation();
        });
    })
}

function markerLocation(){
    //Get location.
    var currentLocation = marker.getPosition();
    //Add lat and lng values to a field that we can save.
    // console.log("LAT:", currentLocation.lat()); //latitude
    // console.log("LON:", currentLocation.lng()); //longitude
    document.querySelector('[data-lat]').value = parseFloat(currentLocation.lat());
    document.querySelector('[data-lon]').value = parseFloat(currentLocation.lng());
}


function initPubMap() {                    // initial paint of the Google map centered on user
    getLocation(function(myLatLon) {
        let myGPS = {lat: parseFloat(myLatLon.myLat), lng: parseFloat(myLatLon.myLon)};
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: myGPS
        });
        
        let markerArray = getMarkers();
        // Create a marker and set its position.
        markerArray.forEach(geoMindr => {
            let latlon = new google.maps.LatLng(geoMindr.lat, geoMindr.lon);
            let marker = new google.maps.Marker({
                position: {lat: latlon.lat(), lng: latlon.lng()},
                map: map,
                title: `${geoMindr.username}: ${geoMindr.reminder}`,
              });
        })
    })
}

function getMarkers() {
    let td = document.querySelectorAll('[data-username]');
    td = [...td];
    td = td.map(x => x.dataset)
    return td;
}


getLocation(function(myLatLon) {
    const inpLat = document.querySelector('[data-lat]');
    const inpLon = document.querySelector('[data-lon]');

    if (inpLat != null) {
        inpLat.value = parseFloat(myLatLon.myLat);
        inpLon.value = parseFloat(myLatLon.myLon);
    }
});
