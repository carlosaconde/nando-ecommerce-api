import { Router } from "express";
import ProductRouter from "../../../features/products/infrastructure/routes/ProductRouter";

const ApiRouter = Router();

ApiRouter.use("/api/products", ProductRouter);

export default ApiRouter;
