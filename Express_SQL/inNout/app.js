// Importacoes
const mysql = require("mysql2/promise");
const express = require("express");
const cors = require("cors");

// Iniciando aplicacao
const app = express();
// Config da aplicacao
app.use(express.json()); // Dizendo que vai ser api a base de json
app.use(cors()); // Seguranca dos dados - ignora e simplesmente faz -

// Conexao
const connection = mysql.createPool({
  host: "localhost", // Seu host do MySQL
  user: "root", // Seu usuário do MySQL
  password: "12345678", // Sua senha do MySQL
  database: "db_inNout", // nome do BD Sakila
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Iniciar a aplicacao
const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`A conexão está sendo executada na porta ${PORT}`);

  // O código abaixo é para testarmos a comunicação com o MySQL
  const [result] = await connection.execute("SELECT 1");
  if (result) {
    console.log("Conexão ao BD feita com sucesso!");
  }
});

app.get("/admin/users", async (req, res) => {
  const [result] = await connection.execute("SELECT * FROM users");
  return res.json(result);
});

app.get("/users", async (req, res) => {
  const [result] = await connection.execute(
    "SELECT id, fullName, phone, email FROM users WHERE type = 'normal'"
  );
  return res.json(result);
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const [result] = await connection.execute(
    "SELECT id, fullName, phone, email FROM users WHERE type = 'normal'"
  );
  return res.json(result);
});

app.get("/products", async (req, res) => {
  const [result] = await connection.execute("SELECT * FROM products");
  return res.json(result);
});
