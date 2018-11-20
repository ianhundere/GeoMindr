function reminderToItem(reminderObject) {
    return `
        <li>${reminderObject.reminder}<a href="/mylist/${
        reminderObject.id
    }/edit">(update)</a>

        </li>
    `;
}

function reminderList(arrayOfReminders) {
    const reminderItems = arrayOfReminders.map(reminderToItem).join('');
    return `
        <ul>
            ${reminderItems}
        </ul>
    <a href ="/create"> Add GeoMindr</a><br>
        <a href ="/home"> Go to GeoMindr Menu</a>`;
}
module.exports = reminderList;
