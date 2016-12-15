
var dbConnect = require('./db-connect');

module.exports = {
    getAll,
    getOne,
    create //,
    // destroy
};

/**
 * get all destinations
 * @param  {Function} done Called with either error or the array of data
 * @return {[type]}        [description]
 */
function getAll(done) {
    dbConnect(function connectHandler(err, db) {
        if (err) {
            done(err, null);
            return;
        }

        db.collection('destinations')
            .find()
            // .toArray(function recordsRetrieved(err, data) {
            //     if (err) {
            //         done(err);
            //         return;
            //     }
            //     done(null, data);
            // });
            .toArray(done);  // OR just do this! Same thing as above
    });
}

function getOne() {

}

/**
 * [create description]
 * @param  {[type]}   data [description]
 * @param  {Function} done [description]
 * @return {[type]}        [description]
 */
function create(data, done) {
    dbConnect(function connectHandler(err, db) {
        if (err) { /* handle it! */ }

        data.createTime = Date.now();
        db.collection('destinations')
            .insert(data, done);
    });
}
