const mongoose = require("mongoose");

const AgricultorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
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
  status: {
    type: String,
    enum: ["ativo", "inativo"],
    default: "ativo",
  },
  admin: {
    type: Boolean,
    default: false,
  },
});

const Agricultor = mongoose.model("Agricultor", AgricultorSchema);

module.exports = Agricultor;
