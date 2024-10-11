import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.listen(3000, () => {
  console.log("Servidor Rodando...");
});

app.get("/usuarios", async (req, res) => {
  var users = await prisma.user.findMany();
  res.status(200).json(users);
});

app.post("/usuarios", async (req, res) => {
  await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      cpf: req.body.cpf,
    },
  });
  res.status(201).json(req.body);
});

app.put("/usuarios/:id", async (req, res) => {
  await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      cpf: req.body.cpf,
    },
  });
  res.status(200).json(req.body);
});

app.delete("/usuarios/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).send(`Usuário de Id: ${req.params.id} foi deletado`);
});
