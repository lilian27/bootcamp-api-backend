const mongoose = require('mongoose')

require('dotenv').config();

const uri = `mongodb+srv://${process.env.USERBDD}:${process.env.PASSWORDBDD}@cluster0.ufe1a.mongodb.net/${process.env.DBNAMEBDD}?retryWrites=true&w=majority`;

// conex  a mongodb
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('base de datos conectada'))
    .catch(e => console.log('error conectando BDD', e));

//cerrando conex    
/*
process.on('uncaughtException', () =>{
    mongoose.connection.disconnect()
})
*/