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
    licenciamento: true,
    roubo: false,
    chamar_guincho: true
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
    licenciamento: false,
    roubo: false,
    chamar_guincho: false
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
    licenciamento: true,
    roubo: true,
    chamar_guincho: true
}]

listarCarros = (req, res, next) => {
    res.status(200).json(dBase);
}

listarCarrosPorId = (req, res, next) => {
    const dBaseItem = dBase.find(x => x.id === Number(req.params.id));
    if (!dBase) {
        return res.status(404).json({ msg: "Veículo não encontrado" });
    } else {
        return res.json(dBaseItem);
    }
}

atualizarCarro = (req, res, next) => {
    const atualizarDBase = dBase.find(x => x.id === Number(req.params.id));
    if (!atualizarDBase) {
        return res.status(404).json({ msg: "Veículo não encontrado" })
    } else {
        atualizarDBase.chamar_guincho = req.body.chamar_guincho;
        return res.status(204).end();
    }
}

module.exports = { listarCarros, listarCarrosPorId, atualizarCarro }