function editReminder(theReminder) {
    return `
        <div class='editRemind'>
            <div class='columnContainer'>
                <div class='columnL'>
                    <div class="editTitle"><h1>Update your GeoMindr</h1></div>
                    <form class="form" action="/mylist/${theReminder.id}" method="POST"> 
                        <div class="placeholder">
                            <label>Latitude:</label> 
                            <div class="form-row">
                                <input type="integer" name="latitude" value="${
                                    theReminder.latitude}" data-lat/>
                            </div>
                        </div>        
                        <div class="placeholder">    
                            <label>Longitude:</label>
                            <div class="form-row">
                                <input type="integer" name="longitude" value="${
                                    theReminder.longitude}" data-lon/>
                            </div>
                        </div>
                        <div class="placeholder">    
                            <label>Reminder:</label> 
                            <div class="form-row">
                                <input type="text" name="reminder" value="${
                                    theReminder.reminder}" data-reminder/>
                            </div>
                        </div>    
                        <div class='submitBtn'>   
                            <button>Submit</button>
                            <label>Public:</label>
                            <input type="checkbox" name="is_public"
                            ${theReminder.is_public ? 'checked' : ''}/>
                            </div>
                        </div>
                    </form>
                    <div class='columnR'>
                        <div class='mapContainer'>
                            <div id="map"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="../../scripts.js"></script>
        <script async defer 
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyATg8I-7sRcc4jlqUhTAxWDOv8gHanaLXA&callback=initUpdateMap"></script>
        
        `;
}

module.exports = editReminder;