const mongoose = require('mongoose')


const personSchema = new mongoose.Schema({
    name: String,
    number: Number
})


personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// el esquema es a nivel de aplicacion no de BDD
module.exports = mongoose.model('Person', personSchema)