const express = require("express");
const cors = require("cors");
const { connection } = require("./connection");
const {
  getActors,
  getActorId,
  createActor,
  deleteActor,
} = require("./src/routes/actor");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`A conexão está sendo executada na porta ${PORT}`);

  // O código abaixo é para testarmos a comunicação com o MySQL
  const [result] = await connection.execute("SELECT 1");
  if (result) {
    console.log("Conexão ao BD feita com sucesso!");
  }
});

app.get("/actor", getActors);
app.get("/actor/:id", getActorId);
app.post("/actor/create", createActor);
app.delete("/actor/delete/:id", deleteActor);

module.exports = app;
