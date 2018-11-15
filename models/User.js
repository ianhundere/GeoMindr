const db = require('./db');

class User {
    constructor(id, name, username, password, phone_number) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.phone_number = phone_number;
    }

    // CREATE
    static add(name, username, password, phone_number) {
        return db
            .one(
                `
            insert into users 
                (name, username, password, phone_number)
            values 
                ($1, $2, $3, $4)
                returning id`,
                [name, username, password, phone_number]
            )
            .then(data => {
                const u = new User(data.id, name, username, phone_number);
                return u;
            });
    }

    // RETRIEVE
    static getAll() {
        return db.any(`select * from users`).then(userArray => {
            const instanceArray = userArray.map(userObj => {
                const u = new User(userObj.id, userObj.name);
                return u;
            });
            return instanceArray;
        });
    }
    static getByPhone(phone_number) {
        return db
            .one('select * from users where phone_number = $1', [phone_number])
            .then(result => {
                // console.log('look at my', result.id);
                return result.id;
            });
    }

    static getById(id) {
        return db
            .one('select * from users where id = $1', [id])
            .then(result => {
                const u = new User(result.id, result.name);
                return u;
            });
    }

    static getByUserName(username) {
        return db
            .one(
                `
            select * from users 
            where username ilike '%$1:raw%'
            `,
                [username]
            )
            .then(result => {
                console.log(result);
                return new User(
                    result.id,
                    result.name,
                    result.username,
                    result.password
                );
            });
    }

    getReminders() {
        return db.any(
            `select * from reminders
        where user_id = $1`,
            [this.id]
        );
    }

    // UPDATE
    updateName(name) {
        this.name = name;
        return db
            .result(
                `update users
                    set name=$2
                    where id=$1`,
                [this.id, name]
            )
            .then(result => {
                return result.rowCount === 1;
            });
    }

    // DELETE
    delete() {
        return db.result(
            `delete from users
        where id = $1`,
            [this.id]
        );
    }
    static deleteById(id) {
        return db.result(
            `delete from users
        where id = $1`,
            [id]
        );
    }
}
module.exports = User;
