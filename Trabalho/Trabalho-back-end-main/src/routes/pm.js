const express = require('express');
const pmController = require('../controllers/pmController')

const router = express.Router();

router.get('/pm', pmController.listarCarros);

router.get('/pm/:id', pmController.listarCarrosPorId);

router.put('/pm/:id', pmController.atualizarCarro);




module.exports = router;