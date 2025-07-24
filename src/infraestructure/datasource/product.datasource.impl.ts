import { PostProductDto } from "../../products/application/dtos/PostProduct.dto";
import { ProductDatasource } from "../../products/application/use-cases/product.datasource";
import { ProductEntity } from "../../products/domain/entities/Product.Entity";

export class ProductDatasourceImpl implements ProductDatasource {
  create(postProductDto: PostProductDto): Promise<ProductEntity> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<ProductEntity[]> {
    throw new Error("Method not implemented.");
  }
}
