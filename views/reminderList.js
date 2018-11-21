function reminderToItem(reminderObject) {
    return `
        <li
            data-username="${reminderObject.username}"
            data-reminder="${reminderObject.reminder}"
            data-lat="${reminderObject.latitude}"
            data-lon="${reminderObject.longitude}"
            >
            
            ${reminderObject.reminder} 
        <button><a href='/mylist/${reminderObject.id}/edit'><i class="far fa-edit" title="Edit"></i></a></button><button onclick="youSure(${reminderObject.id})"><i class="far far fa-trash-alt" title="Delete"></i></button>

        </li>                                               
    `;
}

function reminderList(arrayOfReminders) {
    const reminderItems = arrayOfReminders.map(reminderToItem).join('');
    return `
        <ul>
            ${reminderItems}
        </ul>
        <div id="map"></div>

        
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
