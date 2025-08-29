const express = require("express");
const { getAgricultores, postAgricultor } = require("../controllers/agricultorController");

const router = express.Router();

router.get("/", getAgricultores);
router.post("/", postAgricultor);

module.exports = router;
