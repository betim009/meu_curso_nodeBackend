# Documentação de Middlewares

## Contexto
Middlewares são funções executadas entre a requisição do cliente e a resposta do servidor. Em um app Express, eles podem:
- Validar dados antes de alcançar os controllers.
- Interromper o fluxo retornando uma resposta antecipada (ex.: 401, 400).
- Adicionar informações ao objeto `req` para uso posterior.

No projeto Sellers Coffe, o middleware principal está em `src/middlewares/authMiddleware.js` e é responsável por validar o token JWT enviado nas rotas protegidas.

## authMiddleware
- **Assinatura**: `authMiddleware(req, res, next)`
- **Local**: `src/middlewares/authMiddleware.js`
- **Função**: garante que apenas requisições autenticadas acessem rotas guardadas.

### Passo a passo
1. Lê o header `Authorization`.
2. Valida se o header segue o padrão `Bearer <token>`.
3. Executa `verifyToken` (utilitário JWT) para decodificar o token.
4. Caso o token seja válido, armazena o payload em `req.user` e chama `next()`.
5. Caso contrário, encerra a requisição com `401 Unauthorized`.

### Retornos possíveis
- `401 Token não encontrado`: header ausente.
- `401 Token mal formatado`: header não segue o padrão esperado.
- `401 Token inválido ou expirado`: token inválido ou fora do prazo.
- `next()`: prossegue para o controller quando tudo está correto.

### Uso
Aplicado diretamente nas rotas protegidas, por exemplo:
```js
const authMiddleware = require("../middlewares/authMiddleware");
router.get("/users", authMiddleware, findUsers);
```

## Boas práticas ao criar novos middlewares
- Sempre chamar `next()` quando não retornar resposta.
- Evitar lógica pesada ou operações bloqueantes por aqui.
- Manter mensagens de erro consistentes.
- Reutilizar middlewares genéricos em múltiplas rotas.
