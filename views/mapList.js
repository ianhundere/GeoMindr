function reminderToItem(reminderObject) {
    return `
        <tr>
            <td>${reminderObject.username}</td>
            <td>${reminderObject.reminder}</td>
            <td
                data-username="${reminderObject.username}"
                data-reminder="${reminderObject.reminder}"
                data-lat="${reminderObject.latitude}"
                data-lon="${reminderObject.longitude}"
            >${reminderObject.latitude} / ${reminderObject.longitude}</td>
        </tr>
    `;
}

function mapList(arrayOfReminders) {
    const reminderItems = arrayOfReminders.map(reminderToItem).join('');
    return `
        <table>
        <tr>
            <td>User Name</td><td>GeoMindr</td><td>Lat / Lon</td>
        </tr>
            ${reminderItems}
        </table>
        <div id="map"></div>
        <a href ="/home"> Go to GeoMindr Menu</a>
        
        <script src="scripts.js"></script>
        <script async defer 
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyATg8I-7sRcc4jlqUhTAxWDOv8gHanaLXA&callback=initPubMap"></script>
        `;
}
module.exports = mapList;
