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
  database: "sakila", // nome do BD Sakila
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
app.get("/actor", async (req, res) => {
  const [actors] = await connection.execute("SELECT * FROM actor");
  return res.json(actors);
});

// app.get("/actor/:id", async (req, res) => {
//   const { id } = req.params;
//   const [actor] = await connection.execute("SELECT * FROM actor WHERE actor_id = ?", [id]);
//   return res.json(actor);
// });

app.get("/actor/:id", async (req, res) => {
  const { id } = req.params;
  const [actors] = await connection.execute(
    "SELECT * FROM actor WHERE actor_id = ?",
    [id]
  );


  if (actors.length > 0) {
    const [actor] = actors; 
    const fn = `${actor.first_name[0]}${actor.first_name.slice(1).toLowerCase()}`;
    const ln = `${actor.last_name[0]}${actor.last_name.slice(1).toLowerCase()}`;
    const fullName = `${fn} ${ln}`

    return res.json({
      id: actor.actor_id,
      fullName: fullName
    });
  };

  return res.json({
    msg: "Actor not found"
  });
});

app.get("/ator", async function (req, res) {
  const [atores] = await connection.execute("SELECT * FROM actor");
  return res.json(atores);
});

app.get("/api/ator", async function (req, res) {
  const [atores] = await connection.execute("SELECT * FROM actor");

  const novos_atores = [];
  for (const element of atores) {
    novos_atores.push({
      id: element.actor_id,
      nome_completo: `${element.first_name} ${element.last_name}`,
    });
  }

  return res.json(novos_atores);
});

app.get("/api/actor", async (req, res) => {
  const [actors] = await connection.execute("SELECT * FROM actor");

  const new_actors = actors.map((element) => {
    return {
      id: element.actor_id,
      full_name: `${element.first_name} ${element.last_name}`,
    };
  });

  return res.json(new_actors);
});

app.get("/address", async (req, res) => {
  const [address] = await connection.execute("SELECT * FROM address");
  return res.json(address);
});
