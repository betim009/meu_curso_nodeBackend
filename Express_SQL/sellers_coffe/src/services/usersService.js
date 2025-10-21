const bcrypt = require("bcryptjs");
const {
  modelCreateUser,
  modelFindUsers,
  modelFindUserByEmail,
} = require("../models/usersModel");
const { generateToken } = require("../utils/jwt");

const serviceCreateUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const userToCreate = { ...user, password: hashedPassword };

  return await modelCreateUser(userToCreate);
};

const serviceFindUsers = async () => {
  return await modelFindUsers();
};

const serviceLoginUser = async ({ email, password }) => {
  const user = await modelFindUserByEmail(email);

  if (!user) {
    return {
      error: { status: 401, message: "Credenciais inválidas" },
    };
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
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
