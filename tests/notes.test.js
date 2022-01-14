
const mongoose = require('mongoose')
//const { server } = require('../index')
const Note = require('../models/Note')

//const { api, initialNotes, getAllContentNotes } = require('./helpers')
const initialNotes  = require('./helpers')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

beforeEach(async () => {
    await Note.deleteMany({})

    // en paralelo - los lanza todos al mismo iempo pero no en orden esperado
    /*
    const notesObjects = initialNotes.map(note => new Note(note))
    const promises = notesObjects.map(note => note.save())
    await Promise.all(promises)
    */

    // en secuenca  - respetan el orden
    for (let note of initialNotes) {
        const notesObjects = new Note(note)
        await notesObjects.save()
    }
})

describe('GET all notes', () => {
    test('api notes returned as json', async () => {
        await api
            .get('/api/notes')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('api notes have two notes', async () => {
        const response = await api.get('/api/notes')
        expect(response.body).toHaveLength(2)
    })

    test('the first note is ICH lilian', async () => {
        const { contents } = await getAllContentNotes()
        expect(contents).toContain('ICH lilian')
    })
})

describe('Add new note', () =>{
    test('a vali note can be added', async () => {
        const newNote = {
            content: 'agregando nuevo',
            import: true
        }
    
        await api
            .post('/api/notes')
            .send(newNote)
            .expect(200)
            .expect('Content-Type', /application\/json/)
    
        const { contents, response } = await getAllContentNotes()
    
        expect(response.body).toHaveLength(initialNotes.length + 1)
        expect(contents).toContain(newNote.content)
    })
    
    
    test('note without conten is not added', async () => {
        const newNote = {
            import: true
        }
    
        await api
            .post('/api/notes')
            .send(newNote)
            .expect(400)
    
        const response = await api.get('/api/notes')
    
        expect(response.body).toHaveLength(initialNotes.length)
    })
})

describe('Delete a note', () =>{
    test('a note can be deleted', async () => {
        const { response: firstResponse } = await getAllContentNotes()
        const { body: notes } = firstResponse
        const noteToDelete = notes[0]
    
        await api
            .delete(`/api/notes/${noteToDelete.id}`)
            .expect(204)
    
        // validar despues que se borro
        const { contents, response: secondResponse } = await getAllContentNotes()
        // que en la bdd exista -1
        expect(secondResponse.body).toHaveLength(initialNotes.length - 1)
        // que la BDD en get no lo traiga
        expect(contents).not.toContain(noteToDelete.content)
    })
    
    test('a note that do not exist can not be deleted', async () => {
        await api
            .delete('/api/notes/1234')
            .expect(400)
    
        // validar despues que se borro
        const { response } = await getAllContentNotes()
        // que en la bdd exista == 
        expect(response.body).toHaveLength(initialNotes.length)
    
    })
})

// se ejecuta cuando terinen todos los test

afterAll(async () => {
    await mongoose.connection.close()
    //await server.close()
    await new Promise(resolve => setTimeout(() => resolve(), 500)); // PLUS THE HACK PROVIDED BY @yss14
})
