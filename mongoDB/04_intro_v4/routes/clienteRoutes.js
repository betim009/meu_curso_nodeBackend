const express = require("express");
const { getClientes } = require("../controllers/clienteController");

const router = express.Router();

router.get("/", getClientes);

module.exports = router;
