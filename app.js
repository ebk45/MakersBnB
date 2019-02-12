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
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));






//
// app.set('port', process.env.PORT || 3000);
//
//
// //Express error handling middleware
// app.use((request, response)=>{
//     response.type('text/plain');
//     response.status(505);
//     response.send('Error page');
// });
//
// //Binding to a port
// app.listen(3000, ()=>{
//     console.log('Express server started at port 3000');
// });

module.exports = app;


// //Basic routes
// app.get('/', (request, response)=>{
//     response.send('Home page');
// });
//
// app.get('/about',(request, response)=>{
//     response.send('About page');
// });
