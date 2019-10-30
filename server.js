require('dotenv').config()
const express = require('express') 
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./product_controller')

const app = express()
app.use(express.json())

//endpoints
app.get('/api/products', ctrl.getAll)
app.get('/api/products/:id', ctrl.getOne)
app.put('/api/products/:id', ctrl.update)
app.post('/api/products', ctrl.create)
app.delete('/api/products/:id', ctrl.delete)

//massive/ listening
massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('database is connected?')
    app.listen(SERVER_PORT, ()=>console.log(`${SERVER_PORT} is working?`))
})
