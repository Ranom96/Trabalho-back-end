const express = require('express');

const app = express();

const detranRouter = require('./routes/detran')

app.use(express.json());

app.use('/detran', detranRouter)

module.exports = app;