require('./mongo')  // como se importa y se ejecuta y se conecta y ya o hacer una funcion en mongo y llamarla
//const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('./utils/logger')
const notFound = require('./middleware/notFound.js')
const handleErrors = require('./middleware/handleErrors.js')
const usersRouter = require('./controllers/users')
const notesRouter = require('./controllers/notes')
const personsRouter = require('./controllers/persons')

app.use(cors()) //liberando cualquier origen
app.use(express.json())
app.use('/images', express.static('images')) //disponiendoimagenes


const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}


app.use(requestLogger)

app.use('/api/users', usersRouter)
app.use('/api/notes', notesRouter)
app.use('/api/persons', personsRouter)

//midlware de 404
app.use(notFound)

//midlware de errores
app.use(handleErrors)

const PORT = process.env.PORT || 3001
const server = app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
})

module.exports = { app, server }