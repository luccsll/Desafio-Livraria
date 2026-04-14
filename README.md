# Desafio do projeto - Gerenciamento de biblioteca

Este projeto tem como objetivo atender o desafio da pós-graduação Full-Stack Development da FIAP que estou fazendo no momento.

>
> ### Objetivo  
> Desenvolver um sistema de gerenciamento de biblioteca utilizando a última versão do TypeScript. O foco será criar um CRUD (Create, Read, Update, Delete), que se conecta a um banco de dados, podendo ser NoSQL ou SQL.
>
> ### Requisitos Funcionais  
> Gerenciamento de livros: o objetivo do seu sistema será disponibilizar uma API que tenha as funcionalidades de um CRUD para que uma aplicação Front-end possa gerenciar estes dados.  
>
> Estrutura proposta para entidade Livro: cada livro pode possuir um título, autor(a), ISBN, ano de publicação e, caso queira se aventurar, pode adicionar uma Entidade Editora, assim um livro pode fazer parte de uma Editora e uma Editora pode ter uma lista de livros.
>
> ### Requisitos Técnicos  
> Desenvolvimento do projeto utilizando a versão mais recente do TypeScript para garantir que o seu código esteja atualizado. Integração do sistema a um banco de dados que pode ser um NoSQL ou SQL. Neste cenário, você pode utilizar o Docker ou um banco de dados grátis como o PostgreSQL na plataforma Supabase.  
>
> Lembrando que, em caso de dúvidas, estamos disponíveis no Discord!

## O que tem hoje

- Cadastro e login de usuário (`/auth/register` e `/auth/login`)
- CRUD de:
  - `author`
  - `book`
  - `publisher`
- Rotas de escrita protegidas por token
- Campos de auditoria:
  - `createdBy` (email de quem criou)
  - `editedBy` (email de quem editou)

## Tecnologias

- Node.js + TypeScript
- Fastify
- Prisma
- MongoDB
- JWT (`jsonwebtoken`)
- Hash de senha com `bcryptjs`

## Rodando o projeto

1. Instalar dependências:

```bash
npm install
```

2. Criar `.env` na raiz:

```env
DATABASE_URL="sua_url_mongodb"
JWT_SECRET="uma_chave_bem_forte"
JWT_EXPIRES_IN="1d"
```

3. Gerar client do Prisma:

```bash
npx prisma generate
```

4. Sincronizar schema com banco:

```bash
npx prisma db push
```

5. Subir API:

```bash
npm run dev
```

Por padrão ela sobe na porta `4444`.

---

## Autenticação

### Registrar usuário

`POST /auth/register`

Body:

```json
{
  "name": "Lucas",
  "email": "lucas@email.com",
  "password": "123456"
}
```

### Login

`POST /auth/login`

Body:

```json
{
  "email": "lucas@email.com",
  "password": "123456"
}
```

Retorno esperado:

```json
{
  "user": {
    "id": "id_do_usuario",
    "name": "Lucas",
    "email": "lucas@email.com"
  },
  "token": "jwt_aqui"
}
```

Use esse token no header:

`Authorization: Bearer SEU_TOKEN`

---

## Endpoints

### Author

- `GET /author` (público)
- `POST /author` (protegido)
- `PUT /author/:id` (protegido)
- `DELETE /author/:id` (protegido)

Exemplo `POST /author`:

```json
{
  "name": "Autor Teste",
  "email": "autor@email.com"
}
```

### Publisher

- `GET /publisher` (público)
- `POST /publisher` (protegido)
- `PUT /publisher/:publisherCode` (protegido)
- `DELETE /publisher/:publisherCode` (protegido)

Exemplo `POST /publisher`:

```json
{
  "name": "Editora XPTO",
  "publisherCode": "EDIT123"
}
```

### Book

- `GET /book` (público)
- `POST /book` (protegido)
- `PUT /book/:id` (protegido)
- `DELETE /book/:id` (protegido)

Exemplo `POST /book`:

```json
{
  "name": "Livro Teste",
  "isbn": "9783161484100",
  "publishedAt": "2026-01-01T00:00:00.000Z",
  "category": "Tecnologia",
  "authorId": "ID_DO_AUTOR",
  "publisherId": "ID_DA_EDITORA"
}
```
