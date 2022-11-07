<<<<<<< HEAD
const dBase = [
    {
        id: 1,        
        placa: "BRA2E19",        
        Cidade: "Brasília",
        Estado: "Distrito Federal",
        marca: "VolksWagen",
        modelo: "Golf 2.0 GTI",
        ano: "2019",
        cor: "Preto",
        registro: "Antonio Nunes",
        chassi: "9BWE08JX2117974",
        multas_total: 2,
        multas_vencidas: 0,
        valor_multas_vencidas: "R$ 0,00",
        IPVA: true,
        vistoria: true,
        sinistro: false,
        furtado: false,
        clonado: true               
    },
    {
        id: 2,        
        placa: "CUI6S18",        
        Cidade: "Cuiabá",
        Estado: "Mato Grosso",
        marca: "Volvo",
        modelo: "Fh 540 6x4",
        ano: "2018",
        cor: "Azul",
        registro: "Augusto Carrara",
        chassi: "9BVE06kX6201174",
        multas_total: 6,
        multas_vencidas: 2,
        valor_multas_vencidas: "R$ 260,32",
        IPVA: true,
        vistoria: true,
        sinistro: true,
        furtado: false,
        clonado: false
    },
    {
        id: 3,        
        placa: "FLO7S21",        
        Cidade: "Florianópolis",
        Estado: "Santa Catarina",
        marca: "Ducati",
        modelo: "Monster 1200 S",
        ano: "2021",
        cor: "Vermelha",
        registro: "Johnny Cage",
        chassi: "9BDE02LX22037974",
        multas_total: 27,
        multas_vencidas: 22,
        valor_multas_vencidas: "R$ 16.368,02",
        IPVA: false,
        vistoria: true,
        sinistro: false,
        furtado: true,
        clonado: false
    }
]

listarCarros = (req, res, next) => {
    res.status(200).json(dBase);
}

listarCarrosPorId = (req, res, next) => {
    const dBaseItem = dBase.find(x => x.id === Number(req.params.id));
    if (!dBaseItem) {
        return res.status(404).json({msg: "Veículo não encontrado"});
    } else {
        res.json(dBaseItem);
    }
}

atualizarCarro = (req, res, next) => {
    const atualizarDBase = dBase.find(x => x.id === Number(req.params.id));
    if (!atualizarDBase) {
        return res.status(404).json({msg: "Vaículo não encontrado"});
    } else {
        //atualizarDBase.cidade = req.body.cidade;
        //atualizarDBase.Estado = req.body.Estado;
        atualizarDBase.registro = req.body.registro;
        atualizarDBase.multas_total = req.body.multas_total;
        atualizarDBase.multas_vencidas = req.body.multas_vencidas;
        atualizarDBase.valor_multas_vencidas = req.body.valor_multas_vencidas;
        atualizarDBase.IPVA = req.body.IPVA;
        atualizarDBase.vistoria = req.body.vistoria;
        atualizarDBase.sinistro = req.body.sinistro;
        atualizarDBase.furtado = req.body.furtado;
        atualizarDBase.clonado = req.body.clonado;
        res.status(204).end();
    }
}

=======
const dBase = [
    {
        id: 1,        
        placa: "BRA2E19",        
        Cidade: "Brasília",
        Estado: "Distrito Federal",
        marca: "VolksWagen",
        modelo: "Golf 2.0 GTI",
        ano: "2019",
        cor: "Preto",
        registro: "Antonio Nunes",
        chassi: "9BWE08JX2117974",
        multas_total: 2,
        multas_vencidas: 0,
        valor_multas_vencidas: "R$ 0,00",
        IPVA: true,
        vistoria: true,
        sinistro: false,
        furtado: false,
        clonado: true               
    },
    {
        id: 2,        
        placa: "CUI6S18",        
        Cidade: "Cuiabá",
        Estado: "Mato Grosso",
        marca: "Volvo",
        modelo: "Fh 540 6x4",
        ano: "2018",
        cor: "Azul",
        registro: "Augusto Carrara",
        chassi: "9BVE06kX6201174",
        multas_total: 6,
        multas_vencidas: 2,
        valor_multas_vencidas: "R$ 260,32",
        IPVA: true,
        vistoria: true,
        sinistro: true,
        furtado: false,
        clonado: false
    },
    {
        id: 3,        
        placa: "FLO7S21",        
        Cidade: "Florianópolis",
        Estado: "Santa Catarina",
        marca: "Ducati",
        modelo: "Monster 1200 S",
        ano: "2021",
        cor: "Vermelha",
        registro: "Johnny Cage",
        chassi: "9BDE02LX22037974",
        multas_total: 27,
        multas_vencidas: 22,
        valor_multas_vencidas: "R$ 16.368,02",
        IPVA: false,
        vistoria: true,
        sinistro: false,
        furtado: true,
        clonado: false
    }
]

listarCarros = (req, res, next) => {
    res.status(200).json(dBase);
}

listarCarrosPorId = (req, res, next) => {
    const dBaseItem = dBase.find(x => x.id === Number(req.params.id));
    if (!dBaseItem) {
        return res.status(404).json({msg: "Veículo não encontrado"});
    } else {
        res.json(dBaseItem);
    }
}

atualizarCarro = (req, res, next) => {
    const atualizarDBase = dBase.find(x => x.id === Number(req.params.id));
    if (!atualizarDBase) {
        return res.status(404).json({msg: "Vaículo não encontrado"});
    } else {
        //atualizarDBase.cidade = req.body.cidade;
        //atualizarDBase.Estado = req.body.Estado;
        atualizarDBase.registro = req.body.registro;
        atualizarDBase.multas_total = req.body.multas_total;
        atualizarDBase.multas_vencidas = req.body.multas_vencidas;
        atualizarDBase.valor_multas_vencidas = req.body.valor_multas_vencidas;
        atualizarDBase.IPVA = req.body.IPVA;
        atualizarDBase.vistoria = req.body.vistoria;
        atualizarDBase.sinistro = req.body.sinistro;
        atualizarDBase.furtado = req.body.furtado;
        atualizarDBase.clonado = req.body.clonado;
        res.status(204).end();
    }
}

>>>>>>> 1aec79b4c283399ec38c3fc140e1eba5a3947c2b
module.exports = { listarCarros, listarCarrosPorId, atualizarCarro };