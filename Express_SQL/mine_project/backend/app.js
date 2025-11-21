const express = require("express");
const cors = require("cors");

const routerTv = require("./src/routes/tv");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/tv", routerTv);

module.exports = app;
