const mongoose = require('mongoose')

require('dotenv').config();


const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } = process.env
console.log("AMBIENTE :", NODE_ENV)

const conection_string = NODE_ENV === 'test'
    ? MONGO_DB_URI_TEST
    : MONGO_DB_URI

console.log("ENV URL CONEX:", conection_string)
// conex  a mongodb
mongoose.connect(conection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('--> Database connected <--')
}).catch(err => {
    console.error(err)
})

//cerrando conex    
process.on('uncaughtException', error => {
    console.error('error conectando BDD:', error)
    mongoose.disconnect()
})
