const Agricultor = require("../models/agricultorModel");

async function findAgricultores() {
  return await Agricultor.find();
}

async function findAgricultor(id) {
  const result = await Agricultor.findById(id);
  if (result) {
    return result;
  }
  return { msg: "Não foi encontrar o agricultor." };
}

async function createAgricultor(agricultor) {
  return new Agricultor(agricultor).save();
}

async function updateAgricultor(id, newData) {
  const result = await Agricultor.findByIdAndUpdate(id, newData, { new: true });
  if (result) {
    return { msg: "Agricultor alterado com sucesso." };
  }
  return { msg: "Não foi possivel alterar o agricultor." };
}

async function removeAgricultor(id) {
  const result = await Agricultor.findByIdAndDelete(id);
  if (result) {
    return { msg: "Agricultor removido com sucesso." };
  }
  return { msg: "Não foi possivel remover o agricultor." };
}

module.exports = {
  findAgricultores,
  findAgricultor,
  createAgricultor,
  updateAgricultor,
  removeAgricultor,
};
