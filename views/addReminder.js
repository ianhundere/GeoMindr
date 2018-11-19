function addReminder() {
    return `
    <div class="formTitle"><h1>Create a Reminder</h1></div>
        <form class="form" action="/createreminder" method="POST">
            <div class="placeholder">
                <label>Latitude: 
                <div class="form-row">
                    <input type="text" name="latitude"/>
                </div>
                </label>
                <label>Longitude:
                <div class="form-row">
                    <input type="text" name="longitude"/>
                </div>
                </label>
                <label>Reminder: 
                <div class="form-row">
                    <input type="text" name="reminder"/>
                </div>
                </label>
                <button>Submit</button>
            </div>
        </form>
        <a href ="/list"> List of GeoMindrs</a><br>
        <a href ="/home"> Go to GeoMindr Menu</a>`;
}

module.exports = addReminder;
