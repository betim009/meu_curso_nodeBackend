const express = require('express');
const {
  criarProduto,
  listarProdutos,
  buscarProdutoPorId,
  atualizarProduto,
  deletarProduto
} = require('../controllers/produtoController');

const router = express.Router();

// GET /produtos
router.get('/', async (req, res) => {
  try {
    const produtos = await listarProdutos();
    res.json(produtos);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// GET /produtos/:id
router.get('/:id', async (req, res) => {
  try {
    const produto = await buscarProdutoPorId(req.params.id);
    if (!produto) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
    res.json(produto);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// POST /produtos
router.post('/', async (req, res) => {
  try {
    const novoProduto = await criarProduto(req.body);
    res.status(201).json(novoProduto);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// PUT /produtos/:id
router.put('/:id', async (req, res) => {
  try {
    const produtoAtualizado = await atualizarProduto(req.params.id, req.body);
    if (!produtoAtualizado) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
    res.json(produtoAtualizado);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// DELETE /produtos/:id
router.delete('/:id', async (req, res) => {
  try {
    const produtoDeletado = await deletarProduto(req.params.id);
    if (!produtoDeletado) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;

