import { ProductEntity } from "../../../domain/entities/Product.Entity";
import { IProductRepository } from "../../../domain/repositories/Iproduct.repository";
import { CreateProductDto } from "../../dtos/CreateProductDto";

export class GetAllProductsUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async execute() {
    return await this.productRepository.getAll();
  }
}
