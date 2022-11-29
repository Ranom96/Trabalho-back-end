const express = require('express');
const LoginController = require('../controllers/LoginController');
const carroController = require('../controllers/carroController');
const prfAuth = require('../Midlewares/AuthMidPRF');

const router = express.Router();

router.post('/login', LoginController.index);

// GET listar todos os veículos do BD
router.get('/carros', prfAuth, carroController.listarCarros);

//GET ID listar um veículo específico pelo ID
router.get('/carro/:id', prfAuth, carroController.consultaCarroPorPlaca);

//PUT ID atualizar um veículo pelo ID
router.put('/ocorrencia/carros/:id', prfAuth, carroController.criarOcorrencia);

router.delete('/carros/:id/ocorrencia/:oc', prfAuth, carroController.removerOcorrencia);

module.exports = router;
