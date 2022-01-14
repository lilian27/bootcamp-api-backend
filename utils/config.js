require('dotenv').config()

const PORT = process.env.PORT
console.log("::PORT:: ", PORT);
let MONGO_DB_URI = process.env.NODE_ENV === 'test'
    ? process.env.MONGO_DB_URI_TEST 
    : process.env.MONGO_DB_URI

    console.log("::PORT:: ", PORT);
    console.log("::ambiente:: ", process.env.NODE_ENV);
    console.log("::url :: ", MONGO_DB_URI);
module.exports = {
    PORT,
    MONGO_DB_URI
}

