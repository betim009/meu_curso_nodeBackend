# Documentação de JWT

## Conceito
JSON Web Tokens (JWT) são usados para autenticação stateless. Um token assinado garante que o servidor possa validar a identidade do usuário sem consultar uma sessão no banco.

No projeto, os utilitários residem em `src/utils/jwt.js`, e o middleware `authMiddleware` consome `verifyToken` para proteger rotas.

## Métodos disponíveis

### `generateToken(payload)`
- **Local**: `src/utils/jwt.js`
- **Assinatura**: `generateToken(payload: object) => string`
- **Parâmetros**
  - `payload`: dados que identificam o usuário (ex.: `{ id, email, type }`).
- **Implementação**:
  ```js
  const DEFAULT_OPTIONS = { expiresIn: "1h" };
  const token = jwt.sign(payload, JWT_SECRET, DEFAULT_OPTIONS);
  ```
- **Retorno**: token JWT (string) com validade definida em `expiresIn`.

### `verifyToken(token)`
- **Local**: `src/utils/jwt.js`
- **Assinatura**: `verifyToken(token: string) => object`
- **Parâmetros**
  - `token`: token recebido no header `Authorization`.
- **Implementação**:
  ```js
  const decoded = jwt.verify(token, JWT_SECRET);
  ```
- **Retorno**: payload decodificado (ex.: `{ id, email, type, iat, exp }`).
- **Erros possíveis**: token expirado/alterado lança exceção — tratada no `authMiddleware`.

## Fluxo de uso
1. **Login**: `serviceLoginUser` gera o token com `generateToken(payload)`.
2. **Cliente**: armazena o token e envia em `Authorization: Bearer <token>`.
3. **Middleware**: `verifyToken` valida assinatura e expiração.
4. **Controllers**: podem acessar `req.user` com o payload autenticado.

## Recomendações
- Configure `JWT_SECRET` no `.env` e mantenha a chave segura.
- Ajuste `expiresIn` conforme a política de sessão desejada.
- Renove tokens antes da expiração (refresh token) se precisar de sessões longas.
- Invalide tokens rotacionando `JWT_SECRET` quando necessário, forçando re-login.
