import { ProductEntity } from "../../../domain/entities/Product.Entity";
import { IProductRepository } from "../../../domain/repositories/Iproduct.repository";
import { CreateProductDto } from "../../dtos/CreateProductDto";

export class CreateProductUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async execute(productData: CreateProductDto): Promise<ProductEntity> {
    if (!productData || productData.name.trim().length === 0) {
      throw new Error("Product name is required");
    }

    if (!productData || productData.description.trim().length === 0) {
      throw new Error("Product description is required");
    }

    if (productData.price <= 0) {
      throw new Error("Product price must be greater than zero");
    }

    if (productData.stock < 0) {
      throw new Error("Product stock cannot be negative");
    }

    return await this.productRepository.create({
      ...productData,
    });
  }
}
