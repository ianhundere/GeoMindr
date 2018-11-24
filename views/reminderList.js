function reminderToItem(reminderObject) {
    return `
        <li
            data-username="${reminderObject.username}"
            data-reminder="${reminderObject.reminder}"
            data-lat="${reminderObject.latitude}"
            data-lon="${reminderObject.longitude}"
            >
            
            ${reminderObject.reminder} 
            <a href='/mylist/${reminderObject.id}/edit'><i class="far fa-edit" title="Edit"></i></a>
            <button onclick="youSure(${reminderObject.id})"><i class="far far fa-trash-alt" title="Delete"></i></button>

        </li>                                               
    `;
}

function reminderList(arrayOfReminders) {
    const reminderItems = arrayOfReminders.map(reminderToItem).join('');
    return `
        <div class='reminderList'>
            <div class='reminderListContainer'>
                <div class='columnList'>
                    <div class="tableTitle"><h1>My GeoMindrs</h1></div>
                        <ul>
                            ${reminderItems}
                        </ul>
                </div> 
                <div class='columnMap'>
                    <div class='mapContainer'>
                        <div id="map"></div>
                    </div>
                </div>
            </div>
        </div>

        
        <script src="scripts.js"></script>
        <script async defer 
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyATg8I-7sRcc4jlqUhTAxWDOv8gHanaLXA&callback=initPubMap"></script>
        <script>function youSure(arg) {
        if (confirm("Are you sure you want to delete this GeoMindr?")) {
            window.location = "/delete/"+arg
        }
    }</script>
    `;
}
module.exports = reminderList;
