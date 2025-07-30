import { Router } from "express";

import { IProductRepository } from "../../domain/repositories/Iproduct.repository";
import { ProductController } from "../controllers/controller";
import { PrismaRepository } from "../repositories/PrismaRepository";
import { CreateProductUseCase } from "../../application/use-cases/CreateProductUseCase/CreateProductUseCase";
import { GetAllProductsUseCase } from "../../application/use-cases/GetAllProductsUseCase/GetAllProductsUseCase";
import { DeleteProductUseCase } from "../../application/use-cases/DeleteProductUseCase/DeleteProductUseCase";
import { GetOneByIdUseCase } from "../../application/use-cases/GetOneByIdUseCase/GetOneByIdUseCase";

const ProductRouter = Router();

//DI
const productRepository = new PrismaRepository();
const createProductUseCase = new CreateProductUseCase(productRepository);
const getAllProductUseCase = new GetAllProductsUseCase(productRepository);
const deleteProductUseCase = new DeleteProductUseCase(productRepository);
const getOneByIdUseCAse = new GetOneByIdUseCase(productRepository);

const productController = new ProductController(
  createProductUseCase,
  getAllProductUseCase,
  deleteProductUseCase,
  getOneByIdUseCAse
);

ProductRouter.post("/", (req, res) => productController.create(req, res));
ProductRouter.get("/", (req, res) => productController.getAll(req, res));
ProductRouter.delete("/:id", (req, res) =>
  productController.deleteById(req, res)
);
ProductRouter.get("/:id", (req, res) => productController.getOneById(req, res));

export default ProductRouter;
