const connection = require("./connection");

const findTv = async () => {
  const [tvs] = await connection.execute("SELECT * FROM produtos");
  return tvs;
};

const insertTv = async (name, price) => {
  const [result] = await connection.execute(
    "INSERT INTO produtos (tv, preco) VALUES (?, ?)",
    [name, price]
  );

  return result;
};

const removeTv = async (id) => {
  const [result] = await connection.execute(
    "DELETE FROM produtos WHERE id = ?",
    [id]
  );
};

module.exports = {
  findTv,
  insertTv,
  removeTv,
};
