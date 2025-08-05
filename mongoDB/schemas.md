

# 🧱 Mongoose Schema: Sintaxe Básica e Exemplos Avançados

## 📌 O que é um Schema?

Um **Schema** no Mongoose define a estrutura de documentos dentro de uma collection do MongoDB. Ele especifica os campos, tipos e regras de validação.

---

## 📦 Exemplo básico de Schema com Mongoose

```js
const mongoose = require('mongoose');

// Define o schema
const ProdutoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  preco: {
    type: Number,
    required: true
  },
  emEstoque: {
    type: Boolean,
    default: true
  },
  criadoEm: {
    type: Date,
    default: Date.now
  }
});

// Cria o modelo (tabela)
const Produto = mongoose.model('Produto', ProdutoSchema);

module.exports = Produto;
```

### 🧾 Explicação

- `type`: tipo do campo (String, Number, etc.)
- `required`: obrigatório ou não
- `default`: valor padrão caso o campo não seja informado

---

## 🚀 Exemplos Avançados de Schema

### 🔗 Referência (relacionamento entre coleções)

```js
const PedidoSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente',
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  }
});
```

### 📋 Validação personalizada

```js
const UsuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: props => `${props.value} não é um email válido!`
    }
  }
});
```

### 🧮 Campo com enumeração

```js
const PagamentoSchema = new mongoose.Schema({
  metodo: {
    type: String,
    enum: ['pix', 'boleto', 'cartao'],
    required: true
  }
});
```

### 📚 Subdocumentos (documento dentro de documento)

```js
const CursoSchema = new mongoose.Schema({
  titulo: String,
  aulas: [{
    titulo: String,
    duracao: Number
  }]
});
```

### 📌 Campo virtual (não salvo no banco)

```js
const PessoaSchema = new mongoose.Schema({
  nome: String,
  sobrenome: String
});

PessoaSchema.virtual('nomeCompleto').get(function () {
  return `${this.nome} ${this.sobrenome}`;
});
```

### 🔐 Middleware (pré-save)

```js
UsuarioSchema.pre('save', function(next) {
  console.log('Salvando usuário...');
  next();
});
```

---

Esses são alguns dos recursos mais avançados dos Schemas com Mongoose. Combinando isso, você consegue criar modelos robustos com validações, relacionamentos, campos dinâmicos e regras de negócio integradas.