import { Request, Response } from "express";
import { CreateProductUseCase } from "../../application/use-cases/CreateProductUseCase/CreateProductUseCase";
import { GetAllProductsUseCase } from "../../application/use-cases/GetAllProductsUseCase/GetAllProductsUseCase";
import { DeleteProductUseCase } from "../../application/use-cases/DeleteProductUseCase/DeleteProductUseCase";
import { GetOneByIdUseCase } from "../../application/use-cases/GetOneByIdUseCase/GetOneByIdUseCase";
import { UpdateProductUseCase } from "../../application/use-cases/UpdateProductUseCase/UpdateProductUseCase";

export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly getAllProductsUseCase: GetAllProductsUseCase,
    private readonly deleteProductUseCase: DeleteProductUseCase,
    private readonly getOneByIdUseCase: GetOneByIdUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase
  ) {}

  async create(req: Request, res: Response) {
    try {
      const product = await this.createProductUseCase.execute(req.body);
      res.status(201).json(product);
    } catch (error) {
      throw error;
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const products = await this.getAllProductsUseCase.execute();
      res.status(200).json(products);
    } catch (error) {
      throw error;
    }
  }

  async deleteById(req: Request, res: Response) {
    try {
      const deleteProduct = await this.deleteProductUseCase.execute(
        req.params.id
      );
      res.status(200).json("registro eliminado");
    } catch (error) {
      res.status(404).json("id not found");
    }
  }

  async getOneById(req: Request, res: Response) {
    try {
      const product = await this.getOneByIdUseCase.execute(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json("id not found");
    }
  }

  async update(req: Request, res: Response) {
    try {
      const product = await this.updateProductUseCase.execute(
        req.params.id,
        req.body
      );
      res.status(201).json(product);
    } catch (error) {
      res.status(404).json("id not found");
    }
  }
}
