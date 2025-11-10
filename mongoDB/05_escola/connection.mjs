import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDatabase = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("A variável de ambiente MONGO_URI não foi definida.");
  }

  await mongoose.connect(mongoUri);
  console.log("🟢 Conectado ao MongoDB");
};

export default connectToDatabase;
