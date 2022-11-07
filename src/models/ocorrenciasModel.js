const mongoose = require('mongoose');

const multasSchema = new mongoose.Schema({
  infracao: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
});

const ocorrenciaSchema = new mongoose.Schema(
  {
    IPVAatrasado: {
      type: Boolean,
      default: false,
    },
    multas: [
      {
        type: multasSchema,
        default: false,
      },
    ],
    roubo: {
      type: Boolean,
      default: false,
    },
    envolvidoAcidente: {
      type: Boolean,
      default: false,
    },
    revisao: {
      type: Boolean,
      required: true,
      default: false,
    },
    chamar_guincho: {
      type: Boolean,
      required: true,
      default: false,
    },
    placa_clonada: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Ocorrencia', ocorrenciaSchema);
