# Projeto Cadastro

Este projeto é uma aplicação completa de **cadastro e listagem de usuários**, com **frontend em React (Vite)** e **backend em Node.js + Express + Prisma + MongoDB**.  
Inclui autenticação via **JWT** e rotas privadas para proteger os dados dos usuários.

---

## 🗂 Estrutura de pastas

```

projetoCadastro/
│
├─ projetoAPI/       # Backend (Node.js + Express + Prisma)
├─ vite-project/     # Frontend (React + Vite)
└─ .gitignore        # Arquivos sensíveis ignorados pelo Git

````

---

## ⚙️ Backend

### Instalação

1. Acesse a pasta do backend:
```bash
cd projetoAPI
````

2. Instale as dependências:

```bash
npm install
```

3. Crie o arquivo `.env` com as variáveis de ambiente:

```env
DATABASE_URL=mongodb+srv://<usuario>:<senha>@<host>/<db>
JWT_SECRET=sua_chave_secreta
```

### Executando o backend

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

### Funcionalidades

* Rotas públicas: cadastro e login.
* Rotas privadas: listagem de usuários (exigem token JWT).
* Middleware de autenticação (`auth.js`) valida tokens.

---

## ⚡ Frontend

### Instalação

1. Acesse a pasta do frontend:

```bash
cd vite-project
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` caso precise de variáveis, por exemplo:

```env
VITE_API_URL=http://localhost:3000
```

### Executando o frontend

```bash
npm run dev
```

O frontend será servido pelo Vite (ex.: `http://localhost:5173`).

### Funcionalidades

* Tela de cadastro de usuários.
* Tela de login com armazenamento do token JWT.
* Tela de listagem de usuários protegida por autenticação.
* Redirecionamento automático se o usuário não estiver logado.

---

## 🔒 Segurança

* Tokens JWT armazenados no `localStorage`.
* Rotas privadas bloqueadas se o token estiver ausente ou inválido.
* `.env` e arquivos sensíveis não devem ser enviados para o GitHub.

---

## 💡 Observações

* Para testar o projeto localmente, rode **backend e frontend simultaneamente**.
* Frontend se comunica com backend via `VITE_API_URL`.
* Use `npm install` sempre que clonar o repositório.

```


