const express = require('express');

const app = express();

// INCLUINDO ROTA

const detranRouter = require('./routes/detran');

const pcRouter = require('./routes/pc');

const pmRouter = require('./routes/pm');

const prfRouter = require('./routes/prf');

const indexRouter = require('./routes/index');

const loginRouter = require('./routes/login.js');

const carroRouter = require('./routes/carro.js');

// INCLUINDO MIDDLEWARE

app.use(express.json(), indexRouter, loginRouter, carroRouter);

app.use('/detran', detranRouter);

app.use('/pc', pcRouter);

app.use('/prf', prfRouter);

app.use('/pm', pmRouter);

module.exports = app;
