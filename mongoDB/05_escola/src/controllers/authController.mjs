import { autenticarProfessor, registrarProfessor } from "../services/authService.mjs";

export const login = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  try {
    const authResult = await autenticarProfessor(email, senha);

    if (!authResult) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }

    res.json(authResult);
  } catch (error) {
    res.status(500).json({ message: "Erro ao autenticar.", detail: error.message });
  }
};

export const register = async (req, res) => {
  const { nome, email, senha, disciplina, telefone, contratadoEm } = req.body;

  if (!nome || !email || !senha || !disciplina) {
    return res.status(400).json({ message: "Nome, email, senha e disciplina são obrigatórios." });
  }

  try {
    const result = await registrarProfessor({ nome, email, senha, disciplina, telefone, contratadoEm });
    res.status(201).json(result);
  } catch (error) {
    if (error?.code === 11000) {
      return res.status(409).json({ message: "Email já cadastrado." });
    }

    const status = error.name === "ValidationError" ? 400 : 500;
    res.status(status).json({ message: "Erro ao registrar professor.", detail: error.message });
  }
};
