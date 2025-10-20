const {
  serviceCreateUser,
  serviceFindUsers,
  serviceLoginUser,
} = require("../services/usersService");

const createUser = async (req, res) => {
  const user = req.body;
  const data = await serviceCreateUser(user);

  return res.json(data);
};

const findUsers = async (req, res) => {
  const users = await serviceFindUsers();
  return res.json(users);
};

const loginUser = async (req, res) => {
  const credentials = req.body;

  if (!credentials.email || !credentials.password) {
    return res
      .status(400)
      .json({ message: "Email e senha são obrigatórios" });
  }

  const result = await serviceLoginUser(credentials);

  if (result.error) {
    return res.status(result.error.status).json({ message: result.error.message });
  }

  return res.json(result);
};

module.exports = {
  createUser,
  findUsers,
  loginUser,
};
