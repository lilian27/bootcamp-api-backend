const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/User')

//    /api/users

usersRouter.get('/', async (request, response, next) => {
    const user = await User.find({}).populate('notes', { content: 1, date: 1 })

    response.json(user)
})

usersRouter.post('/', async (request, response) => {
    const { body } = request
    const { username, name, password } = body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const userNew = new User({
        username,
        name,
        passwordHash
    })

    const savedUser = await userNew.save()

    response.status(201).json(savedUser)
})

module.exports = usersRouter