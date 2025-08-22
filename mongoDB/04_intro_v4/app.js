const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const produtoRoutes = require('./routes/produtoRoutes');

dotenv.config();

const app = express();

app.use(express.json());
app.use('/produtos', produtoRoutes);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('🟢 Conectado ao MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err.message);
  });

module.exports = app;

