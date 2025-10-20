const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "jwt_secret_key";
const DEFAULT_OPTIONS = { expiresIn: "1h" };

const generateToken = (payload) => jwt.sign(payload, JWT_SECRET, DEFAULT_OPTIONS);

const verifyToken = (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
  generateToken,
  verifyToken,
};
