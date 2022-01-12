const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        minlength: 5,
        required: true
    },
    date: Date,
    important: Boolean,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})


// internamente se ejecuta el toJSON aqui se puede transformar el objeto esperado y establecer como va a ser expuesto
noteSchema.set('toJSON', {
    transform: (document, returnedObject) =>{
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

// el esquema es a nivel de aplicacion no de BDD
module.exports = mongoose.model('Note', noteSchema)