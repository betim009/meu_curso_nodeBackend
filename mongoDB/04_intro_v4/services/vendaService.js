const Venda = require("../models/vendaMode");

async function findVendas() {
  const vendas = await Venda.find();
  return vendas;
}

module.exports = {
  findVendas,
};
