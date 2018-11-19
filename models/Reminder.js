const db = require('./db');

class Reminder {
    constructor(id, reminder, is_public, location_id, user_id) {
        this.id = id;
        this.reminder = reminder;
        this.is_public = is_public;
        this.location_id = location_id;
        this.user_id = user_id;
    }

    // === ===  CREATE  === === (working)
    static createReminder(reminder, is_public, location_id, user_id) {
        return db
            .one(
                `insert into reminders
            (reminder, is_public,location_id, user_id)
        values
            ($1, $2, $3, $4)
        returning id, reminder, is_public, location_id, user_id`,
                [reminder, is_public, location_id, user_id]
            )
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

    // === ===  RETRIEVE  === === (working)
    static getById(id) {
        return db
            .one(
                `select * from reminders
            where id = $1`,
                [id]
            )
            .catch(err => {
                return {
                    name: 'no reminder found.'
                };
            })
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
    static getAll() {
        return db.any(`select * from reminders`).then(reminderArray => {
            const getAllArray = reminderArray.map(reminderObj => {
                const r = new Reminder(reminderObj.id, reminderObj.reminder);
                return r;
            });
            return getAllArray;
        });
    }

    getReminders() {
        return db.any(
            `
            select * from reminders
                where user_id = $1
        `,
            [this.id]
        );
    }
    // === ===  UPDATE  === === (working)
    updateReminder(reminder) {
        return db
            .result(
                `update reminders
            set reminder = $2
        where id = $1`,
                [this.id, reminder]
            )
            .then(result => {
                return result.rowCount === 1;
            });
    }

    // === ===  DELETE  === === (working)
    deleteById(id) {
        return db.result(
            `delete from reminders
            where id = $1`,
            [id]
        );
    }
}

module.exports = Reminder;
