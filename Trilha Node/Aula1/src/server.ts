import express from "express";

const app = express();

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
 */

app.get("/", (req, res) => {
  return res.json({ message: "Olá Mundo" });
});

app.post("/users", (req, res) => {
  return res.json({ message: "Olá Mundo" });
});

app.listen(3333, () => console.log("Server is running on port 3333"));
