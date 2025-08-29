const { findClientes } = require("../services/clienteService");

async function getClientes(_req, res) {
  const clientes = await findClientes();
  return res.status(200).json(clientes);
}

async function getCliente(req, res) {
  const { id } = req.params;
  const Cliente = await findCliente(id);
  return res.json(Cliente);
}

async function postCliente(req, res) {
  const data = req.body;
  const clientes = await createCliente(data);
  return res.status(200).json(clientes);
}

async function putCliente(req, res) {
  const { id } = req.params;
  const data = req.body;
  const cliente = await updateCliente(id, data);
  return res.status(200).json(cliente);
}

async function deleteCliente(req, res) {
  const { id } = req.params;
  const cliente = await removeCliente(id);
  return res.status(200).json(cliente);
}

module.exports = {
  getClientes,
};
