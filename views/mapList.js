function reminderToItem(reminderObject) {
    return `
        <tr tabindex="0" onfocus="focusReminder(${reminderObject.latitude}, ${reminderObject.longitude})" onblur="blurReminder(${reminderObject.latitude}, ${reminderObject.longitude})">
            <td>${reminderObject.username}</td>
            <td>${reminderObject.reminder}</td>
            <td>${Number(reminderObject.latitude).toFixed(6)}</td>
            <td
                data-username="${reminderObject.username}"
                data-reminder="${reminderObject.reminder}"
                data-lat="${reminderObject.latitude}"
                data-lon="${reminderObject.longitude}"
            >${Number(reminderObject.longitude).toFixed(6)}</td>
        </tr>
    `;
}

function mapList(arrayOfReminders) {
    const reminderItems = arrayOfReminders.map(reminderToItem).join('');
    return `

        <div class='mapList'>
            <div class='mapListContainer'>
                <div class='columnTable'>
                    <div class="tableTitle"><h1>Surrounding GeoMindrs</h1></div>
                    <table>
                    <tr>
                        <th>User</th><th>GeoMindr</th><th>Lat</th><th>Lon</th>
                    </tr>
                        ${reminderItems}
                    </table>
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
        `;
}
module.exports = mapList;
