function editReminder(theReminder) {
    return `
    <div class="formTitle"><h1>Update your GeoMindr</h1></div>
    <form class="form" action="/mylist/${theReminder.id}" method="POST">
            <div class="placeholder">
                <label>Public:
                <input type="checkbox" name="is_public"
                ${theReminder.is_public ? 'checked' : ''}
                
                />
                </label>
                <label>Latitude: 
                <div class="form-row">
                    <input type="integer" name="latitude" value="${
                        theReminder.latitude
                    }" data-lat/>
                </div>
                </label>
                <label>Longitude:
                <div class="form-row">
                    <input type="integer" name="longitude" value="${
                        theReminder.longitude
                    }" data-lon/>
                </div>
                </label>
                <label>Reminder: 
                <div class="form-row">
                    <input type="text" name="reminder" value="${
                        theReminder.reminder
                    }"/>
                </div>
                </label>
                <button>Update</button>
            </div>
        </form>
        <div id="map"></div><br>
        <a href ="/mylist"> List of GeoMindrs</a><br>
        <a href ="/home"> Go to GeoMindr Menu</a>
        <!--
        <script>
            let lats;
            let longs;
            if (navigator.geolocation) {       
                navigator.geolocation.getCurrentPosition(function(location) {
                    lats = location.coords.latitude;
                    longs = location.coords.longitude;
                    console.log("Your Lat/Lon: " + lats + "/" + longs);
                    document.querySelector('[data-lat]').value = lats;
                    document.querySelector('[data-lon]').value = longs;
                })}
        </script>
        -->
        <script src="scripts.js"></script>
        <script async defer 
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyATg8I-7sRcc4jlqUhTAxWDOv8gHanaLXA&callback=initMap"></script>
        
        `;
}

module.exports = editReminder;
