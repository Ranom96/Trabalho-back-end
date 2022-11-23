const express = require("express");
const CarroController = require("../controllers/carroController");

const router = express.Router();

router.post("/novocarro", CarroController.criarCarro);

module.exports = router;
