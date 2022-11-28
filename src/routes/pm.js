const express = require('express');
const carroController = require('../controllers/carroController');

const router = express.Router();

router.get('/pm', carroController.listarCarros);

router.get('/pm/:id', carroController.consultaCarroPorPlaca);

router.put('/pm/ocorrencia/:id', carroController.criarOcorrencia);

module.exports = router;
