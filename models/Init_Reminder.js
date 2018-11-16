const db = require('./db');

class Init_Reminder {
    constructor(id, phone, lat, lon, time_stamp) {
        this.id = id;
        this.phone = phone;
        this.lat = lat;
        this.lon = lon;
        this.time_stamp = time_stamp;
    }

    // DELETE AFTER 5 MIN
    static deleteAfterNoResponse(id) {
        console.log('delete me!!');
        setTimeout(
            () =>
                db.result(
                    `delete from init_reminders
                        where id = $1`,
                    [id]
                ),
            10
        );
    }
}

module.exports = Init_Reminder;
