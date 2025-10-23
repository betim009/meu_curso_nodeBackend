const { connection } = require("../../connection");

const getActors = async (req, res) => {
  const [result] = await connection.execute("SELECT * FROM actor");
  return res.json(result);
};

// const getActors = async (req, res) => {
//   const { page } = req.params;
//   const [result] = await connection.execute("SELECT * FROM actor");

//   const final = Number(page) * 30;
//   const init = final - 30;

//   const new_result = [...result].slice(init, final);

//   return res.json(new_result);
// };

// const getActors = async (req, res) => {
//   const { page } = req.params;

//   let offset = "0";
//   if (!page || Number(page) <= 1) {
//     offset = "0";
//   }

//   offset = String((Number(page) - 1)  * 10);

//   const [result] = await connection.execute(
//     "SELECT * FROM actor LIMIT 10 OFFSET ?",
//     [offset]
//   );
//   return res.json(result);
// };

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
  return res.json(result);
};

const updateActorId = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name } = req.body;

  const [result] = await connection.execute(
    "UPDATE actor SET first_name = (?), last_name = (?) WHERE actor_id = (?)",
    [first_name, last_name, id]
  );

  return res.json(result);
};

module.exports = {
  getActors,
  getActorId,
  createActor,
  deleteActor,
  updateActorId,
};
