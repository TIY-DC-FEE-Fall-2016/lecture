
var mongodb = require('mongodb');

var uri = process.env.TRAVEL_DB_URI;

module.exports = function connect(done) {
    mongodb.MongoClient.connect(uri, done);
};
