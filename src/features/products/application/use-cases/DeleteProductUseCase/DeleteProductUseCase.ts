import { ProductEntity } from "../../../domain/entities/Product.Entity";
import { IProductRepository } from "../../../domain/repositories/Iproduct.repository";
import { CreateProductDto } from "../../dtos/CreateProductDto";

export class DeleteProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async execute(id: string) {
    return await this.productRepository.deleteById(id);
  }
}
