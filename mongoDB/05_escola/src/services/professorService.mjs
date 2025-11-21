import bcrypt from "bcryptjs";
import Professor from "../models/professorModel.mjs";

export const listarProfessores = () => Professor.find().lean();

export const buscarProfessorPorId = (id) => Professor.findById(id).lean();

export const criarProfessor = async (dados) => {
  const payload = { ...dados };

  if (payload.senha) {
    payload.senha = await bcrypt.hash(payload.senha, 10);
  }

  return Professor.create(payload);
};

export const atualizarProfessor = async (id, dados) => {
  const payload = { ...dados };

  if (payload.senha) {
    payload.senha = await bcrypt.hash(payload.senha, 10);
  }

  return Professor.findByIdAndUpdate(id, payload, { new: true, runValidators: true }).lean();
};

export const removerProfessor = (id) => Professor.findByIdAndDelete(id).lean();

export const buscarProfessorPorEmail = (email) => Professor.findOne({ email }).lean();
