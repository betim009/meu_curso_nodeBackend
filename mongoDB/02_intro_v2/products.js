import mongoose from "mongoose";

const ProdutoAgricolaSchema = new mongoose.Schema({
  produto: String,
  preco: Number,
  unidade: String,
  peso: Number,
});

const ProdutoAgricola = mongoose.model(
  "ProdutoAgricola",
  ProdutoAgricolaSchema
);

export const createProduct = async () => {
  const newProduct = new ProdutoAgricola({
    produto: "Milho",
    preco: 25.5,
    unidade: "saca",
    peso: 60,
  });

  const res = await novo.save();
  console.log("Produto agrícola (schema) inserido com _id:", res._id);
};

export const findAll = async () => {
  const produtos = await ProdutoAgricola.find();
  console.log("Todos os produtos agrícolas:", produtos);
};

export const findProductById = async (id) => {
  try {
    const produto = await ProdutoAgricola.findById(id);
    if (produto) {
      console.log("Produto encontrado:", produto);
    } else {
      console.log("Produto não encontrado com o ID:", id);
    }
  } catch (err) {
    console.log("Erro ao buscar produto por ID:", err.message);
  }
};
