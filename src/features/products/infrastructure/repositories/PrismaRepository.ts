import { prisma } from "../../../../data/postgres";
import { CreateProductDto } from "../../application/dtos/CreateProductDto";
import { ProductEntity } from "../../domain/entities/Product.Entity";
import { IProductRepository } from "../../domain/repositories/Iproduct.repository";

export class PrismaRepository implements IProductRepository {
  public async getAll(): Promise<ProductEntity[]> {
    return await prisma.product.findMany();
  }

  public async create(product: CreateProductDto): Promise<ProductEntity> {
    return await prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
        description: product.description,
        stock: product.stock,
      },
    });
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
}
