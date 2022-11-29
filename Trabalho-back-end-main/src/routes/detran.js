const express = require('express');
const CarroController = require('../controllers/carroController');
const LoginController = require('../controllers/LoginController');
const detranAuth = require('../Midlewares/AuthMidDetran.js');

const router = express.Router();

router.post('/login', LoginController.index);

router.get('/carros', detranAuth, CarroController.listarCarros);

router.get('/carro/:id', detranAuth, CarroController.consultaCarroPorPlaca);

router.put('/ocorrencia/carros/:id', detranAuth, CarroController.criarOcorrencia);

router.delete('/carros/:id/ocorrencia/:oc', detranAuth, CarroController.removerOcorrencia);

module.exports = router;
