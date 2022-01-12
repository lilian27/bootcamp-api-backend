const notesRouter = require('express').Router()
const Note = require('../models/Note')

// /api/notes
notesRouter.get('/', async (request, response, next) => {
    const notes = await Note.find({})
    response.json(notes)
})

notesRouter.get('/:id', (request, response, next) => {
    const { id } = request.params

    Note.findById(id).then(nota => {
        return nota
            ? response.json(nota)
            : response.status(404).end()
    }).catch(error => next(error))
})

notesRouter.put('/:id', (request, response, next) => {
    const { id } = request.params
    const note = request.body

    const updateInfo = {
        content: note.content,
        important: note.important
    }

    // el 3er parametro que se recibe es para que devuelva el nuevo dato ya actualizado, sino se envia solo devuelve el encontrado antes de actualizar
    Note.findByIdAndUpdate(id, updateInfo, { new: true }).then(resultado => {
        response.json(resultado)
    }).catch(error => next(error))

})

notesRouter.delete('/:id', (request, response, next) => {
    const { id } = request.params

    Note.findByIdAndDelete(id).then(resultado => {
        response.status(204).end()
    }).catch(error => next(error))
})

notesRouter.post('/', async (request, response, next) => {
    const body = request.body
    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const newNote = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date(),
    })
    // guardando datos
    /*
    newNote.save().then(nota => {
        response.json(nota)
    }).catch(error => next(error))
    */
    try {
        const nota = await newNote.save()
        response.json(nota)
    } catch (error) {
        console.log('VOY AL ERROR NEXT()')
        next(error)
    }

})

module.exports = notesRouter