import { PostProductDto } from "../dtos/PostProduct.dto";
import { ProductEntity } from "../../domain/entities/Product.Entity";

export abstract class ProductDatasource {
  abstract create(postProductDto: PostProductDto): Promise<ProductEntity>;
  abstract getAll(): Promise<ProductEntity[]>;
}
