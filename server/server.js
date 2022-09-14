const path = require('path')
const express = require('express')

const recipes = require('./routes/recipes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/recipes', recipes)

module.exports = server
