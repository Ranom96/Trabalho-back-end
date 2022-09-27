const express = require('express');

const app = express();

// INCLUINDO ROTA

const detranRouter = require('./routes/detran');

const pcRouter = require('./routes/pc');

const pmRouter = require('./routes/pm');

const prfRouter = require('./routes/prf');

const indexRouter = require('./routes/index');

// INCLUINDO MIDDLEWARE

app.use(express.json(),
    detranRouter,
    pcRouter,
    pmRouter,
    prfRouter,
    indexRouter);







module.exports = app;