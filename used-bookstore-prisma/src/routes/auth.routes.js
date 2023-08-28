import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

const authRoutes = Router();

authRoutes.get("/", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_KEY);
    return res.status(200).end();
  } catch (error) {
    return res.status(401).send({ message: "Token expirated" });
  }
});

authRoutes.post("/", async (req, res) => {
  const { login, password } = req.body;

  try {
    const verifyLogin = await prisma.user.findFirst({
      where: { email: login },
    });
    const verifyPassword = password === verifyLogin.password;

    if (!verifyLogin || !verifyPassword) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    if (verifyLogin || verifyPassword) {
      const token = jwt.sign(
        {
          idUsuario: verifyLogin.id,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "4h",
        }
      );
      return res.status(200).json({
        message: "Successfully authenticated",
        token: token,
        userId: verifyLogin.id,
      });
    }
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed" });
  }
});

export { authRoutes };
