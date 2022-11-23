const express = require("express");
const LoginController = require("../controllers/LoginController.js");

const router = express.Router();

router.post("/cadastro", LoginController.geraUsuario);

module.exports = router;
