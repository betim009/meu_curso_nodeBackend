const express = require("express");
const connection = require("../connection");

const router = express.Router();

router.get("/admin", async (req, res) => {
  const [result] = await connection.execute("SELECT * FROM users");
  return res.json(result);
});

router.get("/", async (req, res) => {
  const [result] = await connection.execute(
    "SELECT id, fullName, phone, email FROM users WHERE type = 'normal'"
  );
  return res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const [result] = await connection.execute(
    `SELECT id, fullName, phone, email FROM users WHERE id = ${id}`
  );

  if (result.length === 0) {
    return res.json({ msg: "cannot find" });
  }
  return res.json(result);
});

router.post("/", async (req, res) => {
  const { fullName, phone, email, senha, type } = req.body;

  const [result] = await connection.execute(
    `INSERT INTO users (fullName, phone, email, senha, type)
    VALUES (?, ?, ?, ?, ?)`,
    [fullName, phone, email, senha, type]
  );

  return res.json(result);
});

router.put("/:id", async (req, res) => {
  const { senha } = req.body;
  const { id } = req.params;

  const [result] = await connection.execute(
    `UPDATE users SET senha = ? WHERE id = ?`,
    [senha, id]
  );

  return res.json(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const [result] = await connection.execute(
    `DELETE FROM users where id = ${id}`
  );
  return res.json(result);
});

module.exports = router;
