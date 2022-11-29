const express = require('express');
const carroController = require('../controllers/carroController');
const LoginController = require('../controllers/LoginController');
const pmAuth = require('../Midlewares/AuthMidPm');

const router = express.Router();

router.post('/login', LoginController.index);

router.get('/carros', pmAuth, carroController.listarCarros);

router.get('/carro/:id', pmAuth, carroController.consultaCarroPorPlaca);

router.put('/ocorrencia/carros/:id', pmAuth, carroController.criarOcorrencia);

router.delete('/carros/:id/ocorrencia/:oc', pmAuth, carroController.removerOcorrencia);

module.exports = router;
