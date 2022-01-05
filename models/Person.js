const {Schema, model } = require('mongoose')

const personSchema = new Schema({
    name: String,
    number: Number
})


personSchema.set('toJSON', {
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// el esquema es a nivel de aplicacion no de BDD
const Person = model('Person', personSchema)

module.exports = Person
