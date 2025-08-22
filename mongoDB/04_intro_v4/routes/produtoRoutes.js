const express = require("express");
const {
  criarProduto,
  listarProdutos,
  buscarProdutoPorId,
  atualizarProduto,
  deletarProduto,
} = require("../controllers/produtoController");

const router = express.Router();

// GET /produtos
router.get("/", listarProdutos);

// GET /produtos/:id
router.get("/:id", buscarProdutoPorId);

// POST /produtos
router.post("/", criarProduto);

// PUT /produtos/:id
router.put("/:id", atualizarProduto);

// DELETE /produtos/:id
router.delete("/:id", deletarProduto);

module.exports = router;
