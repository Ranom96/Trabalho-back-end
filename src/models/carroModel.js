const mongoose = require('mongoose');

// TODO #13 Criar model de carros com mongoose @Kievv

const carroSchema = new mongoose.Schema({
  placa: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    uppercase: true,
  },
  chassi: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    uppercase: true,
  },
  modelo: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    maxLength: [20, 'O modelo do carro deve conter até 20 caracteres'],
  },
  cor: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  marca: {
    type: String,
    required: true,
    trim: true,
    minLength: [3, 'A marca do carro deve conter ao menos 3 letras'],
  },
  registro: {
    type: String,
    required: true,
    trim: true,
    minLength: [3, 'É necessário inserir o nome completo'],
  },
  IPVA: {
    type: Boolean,
    required: true,
  },
  seguro: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Carro', carroSchema);
