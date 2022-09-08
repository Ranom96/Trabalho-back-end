const express = require('express');

const router = express.Router();

const dBase = [{
        id: 1,
        placa: "PKJ-7520",
        chassi: "9BWHE21JX24060831",
        modelo: "GOL GTI 2013",
        cor: "vermelho",
        marca: "VolksWagen",
        registro: "Nathan Carvalho",
        IPVA: true,
        multas_vencidas: 3,
        total_multas: "R$ 327,78",
        sinistro: false,
        seguro: false
    }, {
        id: 2,
        placa: "PAA-1106",
        chassi: "9BVCX24KP24062117",
        modelo: "Honda Civic LX 2.0 CVT 2022",
        cor: "preto",
        marca: "Honda",
        registro: "Cleber Cristo",
        IPVA: false,
        multas_vencidas: 0,
        total_multas: "R$ 0,00",
        sinistro: true,
        seguro: true
    }, {
        id: 3,
        placa: "JKL-1752",
        chassi: "3BQQT27EL12030724",
        modelo: "Sonata Sedan 2.4 16V (aut) 2014",
        cor: "prata",
        marca: "Hyundai",
        registro: "Alexa Damares",
        IPVA: true,
        multas_vencidas: 26,
        total_multas: "R$ 4.023,79",
        sinistro: false,
        seguro: false
    }

]

router.get('/', (req, res, next) => {
    res.json(dBase)
})

router.get('/:id', (req, res, next) => {
    const dBaseItem = dBase.find(x => x.id === Number(req.params.id));
    if (!dBaseItem) {
        return res.status(404).json({ msg: "Veículo não encontrado" })
    }
    res.json(dBaseItem)

})

router.post('/', (req, res, next) => {
    const novoItem = {
        id: dBase.length + 1,
        placa: req.body.placa,
        chassi: req.body.chassi,
        modelo: req.body.modelo,
        cor: req.body.cor,
        marca: req.body.marca,
        registro: req.body.registro,
        IPVA: req.body.IPVA,
        multas_vencidas: req.body.multas_vencidas,
        total_multas: req.body.total_multas,
        sinistro: req.body.sinistro,
        seguro: req.body.seguro
    }
    dBase.push(novoItem);
    res.status(201).json(novoItem)
})

router.put('/:id', (req, res, next) => {
    const atualizarDBase = dBase.find(x => x.id === Number(req.params.id))
    if (!atualizarDBase) {
        res.status(404).json({ msg: "Veículo não encontrado" })
    }
    atualizarDBase.registro = req.body.registro
    res.status(204).end();

})

router.delete('/:id', (req, res, next) => {
    let deletarContato = dBase.splice(req.params.id - 1, 1)
    if (!req.params.id) {
        res.status(404).json({ msg: "Veículo não pode ser deletado pois não foi encontrado!" })
    }
    res.status(200).json([deletarContato, { msg: "Veículo deletado!" }]);

})


module.exports = router;