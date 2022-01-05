module.exports = (error, request, response, next) => {
    console.log(error)
    if (error.name === 'CastError')
        response.status(400).send({ error: 'Id de busqueda no valido' })
    else
        response.status(500).end()
}