import mongoose from "mongoose";

const AgricultorSchema = new mongoose.Schema({
  fullName: String,
  cpf: String,
  birthDate: Date,
  phone: String,
  active: Boolean
});

const Agricultor = mongoose.model("Agricultor", AgricultorSchema);

export const listAllWithMongoose = async () => {
  const dados = await Agricultor.find();
  console.log("Documentos encontrados com Mongoose:", dados);
}

export const findActives = async (status) => {
  const data = await Agricultor.find({active: status});
  console.log(data);
}

export const createWithMongoose = async () => {
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