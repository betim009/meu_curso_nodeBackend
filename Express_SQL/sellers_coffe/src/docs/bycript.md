# Documentação de Bcrypt

## Visão geral
`bcryptjs` é utilizado para proteger senhas antes de armazená-las no banco. Ele aplica um algoritmo de hash lento com salt embutido, dificultando ataques de força bruta.

No projeto, o uso principal ocorre em `src/services/usersService.js`.

## Funções principais

### `bcrypt.hash(password, saltRounds)`
- **Parâmetros**
  - `password` (`string`): senha em texto plano informada pelo usuário.
  - `saltRounds` (`number`): custo de processamento. Usamos `10`, equilibrando segurança e performance.
- **Retorno**: `Promise<string>` com o hash gerado (ex.: `$2a$10$...`).
- **Uso no projeto**:
  ```js
  const hashedPassword = await bcrypt.hash(user.password, 10);
  await modelCreateUser({ ...user, password: hashedPassword });
  ```

### `bcrypt.compare(password, hash)`
- **Parâmetros**
  - `password` (`string`): senha enviada no login.
  - `hash` (`string`): senha armazenada no banco (`users.password`).
- **Retorno**: `Promise<boolean>` indicando se a senha confere.
- **Uso no projeto**:
  ```js
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return { error: { status: 401, message: "Credenciais inválidas" } };
  }
  ```

## Boas práticas
- Não reutilize o mesmo hash (o salt único por usuário já é garantido pelo `bcryptjs`).
- Evite revelar mensagens que diferenciem “usuário não existe” de “senha inválida”.
- Não armazene senhas em texto plano; sempre aplique `hash` antes.
- Escolha um número de `saltRounds` compatível com a infraestrutura.
