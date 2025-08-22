const {
  criar,
  listar,
  buscarPorId,
  atualizar,
  deletar,
} = require("../services/produtoService");

async function criarProduto(req, res) {
  const data = req.body;
  const result = await criar(data);
  return res.json(result);
}

async function listarProdutos(req, res) {
  const result = await listar();
  return res.json(result)
}

async function buscarProdutoPorId(req, res) {
  const { id } = req.params;
  const result = await buscarPorId(id);
  return res.json(result);
}

async function atualizarProduto(req, res) {
  const { id } = req.params;
  const novosDados = req.body;
  const result = await atualizar(id, novosDados);
  return res.json(result);
}

async function deletarProduto(req, res) {
  const { id } = req.params;
  const result = await deletar(id);
  return res.json(result);
}

module.exports = {
  criarProduto,
  listarProdutos,
  buscarProdutoPorId,
  atualizarProduto,
  deletarProduto,
};
