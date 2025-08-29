const Cliente = require("../models/clienteModel");

async function findClientes() {
  const clientes = Cliente.find();
  return clientes;
}

async function findCliente(id) {
  const result = await Cliente.findById(id);
  if (result) {
    return result;
  }
  return { msg: "Não foi encontrar o cliente." };
}

async function createCliente(cliente) {
  return new Cliente(cliente).save();
}

async function updateCliente(id, newData) {
  const result = await Cliente.findByIdAndUpdate(id, newData, { new: true });
  if (result) {
    return { msg: "Cliente alterado com sucesso." };
  }
  return { msg: "Não foi possivel alterar o agricultor." };
}

async function removeCliente(id) {
  const result = await Cliente.findByIdAndDelete(id);
  if (result) {
    return { msg: "Cliente removido com sucesso." };
  }
  return { msg: "Não foi possivel remover o cliente." };
}

module.exports = {
  findClientes,
  findCliente,
  createCliente,
  updateCliente,
  removeCliente,
};
