# 📚 Criando um Backend com Express + Prisma + MySQL

Este material ensina como configurar um backend moderno usando **Node.js**, **Express** e **Prisma ORM**, com conexão ao banco de dados **MySQL**.

---

## ✅ Etapa 1: Banco de dados MySQL

Antes de começar, certifique-se de:

- Ter o MySQL instalado e rodando.
- Ter criado um banco de dados. Exemplo: `db_1`.

---

## ✅ Etapa 2: Iniciar um projeto Node.js

No terminal, dentro da pasta do seu projeto:

```bash
npm init -y
```

---

## ✅ Etapa 3: Instalar dependências

```bash
npm install express prisma @prisma/client
```

- `express`: cria o servidor e rotas da API.
- `prisma`: ORM para lidar com o banco de dados.
- `@prisma/client`: cliente gerado automaticamente após configurar os modelos.

---

## ✅ Etapa 4: Inicializar o Prisma

```bash
npx prisma init
```

Isso vai criar duas coisas importantes:

```
/prisma/schema.prisma   → Onde você define os modelos do banco
.env                    → Onde você define a URL de conexão com o banco
```

---

## ✅ Etapa 5: Configurar a conexão com o banco

Abra o arquivo `.env` e edite a variável `DATABASE_URL` com os seus dados:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/db_1"
```

Substitua `usuario`, `senha` e `db_1` conforme o seu banco real.

---

## ✅ Etapa 6: Criar o modelo (model)

Abra o arquivo `prisma/schema.prisma` e cole o seguinte conteúdo:

```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}
```

Esse model cria uma tabela `User` com:
- `id`: inteiro, autoincrementado e chave primária
- `name`: texto obrigatório
- `email`: texto obrigatório e único

---

## ✅ Etapa 7: Aplicar a migration

Rode o comando abaixo para criar a tabela no banco:

```bash
npx prisma migrate dev --name init
```

Esse comando:
- Gera um histórico de migração
- Cria as tabelas no banco
- Gera o Prisma Client atualizado

---

## ✅ Etapa 8: Criar o servidor Express

Crie um arquivo chamado `app.js` com o seguinte conteúdo:

```js
import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})
```

> 📌 Use `"type": "module"` no `package.json` para poder usar `import`.

---

## ✅ Etapa 9: Rodar o servidor

```bash
node app.js
```

Se quiser que ele reinicie automaticamente ao salvar arquivos, instale o `nodemon`:

```bash
npm install --save-dev nodemon
```

Adicione ao `package.json`:

```json
"scripts": {
  "dev": "nodemon app.js"
}
```

E execute com:

```bash
npm run dev
```

---

Pronto! Seu backend está funcionando com:
- Express para rotas
- Prisma para acesso ao banco
- MySQL como base de dados

---
