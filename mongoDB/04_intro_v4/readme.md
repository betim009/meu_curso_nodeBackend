# 📦 Projeto 04_intro_v4 – API REST com Express e Mongoose

Esta versão evolui o exemplo anterior para uma API REST completa usando **Express** e mantendo a arquitetura em camadas.

---

## 🚀 Como instalar

```bash
git clone <url-do-repositorio>
cd mongoDB/04_intro_v4
npm install
```

Crie um arquivo `.env` com a string de conexão do MongoDB e, opcionalmente, a porta do servidor:

```
MONGO_URI=mongodb://<usuario>:<senha>@<host>/<banco>
PORT=3000
```

---

## ▶️ Como iniciar o projeto

```bash
npm start
```

---

## 📚 Endpoints

| Método | Rota              | Descrição                       |
|--------|------------------|--------------------------------|
| GET    | `/produtos`       | Lista todos os produtos        |
| GET    | `/produtos/:id`   | Busca produto pelo ID          |
| POST   | `/produtos`       | Cria um novo produto           |
| PUT    | `/produtos/:id`   | Atualiza um produto existente  |
| DELETE | `/produtos/:id`   | Remove um produto              |

### Exemplo de corpo para POST/PUT

```json
{
  "produto": "Café",
  "preco": 32.5,
  "unidade": "kg",
  "peso": 5
}
```

---

## 🧠 Arquitetura do Projeto

```
04_intro_v4/
│
├── app.js                 # Configuração do Express e da conexão com o MongoDB
├── index.js               # Ponto de entrada
├── routes/                # Definição das rotas
├── controllers/           # Camada de controle
├── services/              # Regras de negócio
└── models/                # Schemas do Mongoose
```

---

## 🛠 Tecnologias

- Node.js
- Express
- Mongoose
- MongoDB

