function reminderToItem(reminderObject) {
    return `
        <li>
            ${reminderObject.username}<br>
            ${reminderObject.reminder}<br>
            ${reminderObject.latitude}
            ${reminderObject.longitude}<br>
        </li><br>
    `;
}

function mapList(arrayOfReminders) {
    const reminderItems = arrayOfReminders.map(reminderToItem).join('');
    return `
        <ul>
            ${reminderItems}
        </ul>
        <a href ="/home"> Go to GeoMindr Menu</a>`;
}
module.exports = mapList;
