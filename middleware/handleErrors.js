module.exports = (error, request, response, next) => {
    console.log("HANDLE ERROR:",error)
    if (error.name === 'CastError')
        return response.status(400).send({ error: 'Id de busqueda no valido' })
    else if (error.name === 'ValidationError')
        return response.status(400).json({ error: error.message })
    else
        return response.status(500).end()

    next(error)
}