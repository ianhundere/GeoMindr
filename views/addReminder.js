function addReminder() {
    return `
    <div class="formTitle"><h1>Create a Reminder</h1></div>
        <form class="form" action="/create" method="POST">
            <div class="placeholder">
                <label>Reminder</label>
                <div class="form-row">
                    <input type="text" name="reminders"/>
                    <button>Submit</button>
                </div>
            </div>
        </form>
        `;
}
module.exports = addReminder;
