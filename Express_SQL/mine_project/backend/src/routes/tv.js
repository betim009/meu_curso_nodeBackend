const express = require("express");
const { getTv, createTv, deleteTv } = require("../controllers/tv");

const router = express.Router();

router.get("/", getTv);
// router.get("/id");
router.post("/", createTv);
router.delete("/", deleteTv);

module.exports = router;
