const express = require('express');
const prfController = require('../controllers/prfController');

const router = express.Router();

// GET listar todos os veículos do BD
router.get('/prf', prfController.listarCarros);

//GET ID listar um veículo específico pelo ID
router.get('/prf/:id', prfController.listarCarrosPorId);

//PUT ID atualizar um veículo pelo ID
router.put('/prf/:id', prfController.atualizarCarro);

module.exports = router;