import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { isLoged } from "../middleware/isLoged.js";

const prisma = new PrismaClient();

const ordersRoutes = Router();

ordersRoutes.post("/:id", async (req, res) => {
  const { id } = req.params;
  const { products, orderSummary, delivery } = req.body;

  try {
    await prisma.order.create({
      data: {
        products,
        orderSummary,
        delivery,
        userId: id,
      },
    });

    return res.status(201).end();
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: "Error to create order" });
  }
});

ordersRoutes.get("/:id", isLoged, async (req, res) => {
  const { id } = req.params;

  try {
    const listOrders = await prisma.order.findMany({
      where: {
        userId: id,
      },
      orderBy: {
        created_at: "asc",
      },
    });

    if (listOrders.length === 0) {
      return res
        .status(404)
        .json({ message: "There are no registered orders!" });
    }

    res.json(listOrders);
  } catch (error) {
    return res.status(404).json({ message: "Error to list orders" });
  }
});

export { ordersRoutes };
