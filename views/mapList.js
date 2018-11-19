function reminderToItem(reminderObject) {
    return `
        <li>
            ${reminderObject.reminder}
        </li>
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
