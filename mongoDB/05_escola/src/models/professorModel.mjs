import mongoose from "mongoose";

const professorSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    disciplina: { type: String, required: true, trim: true },
    telefone: { type: String, trim: true },
    contratadoEm: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Professor = mongoose.model("Professor", professorSchema);

export default Professor;
