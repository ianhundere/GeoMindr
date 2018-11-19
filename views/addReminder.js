function addReminder() {
    return `
    <div class="formTitle"><h1>Create a Reminder</h1></div>
        <form class="form" action="/createreminder" method="POST">
            <div class="placeholder">
                <label>Latitude: </label>
                <div class="form-row">
                    <input type="text" name="latitude"/>
                </div>
                <label>Longitude: </label>
                <div class="form-row">
                    <input type="text" name="longitude"/>
                </div>
                <label>Phone Number: </label>
                <div class="form-row">
                    <input type="text" name="phone_number"/>
                </div>
                <label>Reminder: </label>
                <div class="form-row">
                    <input type="text" name="reminder"/>
                </div>
                <button>Submit</button>
            </div>
        </form>
        <a href ="/list"> List of GeoMindrs</a><br>
        <a href ="/home"> Go to GeoMindr Menu</a>`;
}

module.exports = addReminder;
