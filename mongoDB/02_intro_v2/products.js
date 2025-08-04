const ProdutoAgricolaSchema = new mongoose.Schema({
  produto: String,
  preco: Number,
  unidade: String,
  peso: Number
});

const ProdutoAgricola = mongoose.model("ProdutoAgricola", ProdutoAgricolaSchema);