const { findTv, insertTv, removeTv } = require("../models/tv");

const getTv = async (req, res) => {
  const data = await findTv();

  if (data.length === 0) {
    return res.json({ msg: "Estamos sem produtos!" });
  }

  return res.json(data);
};

const createTv = async (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.json({ msg: "Nao é possivel cadastrar tv sem informacao" });
  }

  const data = await insertTv(name, price);

  return res.json(data);
};

const deleteTv = async (req, res) => {
  const { id } = req.params;
  const data = await removeTv(id);

  if (data.affectedRows !== 0) {
    return res.json({ status: "success" });
  }

  return res.json({ status: "failed" });
};

module.exports = {
  getTv,
  createTv,
  deleteTv,
};
