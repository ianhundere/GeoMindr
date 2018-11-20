const db = require('./db');

class Location {
    constructor(id, latitude, longitude) {
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    // CREATE (working)
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

    // RETRIEVE (working)
    static getById(id) {
        return db
            .one(
                `select * from locations
            where id = $1`,
                [id]
            )
            .then(result => {
                const create = new Location(
                    result.id,
                    result.latitude,
                    result.longitude
                );
                return create;
            });
    }

    // DELETE (working)
    static deleteById(id) {
        return db.result(
            `delete from locations
            where id = $1`,
            [id]
        );
    }
}

module.exports = Location;
