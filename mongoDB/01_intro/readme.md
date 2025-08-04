# Projeto Node.js com MongoDB (Mongoose)

## 📦 Instalação do Projeto

1. **Inicialize o projeto:**

```bash
npm init -y
```

2. **Instale as dependências:**

```bash
npm install mongoose dotenv
```

3. **Configure o projeto como módulo ES (ECMAScript Module):**

No arquivo `package.json`, adicione:

```json
"type": "module"
```

E altere `"main"` para:

```json
"main": "index.mjs"
```

---

## 🚀 Como iniciar o projeto

1. **Crie um arquivo `.env` na raiz do projeto com sua URI do MongoDB Atlas:**

```
MONGO_URI=mongodb+srv://usuario:senha@cluster0.mongodb.net/nomeDoBanco
```

2. **Crie o arquivo principal `index.mjs` com a lógica de conexão.**

3. **Execute o projeto com:**

```bash
node index.mjs
```

---

## ✅ Requisitos

- Node.js instalado
- Conta no MongoDB Atlas com banco e usuário criados

