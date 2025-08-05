const mongoose = require('mongoose');
const dotenv = require('dotenv');
const {
  criarProduto,
  listarProdutos,
  buscarProdutoPorId,
  atualizarProduto,
  deletarProduto
} = require('./controllers/produtoController');

dotenv.config();

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('🟢 Conectado ao MongoDB');
    
    // Faca os testes abaixos:

    // Testes manuais para criar produtos
    // await criarProduto({
    //   produto: 'Café Canilon',
    //   preco: 32.5,
    //   unidade: 'kg',
    //   peso: 5
    // });

    // const produtos = await listarProdutos();
    // console.log('Produtos:', produtos);

    // const primeiro = produtos[0];
    // if (primeiro) {
    //   const detalhe = await buscarProdutoPorId(primeiro._id);
    //   console.log('Produto por ID:', detalhe);

    //   await atualizarProduto(primeiro._id, { preco: 28 });
    //   await deletarProduto(primeiro._id);
    // }

    const produto = await buscarProdutoPorId("689221bf9b5da8fc0ed59f02");
    console.log(produto);

  } catch (err) {
    console.error('Erro ao conectar ou executar:', err.message);
  }
}

main();