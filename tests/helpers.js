
const { app } = require('../index')
const supertest = require('supertest')
const api = supertest(app)
const User  = require('../models/User')
const initialNotes = [
    {
        content: 'ICH lilian',
        important: true,
        date: new Date()
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

module.exports = {
    api,
    initialNotes,
    getAllContentNotes,
    getUsers
}