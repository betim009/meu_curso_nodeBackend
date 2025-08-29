const mongoose = require("mongoose");

const VendaSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agricultor",
      required: true,
    },
    itens: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Produto",
        required: true,
      },
    ],
    cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cliente",
      required: true,
    },
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ["aberta", "paga", "cancelada"],
      default: "aberta",
    },
  },
  { timestamps: true }
);

const Venda = mongoose.model("Venda", VendaSchema);

module.exports = Venda;
