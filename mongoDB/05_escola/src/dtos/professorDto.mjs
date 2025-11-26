const shapeProfessor = (plain) => ({
  id: plain._id ? String(plain._id) : undefined,
  nome: plain.nome,
  email: plain.email,
  disciplina: plain.disciplina,
  telefone: plain.telefone,
  contratadoEm: plain.contratadoEm,
  createdAt: plain.createdAt,
  updatedAt: plain.updatedAt,
});

export const professorDto = (professor) => {
  if (!professor) return null;
  return shapeProfessor(professor);
};

// Para documentos Mongoose (ex.: create ou find sem lean)
export const criarProfessorDto = (professorDoc) => {
  if (!professorDoc) return null;
  return shapeProfessor(professorDoc.toObject());
};
