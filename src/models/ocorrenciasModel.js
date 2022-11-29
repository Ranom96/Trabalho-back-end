const mongoose = require('mongoose');

const ocorrenciaSchema = new mongoose.Schema(
  {
    IPVAatrasado: {
      type: Boolean,
    },
    roubo: {
      type: Boolean,
    },
    envolvidoAcidente: {
      type: Boolean,
    },
    revisao: {
      type: Boolean,
    },
    chamar_guincho: {
      type: Boolean,
    },
    placa_clonada: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Ocorrencia', ocorrenciaSchema);
