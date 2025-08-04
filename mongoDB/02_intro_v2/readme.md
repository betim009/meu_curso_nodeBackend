


# Projeto Node.js com MongoDB e Mongoose

## 🧠 Objetivo Geral

Este projeto tem como objetivo demonstrar de forma simples e prática como:

- Conectar uma aplicação Node.js ao MongoDB utilizando `mongoose`;
- Modelar dados usando `mongoose.Schema`;
- Realizar operações básicas com documentos (CRUD);
- Organizar o código de forma modular;
- Trabalhar com dados reais (como nome, CPF, telefone, etc.).

---

## 🧩 Estrutura do Projeto

### 📄 `index.mjs`

- Responsável por iniciar a aplicação;
- Realiza a conexão com o MongoDB usando variáveis de ambiente;
- Lista as coleções disponíveis no banco;
- Executa funções específicas de acordo com o que estiver descomentado;
- Modular e fácil de testar diferentes comportamentos (ex: listar todos, buscar ativos).

### 📄 `agricultors.js`

- Contém o modelo `Agricultor` com os seguintes campos: `fullName`, `cpf`, `birthDate`, `phone` e `active`;
- Define funções para:
  - Listar todos os documentos;
  - Filtrar documentos ativos ou inativos;
  - Criar um novo agricultor com dados simulados;
- Serve como base para entender como usar o Mongoose para modelar e manipular documentos no banco.

---

## 🧪 Uso Didático

Este projeto é ideal para:

- Treinar o uso do Mongoose com Node.js;
- Estudar as etapas de modelagem, conexão e operações com banco de dados MongoDB;
- Servir como ponto de partida para construir uma API REST;
- Ser incluído em aulas, cursos ou tutoriais voltados para backend com MongoDB.

---

## 🚀 Expansão Sugerida

- Criar rotas com Express.js ou NestJS;
- Implementar endpoints RESTful (GET, POST, PUT, DELETE);
- Adicionar validações, middlewares e autenticação;
- Criar uma interface frontend simples para interagir com os dados.

---