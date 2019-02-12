//server.js
const express = require('express');
const server = express();

server.set('port', process.env.PORT || 3000);
server.set('view engine', 'ejs');
//Basic routes
server.get('/', (request,response)=>{
    response.render('pages/signup');
});

server.get('/feed',(request,response)=>{
    response.render('pages/feed');
});

server.get('/listing', (request, response)=>{
    response.render('pages/listing');
});

//Express error handling middleware
server.use((request,response)=>{
    response.type('text/plain');
    response.status(505);
    response.render('pages/error');
});

//Binding to a port
server.listen(3000, ()=>{
    console.log('Express server started at port 3000');
});
