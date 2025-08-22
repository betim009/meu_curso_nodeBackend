const {
  criar,
  listar,
  buscarPorId,
  atualizar,
  deletar
} = require('../services/produtoService');

async function criarProduto(dados) {
  return await criar(dados);
}

async function listarProdutos() {
  return await listar();
}

async function buscarProdutoPorId(id) {
  return await buscarPorId(id);
}

async function atualizarProduto(id, novosDados) {
  return await atualizar(id, novosDados);
}

async function deletarProduto(id) {
  return await deletar(id);
}

module.exports = {
  criarProduto,
  listarProdutos,
  buscarProdutoPorId,
  atualizarProduto,
  deletarProduto
};
