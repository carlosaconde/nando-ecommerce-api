import { PostProductDto } from "../../application/dtos/PostProduct.dto";
import { ProductEntity } from "../entities/Product.Entity";

export interface ProductRepository {
  create(postProductDto: PostProductDto): Promise<void>;
  getAll(): Promise<ProductEntity[]>;
}
