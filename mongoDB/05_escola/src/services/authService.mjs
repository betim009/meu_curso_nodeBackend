import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Professor from "../models/professorModel.mjs";
import { professorDto } from "../dtos/professorDto.mjs";
import { criarProfessor } from "./professorService.mjs";

dotenv.config();

const getJwtConfig = () => {
  const secret = process.env.JWT_SECRET;
  const expiresIn = process.env.JWT_EXPIRES_IN || "1h";

  if (!secret) {
    throw new Error("JWT_SECRET não configurado.");
  }

  return { secret, expiresIn };
};

const gerarToken = (professor) => {
  const { secret, expiresIn } = getJwtConfig();
  return jwt.sign({ sub: professor.id, email: professor.email }, secret, { expiresIn });
};

export const autenticarProfessor = async (email, senha) => {
  const professor = await Professor.findOne({ email }).lean();

  if (!professor) {
    return null;
  }

  const senhaConfere = await bcrypt.compare(senha, professor.senha);

  if (!senhaConfere) {
    return null;
  }

  const professorSanitizado = professorDto(professor);
  const token = gerarToken(professorSanitizado);

  return { token, professor: professorSanitizado };
};

export const registrarProfessor = async (dados) => {
  // Valida secret antes de escrever no banco para evitar criar usuário sem conseguir emitir token
  getJwtConfig();
  const professorCriado = await criarProfessor(dados);
  const token = gerarToken(professorCriado);

  return { token, professor: professorCriado };
};
