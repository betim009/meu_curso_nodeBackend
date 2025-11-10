import mongoose from "mongoose";
import {
  listarProfessores,
  buscarProfessorPorId,
  criarProfessor,
  atualizarProfessor,
  removerProfessor,
} from "../services/professorService.mjs";

const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

export const getProfessores = async (req, res) => {
  try {
    const professores = await listarProfessores();
    res.json(professores);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar professores.", detail: error.message });
  }
};

export const getProfessor = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "ID inválido." });
  }

  try {
    const professor = await buscarProfessorPorId(id);

    if (!professor) {
      return res.status(404).json({ message: "Professor não encontrado." });
    }

    res.json(professor);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar professor.", detail: error.message });
  }
};

export const createProfessor = async (req, res) => {
  try {
    const professor = await criarProfessor(req.body);
    res.status(201).json(professor);
  } catch (error) {
    const status = error.name === "ValidationError" ? 400 : 500;
    res.status(status).json({ message: "Erro ao criar professor.", detail: error.message });
  }
};

export const updateProfessor = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "ID inválido." });
  }

  try {
    const professorAtualizado = await atualizarProfessor(id, req.body);

    if (!professorAtualizado) {
      return res.status(404).json({ message: "Professor não encontrado." });
    }

    res.json(professorAtualizado);
  } catch (error) {
    const status = error.name === "ValidationError" ? 400 : 500;
    res.status(status).json({ message: "Erro ao atualizar professor.", detail: error.message });
  }
};

export const deleteProfessor = async (req, res) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    return res.status(400).json({ message: "ID inválido." });
  }

  try {
    const professorRemovido = await removerProfessor(id);

    if (!professorRemovido) {
      return res.status(404).json({ message: "Professor não encontrado." });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Erro ao remover professor.", detail: error.message });
  }
};
