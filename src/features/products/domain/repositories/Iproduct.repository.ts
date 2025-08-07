import { PaginationResult } from "../../../../shared/pagination/PaginationDto";
import { PaginationParamsDto } from "../../../../shared/pagination/PaginationParamsDto";
import { CreateProductDto } from "../../application/dtos/CreateProductDto";
import { UpdateProductDto } from "../../application/dtos/UpdateProductDto";
import { ProductEntity } from "../entities/Product.Entity";

export interface IProductRepository {
  create(
    product: Omit<CreateProductDto, "updateAt" | "category">
  ): Promise<ProductEntity>;
  getAll(params: PaginationParamsDto): Promise<PaginationResult<ProductEntity>>;
  deleteById(id: string): Promise<boolean>;
  getOneById(id: string): Promise<ProductEntity>;
  update(id: string, product: UpdateProductDto): Promise<ProductEntity>;
}
