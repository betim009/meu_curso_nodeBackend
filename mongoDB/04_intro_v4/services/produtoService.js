const Produto = require('../models/produtoModel');

async function criar(dados) {
  const novoProduto = new Produto(dados);
  return await novoProduto.save();
}

async function listar() {
  return await Produto.find();
}

async function buscarPorId(id) {
  return await Produto.findById(id);
}

async function atualizar(id, novosDados) {
  return await Produto.findByIdAndUpdate(id, novosDados, { new: true });
}

async function deletar(id) {
  return await Produto.findByIdAndDelete(id);
}

module.exports = {
  criar,
  listar,
  buscarPorId,
  atualizar,
  deletar
};