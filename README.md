# Task Manager API (Node + Express)

A small, **industry-style Node.js + Express REST API** that manages tasks. This is designed to look like a realistic backend project so you can use it to teach **GitHub**, project structure, and common Node practices.

### Tech stack

- **Runtime**: Node.js (CommonJS)
- **Framework**: Express
- **Logging & middleware**: morgan, cors
- **Testing**: Jest + Supertest
- **Code quality**: ESLint + Prettier

---

## Project structure

- `src/app.js` – Express app, middleware, routes registration, error handling
- `src/server.js` – Starts the HTTP server
- `src/routes/taskRoutes.js` – Route definitions for `/api/tasks`
- `src/controllers/taskController.js` – Request/response handling and validation
- `src/services/taskService.js` – In-memory business logic for tasks
- `src/models/task.js` – Task type definition (JSDoc)
- `tests/taskRoutes.test.js` – Example Jest test hitting the API

This separation (routes → controllers → services) is very common in production Node projects.

---

## Getting started

From the project root:

```bash
npm install
npm run dev
```

The API will start on `http://localhost:3000`.

### Health check

```bash
curl http://localhost:3000/health
```

Expected:

```json
{ "status": "ok" }
```

---

## Task API

Base URL: `http://localhost:3000/api/tasks`

### 1. Create a task

- **POST** `/api/tasks`
- Body:

```json
{
  "title": "Learn GitHub"
}
```

### 2. List all tasks

- **GET** `/api/tasks`

### 3. Get a single task

- **GET** `/api/tasks/:id`

### 4. Update a task

- **PATCH** `/api/tasks/:id`
- Body (any subset is allowed):

```json
{
  "title": "Learn Git & GitHub",
  "completed": true
}
```

### 5. Delete a task

- **DELETE** `/api/tasks/:id`

---

## Running tests

```bash
npm test
```

This runs the Jest test in `tests/taskRoutes.test.js`, which:

- Creates a task through the API
- Lists tasks and asserts that at least one exists
- Checks that requesting a non-existent task returns 404

---

## Ideas for teaching GitHub with this repo

- **git basics**: `git status`, `git diff`, `git log`
- **branching**: create a feature branch to add a new field to `Task` (e.g. `priority`)
- **code review**: students open PRs that change controllers/services or add new tests
- **issues**: create GitHub issues like “Add PUT endpoint” or “Persist data to a database”

This should give your students a realistic-looking backend project to explore while they learn Git and GitHub.

Added a master
