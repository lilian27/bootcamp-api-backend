require('./mongo')  // como se importa y se ejecuta y se conecta y ya o hacer una funcion en mongo y llamarla
//const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')

const Note = require('./models/Note')
const Person = require('./models/Person')
const notFound = require('./middleware/notFound.js')
const handleErrors = require('./middleware/handleErrors.js')

app.use(cors()) //liberando cualquier origen
app.use(express.json())
app.use('/images', express.static('images'))

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

app.use(requestLogger)

app.get('/', (request, response) => {
    response.send('<h1>hola mundo!!</h1>')
})

//personas
app.get('/api/persons', (request, response, next) => {
    Person.find({}).then(respuesta => {
        response.json(respuesta)
    }).catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {
    const { id } = request.params

    Person.findById(id).then(respuesta => {
        return respuesta
            ? response.json(respuesta)
            : response.status(404).end()
    }).catch(error => next())
})

app.delete('/api/persons/:id', (request, response, next) => {
    const { id } = request.params

    Person.findByIdAndDelete(id).then(respuesta => {
        response.status(204).end()
    }).catch(error => next())

})

app.post('/api/persons', (request, response, next) => {
    const body = request.body

    if (!body.name) {
        return response.status(400).json({
            error: 'Nombre no puede ser vacío'
        })
    }
    if (!body.number) {
        return response.status(400).json({
            error: 'Número no puede ser vacío'
        })
    }

    const newPerson = new Person({
        name: body.name,
        number: body.number
    })

    newPerson.save().then(persona => {
        response.json(persona)
    }).catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
    const { id } = request.params
    const note = request.body

    const updateInfo = {
        number: note.number
    }

    Person.findByIdAndUpdate(id, updateInfo, { new: true }).then(resultado => {
        console.log("resultado",resultado)
        response.json(resultado)
    }).catch(error => next(error))
})

//### Notas
app.get('/api/notes', (request, response, next) => {
    Note.find({}).then(notes => {
        response.json(notes)
    }).catch(error => next(error))

})

app.get('/api/notes/:id', (request, response, next) => {
    const { id } = request.params

    Note.findById(id).then(nota => {
        return nota
            ? response.json(nota)
            : response.status(404).end()
    }).catch(error => next(error))
})

app.put('/api/notes/:id', (request, response, next) => {
    const { id } = request.params
    const note = request.body

    const updateInfo = {
        content: note.content,
        important: note.important
    }

    // el 3er parametro que se recibe es para que devuelva el nuevo dato ya actualizado, sino se envia solo devuelve el encontrado antes de actualizar
    Note.findByIdAndUpdate(id, updateInfo, { new: false }).then(resultado => {
        response.json(resultado)
    }).catch(error => next(error))
})

app.delete('/api/notes/:id', (request, response, next) => {
    const { id } = request.params

    Note.findByIdAndDelete(id).then(resultado => {
        response.status(204).end()
    }).catch(error => next(error))
})

app.post('/api/notes', (request, response, next) => {
    const body = request.body
    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const newNote = new Note({
        content: body.content,
        important: body.important || false,
        date: new Date(),
    })
    // guardando datos
    newNote.save().then(nota => {
        response.json(nota)
    }).catch(error => next(error))
})

//midlware de 404
app.use(notFound)

//midlware de errores
app.use(handleErrors)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
