const express = require('express');
const CarroController = require('../controllers/carroController');

const router = express.Router();

router.get('/detran/carros', CarroController.listarCarros);

router.get('/detran/carros/:id', CarroController.consultaCarroPorPlaca);

router.put('/detran/carros/:id', CarroController.criarOcorrencia);

module.exports = router;
