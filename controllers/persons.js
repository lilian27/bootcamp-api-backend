const personsRouter = require('express').Router()
const Person = require('../models/Person')

//   /api/persons

//personas
personsRouter.get('/', (request, response, next) => {
    Person.find({}).then(respuesta => {
        response.json(respuesta)
    }).catch(error => next(error))
})

personsRouter.get('/:id', (request, response, next) => {
    const { id } = request.params

    Person.findById(id).then(respuesta => {
        return respuesta
            ? response.json(respuesta)
            : response.status(404).end()
    }).catch(error => next())
})

personsRouter.delete('/:id', (request, response, next) => {
    const { id } = request.params

    Person.findByIdAndDelete(id).then(respuesta => {
        response.status(204).end()
    }).catch(error => next())

})

personsRouter.post('/', (request, response, next) => {
    const body = request.body

    if (!body.name) {
        return response.status(400).json({
            error: 'Nombre no puede ser vacío'
        })
    }
    if (!body.number) {
        return response.status(400).json({
            error: 'Número no puede ser vacío'
        })
    }

    const newPerson = new Person({
        name: body.name,
        number: body.number
    })

    newPerson.save().then(persona => {
        response.json(persona)
    }).catch(error => next(error))
})

personsRouter.put('/:id', (request, response, next) => {
    const { id } = request.params
    const note = request.body

    const updateInfo = {
        number: note.number
    }

    Person.findByIdAndUpdate(id, updateInfo, { new: true }).then(resultado => {
        console.log("resultado", resultado)
        response.json(resultado)
    }).catch(error => next(error))
})

module.exports = personsRouter