
const mongoose = require('mongoose')
const { server } = require('../index')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const { api, getUsers } = require('./helpers')

describe('Created a new user', () => {
    beforeEach(async () => {
        await User.deleteMany({})

        const passwordHash = await bcrypt.hash('pswd', 10)
        const user = new User({ username: 'lilian', passwordHash })

        await user.save()
    })

    test('works as expected creating a fresh username', async () => {
        // cuantos usuarios al princio en la BDD
        const usersAtStart = await getUsers()

        const newUser = {
            username: 'isaacParra',
            name: 'Isaac Parra',
            password: 'myClave'
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const userAtEnd = await getUsers()
        expect(userAtEnd).toHaveLength(usersAtStart.length + 1)

        // buscar en el nuvo username en la BDD
        const usernames = userAtEnd.map(user => user.username)
        expect(usernames).toContain(newUser.username)
    })
})

// se ejecuta cuando terinen todos los test
/*
afterAll(async () => {
    await mongoose.connection.close()
    await server.close()
    await new Promise(resolve => setTimeout(() => resolve(), 500)); // PLUS THE HACK PROVIDED BY @yss14
})
*/
afterAll(() => {
    mongoose.connection.close()
  })