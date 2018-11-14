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
}

// CREATE

// RETRIEVE

// UPDATE

// DELETE

module.exports = Reminder;
