'use strict';

const express = require("express");
const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const logger = require('./middlewares/logger');
const validator = require('./middlewares/validator');

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.get('/person', validator, (req, res) => {
    res.status(200).send({
        'Method': req.method,
        'Path': req.path,
        'name': req.personName
    })
})

app.use('*', notFoundHandler);
app.use(errorHandler)

function start(port) {
    app.listen(port, () => {
        console.log(`server is up and listen on ${port}`)
    });
}

module.exports = {
    start: start,
    app: app,
}