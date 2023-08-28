import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const registrationsRoutes = Router();

registrationsRoutes.post("/", async (req, res) => {
  try {
    const {
      name,
      zipCode,
      phone,
      address,
      district,
      city,
      cpf,
      email,
      password,
      repeatPassword,
    } = req.body;

    const verifyUser = await prisma.user.findUnique({
      where: { cpf },
    });

    if (verifyUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    await prisma.user.create({
      data: {
        name,
        zipCode,
        phone,
        address,
        district,
        city,
        cpf,
        email,
        password,
        repeatPassword,
      },
    });

    return res.status(201).end();
  } catch (error) {
    return res.status(404).json({ message: "Error to create user!" });
  }
});

registrationsRoutes.get("/", async (req, res) => {
  try {
    const listUsers = await prisma.user.findMany();

    if (listUsers.length === 0) {
      return res
        .status(404)
        .json({ message: "There are no registered users!" });
    }

    res.json(listUsers);
  } catch (error) {
    return res.status(404).json({ message: "Error to list users" });
  }
});

registrationsRoutes.get("/:cpf", async (req, res) => {
  const { cpf } = req.params;

  try {
    const checkCPF = await prisma.user.findUnique({
      where: { cpf: cpf },
    });

    if (checkCPF) {
      return res.status(404).json({ message: "This CPF already exists!" });
    }

    return res.status(200).end();
  } catch (error) {
    return res.status(404).json({ message: "Error to list users" });
  }
});

export { registrationsRoutes };
