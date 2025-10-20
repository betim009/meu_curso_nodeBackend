const {
  modelCreateUser,
  modelFindUsers,
  modelFindUserByEmail,
} = require("../models/usersModel");
const { generateToken } = require("../utils/jwt");

const serviceCreateUser = async (user) => {
  return await modelCreateUser(user);
};

const serviceFindUsers = async () => {
  return await modelFindUsers();
};

const serviceLoginUser = async ({ email, password }) => {
  const user = await modelFindUserByEmail(email);

  if (!user || user.password !== password) {
    return {
      error: { status: 401, message: "Credenciais inválidas" },
    };
  }

  const payload = { id: user.id, email: user.email, type: user.type };
  const token = generateToken(payload);

  return { token };
};

module.exports = {
  serviceCreateUser,
  serviceFindUsers,
  serviceLoginUser,
};
