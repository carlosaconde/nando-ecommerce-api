import { PaginationResult } from "../../../../../shared/pagination/PaginationDto";
import { PaginationParamsDto } from "../../../../../shared/pagination/PaginationParamsDto";
import { ProductEntity } from "../../../domain/entities/Product.Entity";
import { IProductRepository } from "../../../domain/repositories/Iproduct.repository";
import { CreateProductDto } from "../../dtos/CreateProductDto";

export class GetAllProductsUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async execute(
    params: PaginationParamsDto
  ): Promise<PaginationResult<ProductEntity>> {
    return await this.productRepository.getAll(params);
  }
}
