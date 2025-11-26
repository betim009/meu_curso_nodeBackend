import bcrypt from "bcryptjs";
import Professor from "../models/professorModel.mjs";
import { criarProfessorDto, professorDto } from "../dtos/professorDto.mjs";

export const listarProfessores = async () => {
  const data = await Professor.find().lean();
  const professores = data.map((professor) => professorDto(professor));
  return professores;
};

export const buscarProfessorPorId = async (id) => {
  const professor = await Professor.findById(id).lean();
  return professorDto(professor);
};

export const criarProfessor = async (dados) => {
  const payload = { ...dados };

  if (payload.senha) {
    payload.senha = await bcrypt.hash(payload.senha, 10);
  }

  const professorCriado = await Professor.create(payload);
  return criarProfessorDto(professorCriado);
};

export const atualizarProfessor = async (id, dados) => {
  const payload = { ...dados };

  if (payload.senha) {
    payload.senha = await bcrypt.hash(payload.senha, 10);
  }

  const professorAtualizado = await Professor.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  }).lean();

  return professorDto(professorAtualizado);
};

export const removerProfessor = async (id) => {
  const professorRemovido = await Professor.findByIdAndDelete(id).lean();
  return professorDto(professorRemovido);
};

export const buscarProfessorPorEmail = (email) =>
  Professor.findOne({ email }).lean();
