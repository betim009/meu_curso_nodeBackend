## Escola API

API REST simples para gerenciar professores (e futuramente alunos e turmas) usando Node.js, Express e MongoDB/Mongoose.

### Tecnologias
- Node.js 20+
- Express 5
- Mongoose 8
- MongoDB Atlas (ou outro cluster Mongo compatível)
- Bcrypt (hash de senhas)
- Dotenv para carregar variáveis de ambiente
- Nodemon para desenvolvimento

### Configuração
1. Instale dependências (você também pode rodar os comandos um a um caso prefira):
   ```bash
   npm init -y
   npm install express mongoose dotenv bcryptjs
   npm install --save-dev nodemon
   # ou simplesmente:
   npm install
   ```
2. Crie um arquivo `.env` baseado em `env.txt`, definindo (o pacote `dotenv` já é carregado em `connection.mjs`):
   ```
   MONGO_URI=<sua-string-de-conexao>
   PORT=3000
   ```
3. Inicie o servidor:
   ```bash
   npm run dev
   ```

### Arquitetura
O projeto segue o padrão MSC:
- `src/models`: Schemas Mongoose (ex.: `professorModel.mjs`)
- `src/services`: Camada de negócio/acesso ao banco
- `src/controllers`: Controllers Express que tratam requisições
- `src/routes`: Rotas agrupadas por recurso
- `app.mjs`: Configuração do Express
- `connection.mjs`: Conexão com MongoDB
- `index.mjs`: Ponto de entrada

### Endpoints
- Professores
  - `GET /professores` – lista todos
  - `GET /professores/:id` – busca por ID
  - `POST /professores` – cria um professor (campo `senha` é obrigatório; salvo com hash)
  - `PUT /professores/:id` – atualiza
  - `DELETE /professores/:id` – remove
- Auth
  - `POST /auth/login` – autentica professor (`email` + `senha`)

Use Thunder Client/Postman para testar enviando/recebendo JSON.

### Exemplos de Requisição
- `POST /professores`
  ```json
  {
    "nome": "Maria Souza",
    "email": "maria.souza@escola.com",
    "disciplina": "Matemática",
    "telefone": "(11) 99999-0000",
    "senha": "minhasenha123"
  }
  ```
- `PUT /professores/:id`
  ```json
  {
    "nome": "Maria Souza",
    "disciplina": "Matemática Avançada"
  }
  ```
- `DELETE /professores/:id`
  ```http
  DELETE /professores/66f1c7f7b1c2a3c7d5e8f011
  ```
- `GET /professores/:id`
  ```http
  GET /professores/66f1c7f7b1c2a3c7d5e8f011
  ```

Substitua `:id` por um `ObjectId` válido retornado no `POST`. 
