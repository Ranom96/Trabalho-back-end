const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    funcao: {
      type: String,
      enum: ['detran', 'pm', 'pc', 'prf'],
      required: true,
    },
    distintivo: {
      type: String,
      required: true,
      minLength: 6,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Usuario', usersSchema);
