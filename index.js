const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')


const PORT = config.PORT || 3001
//const server = http.createServer(app)

const server = app.listen(PORT, () => {
    logger.info(`Server running on port ${PORT}`)
})

module.exports = { server }