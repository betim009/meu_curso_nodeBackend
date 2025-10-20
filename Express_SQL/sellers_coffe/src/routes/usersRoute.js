const express = require("express");
const {
  createUser,
  findUsers,
  loginUser,
} = require("../controllers/usersController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/", authMiddleware, findUsers);

module.exports = router;
