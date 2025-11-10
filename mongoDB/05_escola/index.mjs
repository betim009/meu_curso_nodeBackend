import app from "./app.mjs";
import connectToDatabase from "./connection.mjs";

const PORT = process.env.PORT || 3000;

const bootstrap = async () => {
  try {
    await connectToDatabase();

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar a aplicação:", error.message);
    process.exit(1);
  }
};

bootstrap();
