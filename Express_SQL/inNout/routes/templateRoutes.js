const express = require("express");
const connection = require("../connection");

const router = express.Router();

router.get("/admin", async (req, res) => {
  const [result] = await connection.execute("");
  return res.json(result);
});

router.get("/", async (req, res) => {
  const [result] = await connection.execute("");
  return res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const [result] = await connection.execute(``);

  if (result.length === 0) {
    return res.json({ msg: "cannot find" });
  }
  return res.json(result);
});

module.exports = router;
