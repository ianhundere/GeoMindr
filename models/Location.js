const db = require('./db');

class Location {
    constructor(id, latitude, longitude) {
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    // CREATE
    static createLocation(latitude, longitude) {
        return db
            .one(
                `insert into locations
            (latitude, longitude)
        values
            ($1, $2)
                returning id`,
                [latitude, longitude]
            )
            .then(data => {
                return data.id;
            });
    }

    // RETRIEVE
    static getById(id) {
        return db
            .one(
                `select * from locations
            where = $1`,
                [id]
            )
            .then(data => {
                const resultId = new Location(data.id);
                return resultId;
            });
    }

    // DELETE
    static deleteById(id) {
        return db.result(
            `delete from locations
            where id = $1`,
            [id]
        );
    }
}

module.exports = Location;
