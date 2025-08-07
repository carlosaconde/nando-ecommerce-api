import { error } from "console";
import { prisma } from "../../../../data/postgres";
import { httpResponse } from "../../../../shared/infrastructure/utils/HttpResponse";
import { CreateProductDto } from "../../application/dtos/CreateProductDto";
import { UpdateProductDto } from "../../application/dtos/UpdateProductDto";
import { ProductEntity } from "../../domain/entities/Product.Entity";
import { IProductRepository } from "../../domain/repositories/Iproduct.repository";
import { PaginationParamsDto } from "../../../../shared/pagination/PaginationParamsDto";
import { PaginationResult } from "../../../../shared/pagination/PaginationDto";

export class PrismaRepository implements IProductRepository {
  public async getAll(
    params: PaginationParamsDto
  ): Promise<PaginationResult<ProductEntity>> {
    try {
      const { limit, page, name } = params;
      const skip = (page - 1) * limit;
      const products = await prisma.product.findMany({
        skip: skip,
        take: limit,
        where: name
          ? {
              name: {
                contains: name,
                mode: "insensitive",
              },
            }
          : undefined,
      });
      return {
        payload: products,
        page: page,
        status: "success",
      };
    } catch (error) {
      console.error(error);
      return {
        payload: [],
        page: params.page,
        status: "error",
      };
    }
  }

  public async create(product: CreateProductDto): Promise<ProductEntity> {
    try {
      const existingProduct = await prisma.product.findFirst({
        where: { name: product.name },
      });
      if (existingProduct) {
        throw new Error(`name: ${product.name} is already used`);
      }
      return await prisma.product.create({
        data: {
          name: product.name,
          price: product.price,
          description: product.description,
          stock: product.stock,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  public async deleteById(id: string): Promise<boolean> {
    try {
      const existingProduct = await prisma.product.findUnique({
        where: { id },
      });
      if (!existingProduct) {
        throw new Error(`Product with id ${id} not found`);
      }
      await prisma.product.delete({ where: { id: id } });
    } catch (error) {
      throw error;
    }

    return true;
  }

  public async getOneById(id: string): Promise<ProductEntity> {
    try {
      const existingProduct = await prisma.product.findUnique({
        where: { id },
      });
      if (!existingProduct) {
        throw new Error(`Product with id ${id} not found`);
      }
      return existingProduct;
    } catch (error) {
      throw error;
    }
  }

  public async update(
    id: string,
    productData: UpdateProductDto
  ): Promise<ProductEntity> {
    try {
      const existingProduct = await prisma.product.findUnique({
        where: { id },
      });
      if (!existingProduct) {
        throw new Error(`Product with id ${id} not found`);
      }
      return await prisma.product.update({
        where: { id: id },
        data: {
          name: productData.name,

          price: productData.price,
          description: productData.description,
          stock: productData.stock,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}
