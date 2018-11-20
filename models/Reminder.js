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

    static getReminderForUpdate(id) {
        return db.one(
            `
            select reminders.id, reminders.reminder, reminders.is_public, locations.latitude, 
            locations.longitude from reminders 
            Inner Join locations on reminders.location_id=locations.id
            where reminders.id = $1
            `,
            [id]
        );
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

    static getRemindersPublic() {
        return db.any(
            `
            select users.username, reminders.reminder, locations.latitude, locations.longitude from reminders 
            Inner Join locations on reminders.location_id=locations.id
            Inner Join users on reminders.user_id=users.id
            where reminders.is_public=true
            `
        );
    }

    static getRemindersUser(userID) {
        return db.any(
            `
            select users.username, reminders.reminder, locations.latitude, locations.longitude from reminders 
            Inner Join locations on reminders.location_id=locations.id
            Inner Join users on reminders.user_id=users.id
            where reminders.user_id = $1
            `, [userID]
        );
    }

    // === ===  UPDATE  === === (working)
    updateReminder(reminder, is_public, latitude, longitude) {
        return db
            .one(
                `update reminders
            set reminder = $2,
            is_public = $3
        where id = $1
        returning location_id`,
                [this.id, reminder, is_public]
            )
            .then(result => {
                console.log(result, '!!!!');
                db.one(
                    `update locations
            set latitude = $2,
            longitude = $3
        where id = $1`,
                    [result.location_id, latitude, longitude]
                );
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
