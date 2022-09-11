const express = require('express');

const router = express();

router.get('/', (req, res, next) =>{
    res.json("API de Busca");
});

module.exports = router;