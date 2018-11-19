const db = require('./db');

class Init_Reminder {
    constructor(id, phone, lat, lon, time_stamp) {
        this.id = id;
        this.phone = phone;
        this.lat = lat;
        this.lon = lon;
        this.time_stamp = time_stamp;
    }

    // === ===  CREATE  === === (working)
    static createInit(phone, lat, lon, time_stamp) {
        // before inserting, delete any expired records
        // and delete any previous entries for this phone
        let exp_time = time_stamp - 300000;
        return db.result(`delete from init_reminders
                    where time_stamp < $1 OR phone = $2`,
                    [exp_time, phone]
        )
            .then(r => {
                //insert new record in init_reminders
                
                db.one(`insert into init_reminders
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
                });
    }

    // === ===  RETRIEVE  === === (working)
    static getByPhone(phone_number) {
        return db
            .one('select * from init_reminders where phone = $1', [
                phone_number
            ])
            .then(result => {
                const create = new Init_Reminder(
                    result.id,
                    result.phone,
                    result.lat,
                    result.lon,
                    result.time_stamp
                );
                return create;
            })
            .catch(err => {
                return { id: 'not initiated' };
            });
    }

    // === === DELETE === === (working)
    deleteInit() {
        //console.log('delete me!!');
        db.result(`delete from init_reminders
                    where phone = $1`,
                    [this.phone]
        )};
}

module.exports = Init_Reminder;
