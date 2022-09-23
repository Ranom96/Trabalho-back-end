const express = require('express');

const app = express();

// INCLUINDO ROTA

const detranRouter = require('./routes/detran');

const pmRouter = require('./routes/pm');

const prfRouter = require('./routes/prf');

const indexRouter = require('./routes/index');

// INCLUINDO MIDDLEWARE

app.use(express.json(),
    detranRouter,
    pmRouter,
    prfRouter,
    indexRouter);







module.exports = app;