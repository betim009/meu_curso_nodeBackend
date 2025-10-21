const { connection } = require("../../connection");

// ROTAS
const getActors = async (req, res) => {
  const [result] = await connection.execute("SELECT * FROM actor");
  return res.json(result);
};

const getActorId = async (req, res) => {
  const { id } = req.params;
  const [result] = await connection.execute(
    "SELECT * FROM actor WHERE actor_id = ?",
    [id]
  );

  return res.json(result);
};

const createActor = async (req, res) => {
  const { first_name, last_name } = req.body;
  const [result] = await connection.execute(
    "INSERT INTO actor (first_name, last_name) VALUES (?, ?)",
    [first_name, last_name]
  );

  return res.json(result);
};

const deleteActor = async (req, res) => {
  const { id } = req.params;
  const [result] = await connection.execute(
    "DELETE FROM actor WHERE actor_id = ?",
    [id]
  );
  return res.json(result)
};

module.exports = {
  getActors,
  getActorId,
  createActor,
  deleteActor
};
