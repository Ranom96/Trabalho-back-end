const express = require('express');
const carroController = require('../controllers/carroController');

const router = express.Router();

router.get('/pc', carroController.listarCarros);

router.get('/pc/carro/:id', carroController.consultaCarroPorPlaca);

router.put('/pc/ocorrencia/:id', carroController.criarOcorrencia);

module.exports = router;
