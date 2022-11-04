const mongoose = require("mongoose");

const multasSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
});

const ocorrenciaSchema = new mongoose.Schema({
  IPVAatrasado: {
    type: Boolean,
  },
  multas: {
    type: multasSchema,
  },
  roubo: {
    type: Boolean,
  },
  envolvidoAcidente: {
    type: Boolean,
  },
  placa: {
    type: Schema.Types.ObjectId,
    ref: "Carro",
    required: true,
  },
});
