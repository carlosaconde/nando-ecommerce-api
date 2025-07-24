import { Router } from "express";
import { ProductRoutes } from "../../../products/infrastructure/routes/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/products", ProductRoutes.routes);

    return router;
  }
}
