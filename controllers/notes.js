const notesRouter = require('express').Router()
const Note = require('../models/Note')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// /api/notes
const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

notesRouter.get('/', async (request, response, next) => {
    const notes = await Note.find({}).populate('user', { username: 1, name: 1 })
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

    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)

    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const newNote = new Note({
        content: body.content,
        important: body.important === undefined ? false : body.important,
        date: new Date(),
        user: user._id
    })

    const nota = await newNote.save()
    user.notes = user.notes.concat(nota._id)
    await user.save()

    response.json(nota)
})

module.exports = notesRouter