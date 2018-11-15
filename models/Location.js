const db = require('./db');

class Location {
    constructor(id, latitude, longitude) {
        this.id = id;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    // CREATE
    // static createLocation(latitude, longitude) {
    //     return db.one(`inser into location
    //         (latitude, longitude)
    //     values
    //         ($1, $2)`, [latitude, longitude])
    //     .then(data => {
    //         const nL = new Location(data);
    //         return nL;
    //     });
    // }
    
    // RETRIEVE
    static getById(id) {
        return db.one(`select * from location
            where = $1`, [id])
        .then(data => {
            const resultId = new Location(data);
            return resultId;
        });
    }

    // UPDATE
    


    // DELETE
    static deleteById(id) {
        return db.result(`delete from location
            where id = $1`, [id]);
    }
}

module.exports = Location;
