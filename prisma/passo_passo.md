# Passo a Passo: Como criar este projeto Node.js + Express + Prisma (MSC)

## 1. Inicialização do Projeto

```bash
mkdir nome-do-projeto
cd nome-do-projeto
npm init -y
```

## 2. Instalação das Dependências

```bash
npm install express @prisma/client prisma
npm install --save-dev nodemon
```

## 3. Configuração do Prisma

```bash
npx prisma init
```
- Edite o arquivo `.env` para configurar sua conexão com o banco de dados (ex: MySQL).
- Edite o arquivo `prisma/schema.prisma` para definir o modelo User:

```prisma
model User {
  id       Int     @id @default(autoincrement())
  name     String
  email    String  @unique
  password String?
}
```

## 4. Criação do Banco e Migration

```bash
npx prisma migrate dev --name init
```

## 5. Estrutura de Pastas MSC

```
/src
  /controllers
  /models
  /services
  /routes
  /seeders
```

## 6. Implementação dos Arquivos

- **app.js**: configura o Express e importa as rotas.
- **src/models/userModel.js**: acesso ao banco via Prisma.
- **src/services/userService.js**: lógica de negócio.
- **src/controllers/userController.js**: lida com as requisições HTTP.
- **src/routes/userRoutes.js**: define as rotas de usuário.
- **src/seeders/userSeeder.js**: popula o banco com usuários de exemplo.

## 7. Scripts no package.json

Adicione em `package.json`:

```json
"scripts": {
  "dev": "nodemon app.js",
  "seed": "node src/seeders/userSeeder.js"
}
```

## 8. Rodando o Projeto

- Para rodar o servidor em modo desenvolvimento:
  ```bash
  npm run dev
  ```
- Para popular o banco com seeders:
  ```bash
  npm run seed
  ```

## 9. Rotas Disponíveis

- `GET    /users`           — Lista todos os usuários
- `GET    /users/:id`       — Busca usuário por ID
- `POST   /users`           — Cria novo usuário (JSON: name, email, password)
- `PUT    /users/:id`       — Atualiza usuário por ID
- `DELETE /users/:id`       — Deleta usuário por ID
- `POST   /users/login`     — Login (JSON: email, password)

## 10. Observações

- O campo `password` está como opcional para facilitar a migração inicial. Recomenda-se adicionar hash de senha para produção.
- O padrão MSC facilita a manutenção e escalabilidade do projeto.
- Para adicionar novos recursos, siga a mesma lógica: crie Model, Service, Controller e rotas.

---

**Dica:** Use ferramentas como Postman ou Insomnia para testar as rotas da API. 