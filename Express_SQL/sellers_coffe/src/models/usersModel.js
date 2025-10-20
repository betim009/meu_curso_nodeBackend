const connection = require("../../connection");

const modelCreateUser = async (user) => {
  const { fullName, phone, email, password, type } = user;

  const [insert] = await connection.execute(
    `INSERT INTO users (fullName, phone, email, password, type)
    VALUES(?, ?, ?, ?, ?)`,
    [fullName, phone, email, password, type]
  );

  return insert;
};

const modelFindUsers = async () => {
  const [rows] = await connection.execute(
    `SELECT id, fullName, email, phone, type FROM users`
  );
  return rows;
};

const modelFindUserByEmail = async (email) => {
  const [rows] = await connection.execute(
    `SELECT id, fullName, phone, email, password, type FROM users WHERE email = ?`,
    [email]
  );
  return rows[0];
};

module.exports = {
  modelCreateUser,
  modelFindUsers,
  modelFindUserByEmail,
};
