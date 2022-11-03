const app = require('../src/app.js');
const mongoose = require('mongoose');

const urlConexao =
  'mongodb+srv://iev:mesquita@cluster0.ghlzmyj.mongodb.net/API-Projeto-integrado?retryWrites=true&w=majority';

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../src/swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

const port = 3000;

mongoose
  .connect(urlConexao)
  .then(
    app.listen(port, () => {
      console.log('API está online!');
    })
  )
  .catch((error) => {
    console.log('Ocorreu algum problema: ' + error);
  });
