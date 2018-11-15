const db = require('./db');

class Reminder {
    constructor(id, reminder, is_public, location_id, user_id) {
        this.id = id;
        this.reminder = reminder;
        this.is_public = is_public;
        this.location_id = location_id;
        this.user_id = user_id;
    }

    // === ===  CREATE  === ===
    static createReminder(reminder, is_public, location_id, user_id) {
        console.log('!!!!!!!!', user_id);
        return db
            .one(
                `insert into reminders
            (reminder, is_public,location_id, user_id)
        values
            ($1, $2, $3, $4)
        returning id`,
                [reminder, is_public, location_id, user_id]
            )
            .then()
            .then(result => {
                const create = new Reminder(
                    result.id,
                    result.reminder,
                    result.is_public,
                    result.location_id,
                    result.user_id
                );
                return create;
            });
    }

    // NOTE: For createReminder, would a user_id need to be assigned???

    // === ===  RETRIEVE  === ===
    static getById(id) {
        return db
            .one(
                `select * from reminders
            where (id) = $1`,
                [id]
            )
            .then(result => {
                console.log(result.id);
                new Reminder(
                    result.id,
                    result.reminder,
                    result.is_public,
                    result.location_id,
                    result.user_id,
                    result.remind_init_id
                );
                return result.reminder;
            });
    }
    static getAll() {
        return db.any(`select * from reminders`);
    }

    static getByReminder(reminder) {
        return db.one(
            `select * from reminders
            where reminder ilike '%$1:raw%'`,
            [reminder]
        );
    }
    // === ===  UPDATE  === ===
    updateReminder(reminder) {
        return db
            .results(
                `update reminders
            set reminder = $2
        where id = $1`,
                [this.id, reminder]
            )
            .then(result => {
                return result.rowCount === 1;
            });
    }

    // === ===  DELETE  === ===
    deleteById(id) {
        return db.result(
            `delete from reminders
            where id = $1
            returning id`,
            [id]
        );
    }
}

module.exports = Reminder;
