import "dotenv/config";
import mongoose from "mongoose";

const AgricultorSchema = new mongoose.Schema({
  fullName: String,
  cpf: String,
  birthDate: Date,
  phone: String,
  active: Boolean
});

const Agricultor = mongoose.model("Agricultor", AgricultorSchema);

// ✅ Com Mongoose - usando schema
const ProdutoAgricolaSchema = new mongoose.Schema({
  produto: String,
  preco: Number,
  unidade: String,
  peso: Number
});

const ProdutoAgricola = mongoose.model("ProdutoAgricola", ProdutoAgricolaSchema);

async function connection() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado com sucesso!");

    const colecoes = await mongoose.connection.db.listCollections().toArray();
    console.log("Coleções disponíveis:", colecoes);

    

    // Execucoes
    // await listAll();
    // await listAllWithMongoose();
    // await createWithMongoose();
    // await createWithoutSchema();

    // await createProdutoAgricolaWithSchema();
    await createProdutoAgricolaWithoutSchema();
    
  } catch (err) {
    console.log("Erro na conexão:", err);
  }
}

const listAll = async () => {
  const dados = await mongoose.connection.db
    .collection("agricultors")
    .find({ active: false })
    .toArray();

  console.log("Documentos da coleção:", dados);
}

const listAllWithMongoose = async () => {
  const dados = await Agricultor.find({ active: false });
  console.log("Documentos encontrados com Mongoose:", dados);
}

// ✅ Usando Mongoose com Schema (padrão que você já está usando)
const createWithMongoose = async () => {
  const novo = new Agricultor({
    fullName: "Maria Oliveira",
    cpf: "98765432100",
    birthDate: new Date("1985-11-22"),
    phone: "(28)97777-7777",
    active: true
  });

  const resultado = await novo.save();
  console.log("Inserido com Mongoose (_id):", resultado._id);
};

// 🚫 Sem usar Schema (usando insert direto no banco)
const createWithoutSchema = async () => {
  const novo = {
    fullName: "Carlos Oliveira",
    cpf: "91763432100",
    birthDate: new Date("1985-12-22"),
    phone: "(28)99577-7777",
    active: false
  };

  const resultado = await mongoose.connection.db
    .collection("agricultors")
    .insertOne(novo);

  console.log("Inserido sem schema (_id):", resultado.insertedId);
};

// Usando Mongoose
const createProdutoAgricolaWithSchema = async () => {
  const novo = new ProdutoAgricola({
    produto: "Milho",
    preco: 25.5,
    unidade: "saca",
    peso: 60
  });

  const resultado = await novo.save();
  console.log("Produto agrícola (schema) inserido com _id:", resultado._id);
};

// Sem usar schema
const createProdutoAgricolaWithoutSchema = async () => {
  const novo = {
    produto: "Feijão",
    preco: 18.0,
    unidade: "quilo",
    peso: 1
  };

  const resultado = await mongoose.connection.db
    .collection("produtosAgricolas")
    .insertOne(novo);

  console.log("Produto agrícola (sem schema) inserido com _id:", resultado.insertedId);
};

connection();
