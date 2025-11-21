import bcrypt from "bcryptjs";
import Professor from "../models/professorModel.mjs";

export const autenticarProfessor = async (email, senha) => {
  const professor = await Professor.findOne({ email }).lean();

  if (!professor) {
    return null;
  }

  const senhaConfere = await bcrypt.compare(senha, professor.senha);

  if (!senhaConfere) {
    return null;
  }

  const { senha: _, ...dadosSemSenha } = professor;
  return dadosSemSenha;
};
