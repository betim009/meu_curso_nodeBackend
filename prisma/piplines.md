# 📚 Guia Didático: Todos os Comandos de Pipeline do Prisma ORM

Este guia apresenta **todos os comandos principais do Prisma ORM**, explicando como e quando usar cada um no fluxo de desenvolvimento de aplicações com **Node.js + Prisma + MySQL**.

---

## 🧱 1. Inicializar o Prisma

```bash
npx prisma init
```

✅ Cria a estrutura básica:
- `prisma/schema.prisma`: arquivo para definir os models
- `.env`: onde colocamos a conexão com o banco de dados

---

## 🗃️ 2. Configurar o banco de dados

No arquivo `.env`, defina:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/nomedobanco"
```

E em `schema.prisma`:

```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}
```

---

## 🧩 3. Criar ou editar Models

No `schema.prisma`, crie um model:

```prisma
model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}
```

📌 Cada `model` representa uma tabela no banco.

---

## 📦 4. Criar migration

```bash
npx prisma migrate dev --name nome_da_migration
```

✅ Cria uma migration baseada no `schema.prisma`  
✅ Aplica no banco de dados  
✅ Atualiza o Prisma Client

---

## 🛠️ 5. Atualizar o banco sem histórico (push)

```bash
npx prisma db push
```

✅ Aplica as mudanças direto no banco  
❌ Não cria arquivos de migration  
⚠️ Ideal apenas em desenvolvimento ou testes rápidos

---

## ⚙️ 6. Ver status das migrations

```bash
npx prisma migrate status
```

✅ Mostra se as migrations estão sincronizadas com o banco

---

## 📁 7. Gerar ou atualizar o Prisma Client manualmente

```bash
npx prisma generate
```

✅ Gera o Prisma Client com base no schema  
⚠️ Geralmente é executado automaticamente após `migrate`

---

## 🌱 8. Criar e rodar Seeders (dados iniciais)

### Etapas:

1. Adicione no `package.json`:

```json
"prisma": {
  "seed": "node prisma/seed.js"
}
```

2. Crie `prisma/seed.js`:

```js
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.user.createMany({
    data: [
      { name: 'Alberto', email: 'alberto@example.com' },
      { name: 'Maria', email: 'maria@example.com' }
    ]
  })
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(async () => await prisma.$disconnect())
```

3. Execute:

```bash
npx prisma db seed
```

---

## 🔃 9. Resetar o banco (perde todos os dados!)

```bash
npx prisma migrate reset
```

✅ Apaga todas as tabelas  
✅ Reaplica as migrations  
✅ Roda o seed automático (se configurado)

---

## 🔍 10. Introspecção de banco existente

```bash
npx prisma db pull
```

✅ Lê a estrutura de um banco já existente  
✅ Gera o `schema.prisma` com base nas tabelas reais  
⚠️ Ideal para adaptar Prisma a bancos prontos

---

## 📜 11. Formatador de schema

```bash
npx prisma format
```

✅ Organiza e identa o arquivo `schema.prisma`

---

## 🧪 12. Ver o client funcionando (Studio)

```bash
npx prisma studio
```

✅ Abre uma interface visual para ver os dados no navegador  
✅ Permite visualizar, editar e excluir registros

---

## 🚀 Resumo Visual

| Comando                        | O que faz                                        |
|-------------------------------|--------------------------------------------------|
| `npx prisma init`             | Cria a estrutura inicial                         |
| `npx prisma migrate dev`      | Cria e aplica migrations                         |
| `npx prisma db push`          | Atualiza o banco sem criar migration             |
| `npx prisma migrate status`   | Verifica o status das migrations                 |
| `npx prisma generate`         | Gera o Prisma Client                             |
| `npx prisma db seed`          | Executa o script de seeders                      |
| `npx prisma migrate reset`    | Apaga tudo e refaz as migrations                 |
| `npx prisma db pull`          | Lê estrutura do banco existente para o schema    |
| `npx prisma format`           | Formata o schema                                 |
| `npx prisma studio`           | Abre painel visual para ver os dados do banco   |

---

Com esse guia, você consegue usar **todas as ferramentas do Prisma** no seu projeto Express, mantendo a organização e escalabilidade com o modelo MSC.
