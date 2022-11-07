const express = require('express');
const CarroController = require('../controllers/carroController');
const LoginController = require('../controllers/LoginController');
const detranAuth = require('../Midlewares/AuthMidDetran.js');

const router = express.Router();

router.post('/detran/login', LoginController.index);

router.get('/detran/carros', detranAuth, CarroController.listarCarros);

router.get('/detran/carros/:id', detranAuth, CarroController.consultaCarroPorPlaca);

router.put('/detran/ocorrencia/carros/:id', detranAuth, CarroController.criarOcorrencia);

module.exports = router;
