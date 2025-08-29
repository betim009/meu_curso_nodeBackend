const Agricultor = require("../models/agricultorModel");

async function findAgricultores() {
  return await Agricultor.find();
}

async function createAgricultor(agricultor) {
  return new Agricultor(agricultor).save();
}

module.exports = {
  findAgricultores,
  createAgricultor,
};
