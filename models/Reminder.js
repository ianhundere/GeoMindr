const db = require('./db');

class Reminder {
    constructor(id, reminder, is_public, location_id, user_id, remind_init_id) {
        this.id = id;
        this.reminder = reminder;
        this.is_public = is_public;
        this.location_id = location_id;
        this.user_id = user_id;
        this.remind_init_id = remind_init_id;
    }

    // === ===  CREATE  === ===
    static createReminder(reminder, is_public, /* user_id */) {
        return db.one(`insert into reminder
            (reminder, is_public, user_id)
        values
            ($1, $2, $3)
        returning id`, [reminder, is_public, /* user_id */])
        .then(result => {
            const create = new Reminder(result.id, reminder, is_public);
            return create;
        });
    }
    
    // NOTE: For createReminder, would a user_id need to be assigned??? 

    // === ===  RETRIEVE  === ===
    static getById(id) {
        return db.one(`select * from reminder
            where (id) = $1`, [id])
        .then(result => {
            const thisId = new Reminder(result);
            return thisId; 
        });
    }

    static getAll() {
        return db.any(`select * from reminder`);
    }

    static getByReminder(reminder) {
        return db.one(`select * from reminder
            where reminder ilike '%$1:raw%'`, [reminder])
    }

    // === ===  UPDATE  === ===
    updateReminder(reminder) {
        return db.results(`update reminder
            set reminder = $2
        where id = $1`, [this.id, reminder])
        .then(result => {
            return result.rowCount === 1;
        })
    }

    // === ===  DELETE  === ===
    static deleteById(id) {
        return db.restul(`delete from reminders
            where id = $1`, [id]);
    }
  
}

module.exports = Reminder;