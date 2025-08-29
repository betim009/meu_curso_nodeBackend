const express = require("express");
const { getVendas } = require("../controllers/vendaController");

const router = express.Router();

router.get("/", getVendas);

module.exports = router;
