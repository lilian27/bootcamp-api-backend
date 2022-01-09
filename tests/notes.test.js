
const supertest = require('supertest')
const mongoose = require('mongoose')


const { app, server } = require('../index')

const api = supertest(app)



test('api notes returned as json', async () => {

    await api
        .get('/api/notes')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

// se ejecuta cuando terinen todos los test
afterAll(async() => {
    await mongoose.connection.close()
    await server.close()
    await new Promise(resolve => setTimeout(() => resolve(), 500)); // PLUS THE HACK PROVIDED BY @yss14
})
