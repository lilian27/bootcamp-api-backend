const notesRouter = require('express').Router()
const Note = require('../models/Note')

// /api/notes
notesRouter.get('/', async (request, response, next) => {
    const notes = await Note.find({})
    response.json(notes)
})

notesRouter.get('/:id', async (request, response, next) => {
    const { id } = request.params
    const note = await Note.findById(id)
    
    return nota
        ? response.json(nota)
        : response.status(404).end()
})

notesRouter.put('/:id', async (request, response, next) => {
    const { id } = request.params
    const note = request.body
    const updateInfo = {
        content: note.content,
        important: note.important
    }

    // el 3er parametro que se recibe es para que devuelva el nuevo dato ya actualizado, sino se envia solo devuelve el encontrado antes de actualizar
    Note.findByIdAndUpdate(id, updateInfo, { new: true })
    response.json(resultado)
})

notesRouter.delete('/:id', async (request, response) => {
    const { id } = request.params

    await Note.findByIdAndDelete(id)
    response.status(204).end()
})

notesRouter.post('/', async (request, response) => {
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

    const nota = await newNote.save()
    response.json(nota)
})

module.exports = notesRouter