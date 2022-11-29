const Carro = require('../models/carroModel.js');
const { ObjectId } = require('bson');
const Ocorrencia = require('../models/ocorrenciasModel');

class CarroController {
  static async criarCarro(req, res) {
    const { placa } = req.body;

    await Carro.findOne({ placa })
      .then((carro) => {
        if (!carro) {
          const novoCarro = new Carro(req.body);
          novoCarro.save();
          return res.status(201).send('Carro cadastrado com sucesso');
        } else {
          return res.status(400).send({
            error: 'Carro já cadastrado, verifique com sua agência de trânsito por falsificações',
          });
        }
      })
      .catch((error) => {
        const msgErro = {};
        Object.values(error.errors).forEach(({ properties }) => {
          msgErro[properties.path] = properties.message;
        });
        return res.status(500).json(msgErro);
      });
  }

  static async listarCarros(req, res) {
    await Carro.find({})
      .populate('ocorrencias')
      .then((carros) => {
        return res.status(200).json(carros);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  static async consultaCarroPorPlaca(req, res) {
    await Carro.findOne({
      placa: req.params.id,
    })
      .then((carro) => {
        if (carro) {
          return res.json(carro);
        } else {
          return res.status(404).json('Carro não localizado');
        }
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  static async atualizarCarro(req, res) {
    await Carro.findOneAndUpdate({ placa: req.params.id }, req.body, {
      runValidators: true,
    })
      .then((carro) => {
        if (carro) {
          return res.status(204).end();
        } else {
          return res.status(404).json('Carro não localizado');
        }
      })
      .catch((error) => {
        const msgErro = {};
        Object.values(error.errors).forEach(({ properties }) => {
          msgErro[properties.path] = properties.message;
        });
        return res.status(422).json(msgErro);
      });
  }

  static async criarOcorrencia(req, res) {
    const novaOcorrencia = new Ocorrencia(req.body);
    await Carro.findOneAndUpdate({ placa: req.params.id }, { $push: { ocorrencias: novaOcorrencia } })
      .then((carro) => {
        if (carro) {
          novaOcorrencia.save();
          return res.json('Ocorrência criada com sucesso');
        } else {
          return res.status(404).json('Carro não localizado');
        }
      })
      .catch((error) => {
        const msgErro = {};
        Object.values(error.errors).forEach(({ properties }) => {
          msgErro[properties.path] = properties.message;
        });
        return res.status(500).json(msgErro);
      });
  }

  static async removerOcorrencia(req, res) {
    const procuraOcorrencia = await Carro.findOneAndUpdate(
      { placa: req.params.id },

      { $pull: { ocorrencias: { _id: ObjectId(req.params.oc) } } }
    );
    if (procuraOcorrencia) {
      Ocorrencia.deleteOne({ _id: ObjectId(req.params.oc) })
        .then((carro) => {
          if (carro) {
            return res.status(204).end();
          } else {
            return res.status(404).json('Carro não localizado');
          }
        })
        .catch((error) => {
          const msgErro = {};
          Object.values(error.errors).forEach(({ properties }) => {
            msgErro[properties.path] = properties.message;
          });
          return res.status(500).json(msgErro);
        });
    } else {
      return res.status(404).json('Carro não localizada');
    }
  }
}

module.exports = CarroController;
