

# 📦 Projeto 03_intro_v3 – CRUD com Mongoose e Arquitetura em Camadas

Este projeto é uma aplicação Node.js usando apenas o Mongoose (sem Express), organizada com arquitetura em camadas para facilitar a manutenção, testes e expansão futura.

---

## 🚀 Como instalar

1. **Clone o repositório:**

```bash
git clone <url-do-repositorio>
cd 03_intro_v3
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o ambiente:**

Crie um arquivo `.env` na raiz com a variável de conexão do MongoDB:

```
MONGO_URI=mongodb+srv://<user>:<senha>@<cluster>/<nome-do-banco>?retryWrites=true&w=majority
```

---

## ▶️ Como iniciar o projeto

Para rodar a aplicação, execute:

```bash
node index.js
```

A aplicação realiza testes manuais de inserção, leitura, atualização e exclusão de produtos diretamente no banco.

---

## 🧠 Arquitetura do Projeto

O projeto segue uma separação de responsabilidades organizada da seguinte forma:

```
03_intro_v3/
│
├── app.js                # Lógica principal e testes manuais
├── index.js              # Ponto de entrada da aplicação
├── .env                  # Variáveis de ambiente (não versionado)
│
├── models/
│   └── produtoModel.js   # Schema do Mongoose com validações
│
├── services/
│   └── produtoService.js # Lógica de negócio (CRUD)
│
├── controllers/
│   └── produtoController.js # Intermediário entre app.js e service
│
└── readme.md             # Este documento
```

---

## 🛠 Tecnologias usadas

- Node.js
- Mongoose
- MongoDB Atlas (ou local)

---

## 🎯 Objetivo

Mostrar como organizar um CRUD simples com Mongoose em um formato modular e escalável, mesmo sem frameworks como Express. Ideal para fins educacionais e base para versões mais robustas no futuro.

---