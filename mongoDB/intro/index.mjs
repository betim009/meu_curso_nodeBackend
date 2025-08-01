import "dotenv/config";
import mongoose from "mongoose";

async function connection() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado com sucesso!");

    const colecoes = await mongoose.connection.db.listCollections().toArray();
    console.log("Coleções disponíveis:", colecoes);

    // Execucoes
    // await listAll();
  } catch (err) {
    console.log("Erro na conexão:", err);
  }
}

const listAll = async () => {
  const dados = await mongoose.connection.db
    .collection("agricultors")
    .find()
    .toArray();

  console.log("Documentos da coleção:", dados);
}

connection();
