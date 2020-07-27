const express = require('express')
const resful = require('node-restful')
const server = express()
const mongoose = resful.mongoose

// DB
mongoose.Promise = global.Promise // sobrescrever api de promise do mongoose
mongoose.connect('mongodb://db/mydb')

// teste
server.get('/', (req, res, next) => res.send('Backend'))

// start server
server.listen(3000)
