import { NextFunction, Request, Response } from "express";
import { CreateProductUseCase } from "../../application/use-cases/CreateProductUseCase/CreateProductUseCase";
import { GetAllProductsUseCase } from "../../application/use-cases/GetAllProductsUseCase/GetAllProductsUseCase";
import { DeleteProductUseCase } from "../../application/use-cases/DeleteProductUseCase/DeleteProductUseCase";
import { GetOneByIdUseCase } from "../../application/use-cases/GetOneByIdUseCase/GetOneByIdUseCase";
import { UpdateProductUseCase } from "../../application/use-cases/UpdateProductUseCase/UpdateProductUseCase";
import { httpResponse } from "../../../../shared/infrastructure/utils/HttpResponse";

export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly getAllProductsUseCase: GetAllProductsUseCase,
    private readonly deleteProductUseCase: DeleteProductUseCase,
    private readonly getOneByIdUseCase: GetOneByIdUseCase,
    private readonly updateProductUseCase: UpdateProductUseCase
  ) {}

  create = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const product = await this.createProductUseCase.execute(req.body);
      httpResponse.created(res, product);
    } catch (error) {
      next(error);
    }
  };

  getAll = async (req: Request, res: Response) => {
    const { page = 1, limit = 10, name } = req.query;

    try {
      const pageNum = +page;
      const limitNum = +limit;
      const paginationParams = {
        page: pageNum,
        limit: limitNum,
        name: typeof name === "string" ? name : undefined,
      };
      const products = await this.getAllProductsUseCase.execute(
        paginationParams
      );
      httpResponse.success(res, products);
    } catch (error) {
      throw error;
    }
  };

  deleteById = async (req: Request, res: Response) => {
    try {
      const deleteProduct = await this.deleteProductUseCase.execute(
        req.params.id
      );
      if (!deleteProduct) {
        httpResponse.notFound(res, "id not found");
      }
      httpResponse.success(res, deleteProduct);
    } catch (error) {
      httpResponse.internalServer(res);
    }
  };

  getOneById = async (req: Request, res: Response) => {
    try {
      const product = await this.getOneByIdUseCase.execute(req.params.id);
      if (!product) {
        httpResponse.notFound(res, "id not found");
      }
      httpResponse.success(res, product);
    } catch (error) {
      httpResponse.internalServer(res);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const product = await this.updateProductUseCase.execute(
        req.params.id,
        req.body
      );
      if (!product) {
        httpResponse.notFound(res, "id not found");
      }
      httpResponse.created(res, product);
    } catch (error) {
      httpResponse.internalServer(res);
    }
  };
}
