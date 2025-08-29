const Cliente = require("../models/clienteModel");

async function findClientes() {
  const clientes = Cliente.find();
  return clientes;
}

module.exports = {
  findClientes,
};
