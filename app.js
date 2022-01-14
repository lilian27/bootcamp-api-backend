const config = require('./utils/config')
const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')

const usersRouter = require('./controllers/users')
const notesRouter = require('./controllers/notes')
const personsRouter = require('./controllers/persons')

const logger = require('./utils/logger')
const notFound = require('./middleware/notFound.js')
const middleware = require('./middleware/middleware.js')

const mongoose = require('mongoose')
require('dotenv').config();

logger.info('connecting URL to', config.MONGO_DB_URI)

mongoose.connect(config.MONGO_DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connection to MongoDB:', error.message)
    })

app.use(cors()) //liberando cualquier origen
app.use(express.json())
app.use('/images', express.static('images')) //disponiendoimagenes
app.use(middleware.requestLogger)

app.use('/api/users', usersRouter)
app.use('/api/notes', notesRouter)
app.use('/api/persons', personsRouter)

//midlware de errores
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app