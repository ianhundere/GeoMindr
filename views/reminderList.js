function reminderToItem(reminderObject) {
    return `
        <li>
            ${reminderObject.reminder}
        </li>
    `;
}

function reminderList(arrayOfReminders) {
    const reminderItems = arrayOfReminders.map(reminderToItem).join('');
    return `
        <ul>
            ${reminderItems}
        </ul>
    <button method="/create"> Add another Reminder</button><br>
        <button method="/home"> Go to GeoMindr Menu</button>`;
}
module.exports = reminderList;
