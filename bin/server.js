const app = require('../src/app.js');

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../src/swagger.json');




app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));




const port = 3000;

app.listen(port, () => {
    console.log('API está online!')

});