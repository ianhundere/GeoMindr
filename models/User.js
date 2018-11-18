const db = require('./db');
const bcrypt = require('bcrypt');
const saltRounds = 10;

class User {
    constructor(id, name, username, pwhash, phone_number) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.pwhash = pwhash;
        this.phone_number = phone_number;
    }

    // === ===  CREATE  === === (working)
    static createUser(name, username, password, phone_number) {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        return db
            .one(
                `
            insert into users 
                (name, username, pwhash, phone_number)
            values 
                ($1, $2, $3)
                returning id`,
                [name, username, hash, phone_number]
            )
            .then(data => {
                const u = new User(
                    data.id,
                    data.name,
                    data.username,
                    data.phone_number
                );
                return u;
            });
    }

    // RETRIEVE (working)
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
                const u = new User(result.id, result.name, result.username);
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
                return new User(result.id, result.name, result.username);
            });
    }

    getReminders() {
        return db.any(
            `select reminder from reminders
        where user_id = $1`,
            [this.id]
        );
    }
    passwordDoesMatch(thePassword) {
        const didMatch = bcrypt.compareSync(thePassword, this.pwhash);
        return didMatch;
    }
    // UPDATE (working)
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

    // DELETE (working)
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
