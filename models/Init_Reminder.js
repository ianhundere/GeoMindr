const db = require('./db');

class Init_Reminder {
    constructor(id, phone, lat, lon, time_stamp) {
        this.id = id;
        this.phone = phone;
        this.lat = lat;
        this.lon = lon;
        this.time_stamp = time_stamp;
    }

    // === ===  CREATE  === === (in process)
    static createInit(phone, lat, lon, time_stamp) {
        return db
            .one(
                `insert into init_reminders
            (phone, lat, lon, time_stamp)
        values
            ($1, $2, $3, $4)
        returning id, phone, lat, lon, time_stamp`,
                [phone, lat, lon, time_stamp]
            )
            .then(result => {
                const create = new Init_Reminder(
                    result.id,
                    result.phone,
                    result.lat,
                    result.lon,
                    result.time_stamp
                );
                return create;
            });
    }

    // DELETE AFTER 5 MIN (working)
    static deleteAfterNoResponse(id, callback) {
        console.log('delete me!!');
        setTimeout(
            () =>
                db
                    .result(
                        `delete from init_reminders
                        where id = $1`,
                        [id]
                    )
                    .then(callback),
            300000
        );
    }
}

module.exports = Init_Reminder;
