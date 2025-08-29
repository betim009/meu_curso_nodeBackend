const {
  findAgricultores,
  createAgricultor,
} = require("../services/agricultorService");

async function getAgricultores(_req, res) {
  const agricultores = await findAgricultores();
  return res.json(agricultores);
}

async function postAgricultor(req, res) {
  const data = req.body;
  const agricultores = await createAgricultor(data);
  return res.status(200).json(agricultores);
}

module.exports = {
  getAgricultores,
  postAgricultor,
};
