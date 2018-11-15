const db = require('./db');

class Init_Reminder {
    constructor(id, phone, lat, lon, time_stamp) {
        this.id = id;
        this.phone = phone;
        this.lat = lat;
        this.lon = lon;
        this.time_stamp = time_stamp;
    }

    // DELETE AFTER 2 MIN
    static deleteAfterNoResponse(id) {
        setTimeout(
            () =>
                db.result(
                    `delete from init_reminders
        where id = $1`,
                    [id]
                ),
            300
        );
    }
}

module.exports = Init_Reminder;
