
const app = require('../app')
const supertest = require('supertest')
const api = supertest(app)
const User  = require('../models/User')
const initialNotes = [
    {
        content: 'ICH lilian',
        important: true,
        date: new Date(),
        "id": "61e5ab4f6e644b46107e45f8"
    },
    {
        content: 'segundo registro',
        important: true,
        date: new Date()
    }
]

const getAllContentNotes = async () => {
    const response = await api.get('/api/notes')
    return {
        contents: response.body.map(note => note.content),
        response
    }
}

const getUsers = async () => {
    const usersDB = await User.find({})
    return usersDB.map(user => user.toJSON())
}

const notesInDb = async () => {
    const notes = await Note.find({})
    return notes.map(note => note.toJSON())
  }

module.exports = {
    api,
    initialNotes,
    getAllContentNotes,
    getUsers, 
    notesInDb
}