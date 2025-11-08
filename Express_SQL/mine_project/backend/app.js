const mysql = require("mysql2/promise");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const connection = mysql.createPool({
  host: "localhost", // Seu host do MySQL
  user: "root", // Seu usuário do MySQL
  password: "12345678", // Sua senha do MySQL
  database: "vendas_tv", // nome do BD Sakila
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`A conexão está sendo executada na porta ${PORT}`);

  // O código abaixo é para testarmos a comunicação com o MySQL
  const [result] = await connection.execute("SELECT 1");
  if (result) {
    console.log("Conexão ao BD feita com sucesso!");
  }
});

// ROTAS de padrao GET - RESGATAR
app.get("/tvs", async (req, res) => {
  const [actors] = await connection.execute("SELECT * FROM produtos");
  return res.json(actors);
});

app.post("/tvs", async (req, res) => {
  const { name, price } = req.body;
  const [result] = await connection.execute(
    "INSERT INTO produtos (tv, preco) VALUES (?, ?)",
    [name, price]
  );
  return res.json(result);
});

app.delete("/tvs/:id", async (req, res) => {
  const { id } = req.params;
  const [result] = await connection.execute(
    "DELETE FROM produtos WHERE id = ?",
    [id]
  );

  if (result.affectedRows !== 0) {
    return res.json({ status: "success" });
  }

  return res.json({ status: "failed" });
});
