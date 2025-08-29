const { findVendas } = require("../services/vendaService");

async function getVendas(_req, res) {
  const vendas = await findVendas();
  return res.json(vendas);
}

module.exports = {
  getVendas,
};
