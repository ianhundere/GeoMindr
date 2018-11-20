function addReminder() {
    return `
        <div class='addRemind'>
            <div class='columnContainer'>
                <div class='columnL'>
                    <div class="addTitle"><h1>Add new GeoMindr</h1></div>
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
                        <div id="map"></div><br>
                    </div>
                </div>
            </div>
        </div>



        
        
        
        `;
}

module.exports = addReminder;









{/* <button><a href ="/mylist"> List of GeoMindrs</a><br></button>
        <button><a href ="/home"> Go to GeoMindr Menu</a></button>
        
        <script src="scripts.js"></script>
        <script async defer 
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyATg8I-7sRcc4jlqUhTAxWDOv8gHanaLXA&callback=initMap"></script> */}