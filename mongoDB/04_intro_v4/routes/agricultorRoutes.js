const express = require("express");
const {
  getAgricultores,
  postAgricultor,
  deleteAgricultor,
  putAgricultor,
  getAgricultor,
} = require("../controllers/agricultorController");

const router = express.Router();

router.get("/", getAgricultores);
router.get("/:id", getAgricultor);
router.post("/", postAgricultor);
router.delete("/:id", deleteAgricultor);
router.put("/:id", putAgricultor);

module.exports = router;
