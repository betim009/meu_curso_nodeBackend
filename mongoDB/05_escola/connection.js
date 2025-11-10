const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const produtoRoutes = require("./routes/produtoRoutes");
const agricultorRoutes = require("./routes/agricultorRoutes");
const vendaRoutes = require("./routes/vendaRoutes");
const clienteRoutes = require("./routes/clienteRoutes");

dotenv.config();

const app = express();

app.use(express.json());
// app.use("/", async (req, res) => {
//   const myCollections = await mongoose.connection.db.listCollections().toArray();
//   res.json(myCollections);
// });

app.use("/produto", produtoRoutes);
app.use("/agricultor", agricultorRoutes);
app.use("/venda", vendaRoutes);
app.use("/cliente", clienteRoutes);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("🟢 Conectado ao MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err.message);
  });

module.exports = app;
