//app.js
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

const app = express();

app.use(logger('dev'))

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);
app.get('/', (request,response)=>{
    response.send('Home page');
});
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
