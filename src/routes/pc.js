const express = require('express');
const carroController = require('../controllers/carroController');
const LoginController = require('../controllers/LoginController');
const pcAuth = require('../Midlewares/AuthMidPC');

const router = express.Router();

router.post('/login', LoginController.index);

router.get('/carros', pcAuth, carroController.listarCarros);

router.get('/carro/:id', pcAuth, carroController.consultaCarroPorPlaca);

router.put('/ocorrencia/carros/:id', pcAuth, carroController.criarOcorrencia);

router.delete('/carros/:id/ocorrencia/:oc', pcAuth, carroController.removerOcorrencia);

module.exports = router;
