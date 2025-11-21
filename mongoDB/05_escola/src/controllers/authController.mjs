import { autenticarProfessor } from "../services/authService.mjs";

export const login = async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  try {
    const professor = await autenticarProfessor(email, senha);

    if (!professor) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }

    res.json({ professor });
  } catch (error) {
    res.status(500).json({ message: "Erro ao autenticar.", detail: error.message });
  }
};
