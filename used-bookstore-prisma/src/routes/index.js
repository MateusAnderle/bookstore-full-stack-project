import { Router } from "express";
import { ordersRoutes } from "./orders.routes.js";
import { productsRoutes } from "./products.routes.js";
import { registrationsRoutes } from "./registration.routes.js";
import { authRoutes } from "./auth.routes.js";

const routes = Router();

routes.use("/auth/token", authRoutes);
routes.use("/order", ordersRoutes);
routes.use("/products", productsRoutes);
routes.use("/registration", registrationsRoutes);

export { routes };
