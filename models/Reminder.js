const db = require('./db');

class Reminders {
    constructor(id, reminder, is_public) {
        this.id = id, 
        this.reminder = reminder, 
        this.is_public = is_public;
    }

    // === ===  CREATE  === ===
    static createReminder(reminder, is_public) {
        return db.one(
            `insert into reminders
                (reminder, is_public)
            values
                ($1, $2)
            returning id`, [reminder, is_public])
            .then(result => {
                const create = new Reminders(result.id, reminder, is_public);
                return create;
            });
    }
    
    // === ===  RETRIEVE  === ===
    static getById(id) {
        return db.one(
            `select * from reminders
                where (id) = $1`, [id])
            .then(result => {
                const thisId = new Reminders(result);
                return thisId; 
            });
    }

    static getAll() {
        return db.any(
            `select * from reminders`);
    }


    // === ===  UPDATE  === ===


    // === ===  DELETE  === ===




}

