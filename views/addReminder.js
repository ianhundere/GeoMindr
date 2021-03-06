function addReminder() {
    return `
        <div class='addRemind'>
            <div class='columnContainer'>
                <div class='columnL'>
                    <div class="addTitle"><h1>Add GeoMindr</h1></div>
                    <form class="form" action="/createreminder" method="POST">
                        <div class="placeholder">
                            <label>Latitude:</label> 
                            <div class="form-row">
                                <input type="text" name="latitude" data-lat/>
                            </div>
                        </div>  
                        <div class="placeholder">
                            <label>Longitude: </label>
                            <div class="form-row">
                                <input type="text" name="longitude" data-lon/>
                            </div>
                        </div>  
                        <div class="placeholder"> 
                            <label>Reminder:</label> 
                            <div class="form-row">
                                <input type="text" name="reminder"/>
                            </div>
                        </div> 
                        <div class='submitBtn'>   
                            <button>Submit</button>
                            <label>Public:</label>
                            <input type="checkbox" name="is_public" checked="true"/>
                        </div>
                    </form>   
                </div>
                <div class='columnR'>
                    <div class='mapContainer'>
                        <div id="map"></div>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="scripts.js"></script>
        <script async defer 
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyATg8I-7sRcc4jlqUhTAxWDOv8gHanaLXA&callback=initMap"></script>`;
}

module.exports = addReminder;
