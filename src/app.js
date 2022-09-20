'use strict';

// super test mocks the server

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const PORT = process.env.PORT || 3002;

console.log('we are working');

const app = express(); // this rep express app server

app.get('/', (req, res, next) => {
    res.status(200).send('Hello World');
    // next is the express way of saying
})

app.get('/bad', (req, res, next) =>{
    res.status(500).send(errorHandler);
})

app.use(errorHandler);

app.use('*', notFound);

function start(){
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}
// JS object shorthand if key and value are same name
module.exports = {app, start};


// // this enables creation of JS docs
// /**
//  *
//  * @param {string} name
//  * @returns a greeting message
//  */
// function greet(name){
//     return `Hello ${name}!`;
// }
