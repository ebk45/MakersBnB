// app.js
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.use(logger('dev'))

app.set('view engine', 'ejs')

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./server/routes')(app)

app.get('/', (request, response) => {
  response.render('pages/signup')
})

app.get('/feed', (request, response) => {
  response.render('pages/feed')
})

app.get('/feed/create', (request, response) => {
  response.render('pages/create')
})

app.get('/listing', (request, response) => {
  response.render('pages/listing')
})

app.get('/spaces', (request, response) => {
  response.render('pages/spaces')
})

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.'
}))

// Express error handling middleware
app.use((request, response) => {
  response.type('text/plain')
  response.status(505)
  response.render('pages/error')
})

module.exports = app
