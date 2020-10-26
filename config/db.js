const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const dotenv = require('dotenv')
dotenv.config()
const mongoDbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.cmde4.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;


let _db;
const initDb = callback => {
    if (_db) {
        console.log('db is initialized')
        return callback(null, _db)
    }
    MongoClient.connect(mongoDbUrl, {useUnifiedTopology: true, useNewUrlParser: true})
    .then(client => {
        _db = client
        callback(null, _db)
    })
    .catch(err => callback(err))
}

const getDb = () => {
    if (!_db) {
        throw Error('db not initialized')
    }
    return _db;
}

module.exports = {
    initDb,
    getDb
}