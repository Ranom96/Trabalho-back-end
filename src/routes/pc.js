const express = require('express');
const pcController = require('../controllers/pcController')

const router = express.Router();

router.get('/pc', pcController.listarCarros);

router.get('/pc/:id', pcController.listarCarrosPorId);

router.put('/pc/:id', pcController.atualizarCarro);




module.exports = router;