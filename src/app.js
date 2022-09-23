const express = require('express');

const app = express();

// INCLUINDO ROTA

const detranRouter = require('./routes/detran');

const pmRouter = require('./routes/pm');

const indexRouter = require('./routes/index');

// INCLUINDO MIDDLEWARE

app.use(express.json(),
    detranRouter,
    pmRouter,
    indexRouter);







module.exports = app;