const {Schema, model } = require('mongoose')

const noteSchema = new Schema({
    content: String,
    date: Date,
    important: Boolean
})


// internamente se ejecuta el toJSON aqui se puede transformar el objeto esperado y establecer como va a ser expuesto
noteSchema.set('toJSON', {
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// el esquema es a nivel de aplicacion no de BDD
const Note = model('Note', noteSchema)

module.exports = Note