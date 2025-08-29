const {
  findAgricultores,
  createAgricultor,
  removeAgricultor,
  updateAgricultor,
  findAgricultor,
} = require("../services/agricultorService");

async function getAgricultores(_req, res) {
  const agricultores = await findAgricultores();
  return res.json(agricultores);
}

async function getAgricultor(req, res) {
  const { id } = req.params;
  const agricultor = await findAgricultor(id);
  return res.json(agricultor);
}

async function postAgricultor(req, res) {
  const data = req.body;
  const agricultores = await createAgricultor(data);
  return res.status(200).json(agricultores);
}

async function putAgricultor(req, res) {
  const { id } = req.params;
  const data = req.body;
  const agricultor = await updateAgricultor(id, data);
  return res.status(200).json(agricultor);
}

async function deleteAgricultor(req, res) {
  const { id } = req.params;
  const agricultor = await removeAgricultor(id);
  return res.status(200).json(agricultor);
}

module.exports = {
  getAgricultores,
  getAgricultor,
  postAgricultor,
  putAgricultor,
  deleteAgricultor,
};
