//const http = require('http')
const express = require('express')
const cors = require('cors')

const app = express()

//liberando cualquier origen
app.use(cors())  
app.use(express.json())

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
    }
]

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Lilian",
        "number": "27-88"
    },
    {
        "id": 3,
        "name": "Isaac",
        "number": "04435"
    },
    {
        "id": 4,
        "name": "daniel_",
        "number": "040-1435"
    }
]

const maxIdRamdom = 999999999

const generateId = (listado) => {
    const maxId = listado.length > 0
        ? Math.max(...listado.map(n => n.id))
        : 0
    return maxId + 1
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}

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

app.get('/info', (request, response) => {
    const resumen = `<p>La guía telefonica tiene ${persons.length} en este momento</p>`
    const fecha = new Date()
    const mensaje = `<div> ${resumen} <div>${fecha}</div></div>`
    response.send(mensaje)
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = persons.find(note => note.id === id)

    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
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

    const note = {
        id: getRandomInt(maxIdRamdom),
        name: body.name,
        number: body.number
    }

    persons = persons.concat(note)
    console.log('ahora perosn', persons);
    response.status(201).json(note)
})


//notas
app.get('/notes', (request, response) => {
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)

    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

app.post('/api/notes', (request, response) => {
    const body = request.body

    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId(notes),
    }
    console.log(request.headers)
    notes = notes.concat(note)
    response.json(note)
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
