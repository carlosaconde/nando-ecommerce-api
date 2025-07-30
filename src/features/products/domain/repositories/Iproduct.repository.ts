import { CreateProductDto } from "../../application/dtos/CreateProductDto";
import { UpdateProductDto } from "../../application/dtos/UpdateProductDto";
import { ProductEntity } from "../entities/Product.Entity";

export interface IProductRepository {
  create(product: Omit<CreateProductDto, "updateAt">): Promise<ProductEntity>;
  getAll(): Promise<ProductEntity[]>;
  deleteById(id: string): Promise<Boolean>;
  getOneById(id: string): Promise<ProductEntity>;
  update(id: string, product: UpdateProductDto): Promise<ProductEntity>;
}
