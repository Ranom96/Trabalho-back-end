const express = require('express');
const carroController = require('../controllers/carroController');

const router = express.Router();

// GET listar todos os veículos do BD
router.get('/prf', carroController.listarCarros);

//GET ID listar um veículo específico pelo ID
router.get('/prf/carro/:id', carroController.consultaCarroPorPlaca);

//PUT ID atualizar um veículo pelo ID
router.put('/prf/ocorrencia/:id', carroController.criarOcorrencia);

module.exports = router;
