# Projeto backend Sellers_Coffe

API REST construída com Express e MySQL para gerir usuários da cafeteria Sellers Coffe, incluindo autenticação JWT e senhas protegidas com bcrypt.

## Requisitos
- Node.js 18+ e npm
- MySQL 8+ com acesso local
- Banco `coffe_shop` com tabela `users` contendo as colunas utilizadas no projeto (`id`, `fullName`, `phone`, `email`, `password`, `type`)
- Arquivo `.env` com as variáveis descritas abaixo

## Passo a passo para criar o projeto
1. Crie a pasta do projeto e inicialize o NPM:
   ```bash
   mkdir sellers_coffe && cd sellers_coffe
   npm init -y
   ```
2. Instale as dependências:
   ```bash
   npm install express cors dotenv mysql2 jsonwebtoken bcryptjs
   ```
3. Instale as dependências de desenvolvimento:
   ```bash
   npm install -D nodemon
   ```
4. Estruture os diretórios `src/controllers`, `src/services`, `src/models`, `src/routes`, `src/middlewares` e `src/utils`.
5. Crie os arquivos principais:
   - `app.js` para inicializar o Express
   - `server.js` para subir o servidor e testar a conexão com o banco
   - `connection.js` para configurar o pool MySQL
   - Rotas e camadas da feature de usuários dentro de `src/`
6. Ajuste os scripts do `package.json`:
   ```json
   {
     "scripts": {
       "dev": "nodemon server.js",
       "start": "node server.js"
     }
   }
   ```

## Configuração do ambiente
Crie um arquivo `.env` na raiz com:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=12345678
DB_NAME=coffe_shop
JWT_SECRET=sua_chave_jwt
```
Atualize `connection.js` para ler essas variáveis com `process.env`.

## Executando a aplicação
- Inicie o servidor em modo desenvolvimento: `npm run dev`
- Inicie em produção/local: `npm start`
- A API sobe na porta `3000` (ajuste no `server.js` se necessário)

## Fluxo de autenticação
- Cadastre usuários via `POST /users` — as senhas são automaticamente criptografadas com `bcryptjs`
- Faça login em `POST /users/login` enviando `email` e `password` para receber um JWT
- Use o header `Authorization: Bearer <token>` para acessar rotas protegidas como `GET /users`
- Consulte detalhes em `src/docs/bycript.md`, `src/docs/jwt.md` e `src/docs/middlewares.md`

## Testes manuais
Exemplo de requisições usando `curl`:
```bash
# cadastro
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Fulano","phone":"11999999999","email":"fulano@example.com","password":"123456","type":"admin"}'

# login
curl -X POST http://localhost:3000/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"fulano@example.com","password":"123456"}'
```

O token retornado no login deve ser reutilizado nas rotas protegidas da API.
