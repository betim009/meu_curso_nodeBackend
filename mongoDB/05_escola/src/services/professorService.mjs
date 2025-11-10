import Professor from "../models/professorModel.mjs";

export const listarProfessores = () => Professor.find().lean();

export const buscarProfessorPorId = (id) => Professor.findById(id).lean();

export const criarProfessor = (dados) => Professor.create(dados);

export const atualizarProfessor = (id, dados) =>
  Professor.findByIdAndUpdate(id, dados, { new: true, runValidators: true }).lean();

export const removerProfessor = (id) => Professor.findByIdAndDelete(id).lean();
