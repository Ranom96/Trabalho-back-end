const express = require('express');
const detranController = require('../controllers/detranController')

const router = express.Router();

router.get('/detran', detranController.listarCarros)

router.get('/detran/:id', detranController.listarCarrosPorId)

router.put('/detran/:id', detranController.atualizarCarro)


module.exports = router;