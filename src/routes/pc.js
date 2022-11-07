<<<<<<< HEAD
const express = require('express');
const pcController = require('../controllers/pcController')

const router = express.Router();

router.get('/pc', pcController.listarCarros);

router.get('/pc/:id', pcController.listarCarrosPorId);

router.put('/pc/:id', pcController.atualizarCarro);




=======
const express = require('express');
const pcController = require('../controllers/pcController')

const router = express.Router();

router.get('/pc', pcController.listarCarros);

router.get('/pc/:id', pcController.listarCarrosPorId);

router.put('/pc/:id', pcController.atualizarCarro);




>>>>>>> 1aec79b4c283399ec38c3fc140e1eba5a3947c2b
module.exports = router;