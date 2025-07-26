import { Request, Response } from "express";
import { prisma } from "../../../../data/postgres";

import { body, validationResult } from "express-validator";
import { PostProductDto } from "../../application/dtos/PostProduct.dto";

export class ProductController {
  constructor() {}

  public getProducts = async (req: Request, res: Response) => {
    const products = await prisma.product.findMany();

    res.json(products);
  };

  public postProducts = async (req: Request, res: Response) => {
    const [error, postProductDto] = PostProductDto.create(req.body);
    if (error) {
      return res.status(400).json({ error });
    }

    // Asegúrate de que postProductDto tenga todas las propiedades necesarias
    const { name, description, price, urls, category, stock, brand } =
      postProductDto!;

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        urls,
        category,
        stock,
        brand: { connect: { id: brand } },
      },
    });

    res.json(product);
  };
}
