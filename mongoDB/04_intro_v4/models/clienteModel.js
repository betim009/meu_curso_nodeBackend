const mongoose = require("mongoose");

const ClienteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    enum: ["masculino", "feminino"],
    required: true,
  },
});

const Cliente = mongoose.model("Cliente", ClienteSchema);

module.exports = Cliente;
