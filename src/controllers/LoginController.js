const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const configDETRAN = require('../Authenticators/authDetran');
const configPM = require('../Authenticators/authPM');
const configPC = require('../Authenticators/authPC');
const configPRF = require('../Authenticators/authPRF');

class LoginController {
  static generateToken(params = {}) {
    switch (params.funcao) {
      case 'detran':
        return jwt.sign(params, configDETRAN.secret, {
          expiresIn: configDETRAN.expireIn,
        });
      case 'pm':
        return jwt.sign(params, configPM.secret, {
          expiresIn: configPM.expireIn,
        });

      case 'pc':
        return jwt.sign(params, configPC.secret, {
          expiresIn: configPC.expireIn,
        });
      case 'prf':
        return jwt.sign(params, configPRF.secret, {
          expiresIn: configPRF.expireIn,
        });

      default:
        break;
    }
  }

  async geraUsuario(req, res) {
    const { distintivo } = req.body;

    await User.findOne({ distintivo: distintivo })
      .then((usuario) => {
        if (usuario) {
          return res.status(400).send({ error: 'Usuário já existe' });
        } else {
          const user = new User(req.body);
          user.password = bcrypt.hashSync(user.password, 8);
          user.save();

          return res.send({
            user,
            token: LoginController.generateToken({ id: user._id }),
          });
        }
      })
      .catch((error) => {
        return res.status(400).json('Deu erro');
      });
  }

  async index(req, res) {
    const { distintivo, password } = req.body;

    const userExist = await User.findOne({ distintivo }).select('+password');
    if (!userExist) {
      return res.status(400).json({
        error: true,
        message: 'O usuário ou senha são inválidos',
      });
    }

    if (!(await bcrypt.compare(password, userExist.password))) {
      return res.status(400).json({
        error: true,
        message: 'O usuário ou senha são inválidos',
      });
    }

    return res.status(200).json({
      user: {
        nome: userExist.nome,
        _id: userExist.id,
        funcao: userExist.funcao,
      },
      token: await LoginController.generateToken({ id: userExist._id, funcao: userExist.funcao }),
    });
  }
}

module.exports = new LoginController();
