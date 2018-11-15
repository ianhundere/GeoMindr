const db = require('./db');

class Init_Reminder {
    constructor(id, phone, lat, lon, time_stamp) {
        this.id = id;
        this.phone = phone;
        this.lat = lat;
        this.lon = lon;
        this.time_stamp = time_stamp;
    }
}

// CREATE

// RETRIEVE

// UPDATE

// DELETE

module.exports = Init_Reminder;
