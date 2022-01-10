
const { app } = require('../index')
const supertest = require('supertest')
const api = supertest(app)
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

module.exports = {
    api,
    initialNotes,
    getAllContentNotes
}