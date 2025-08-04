import "dotenv/config";
import mongoose from "mongoose";
import { findActives, listAllWithMongoose } from "./agricultors.js";

async function connection() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado com sucesso!");

    const colecoes = await mongoose.connection.db.listCollections().toArray();
    console.log("Coleções disponíveis:", colecoes);

    // Execucoes
    // listAllWithMongoose();
    findActives(true);
  } catch (err) {
    console.log("Erro na conexão:", err);
  }
}

connection();
