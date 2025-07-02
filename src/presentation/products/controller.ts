import { Request, Response } from "express";
import { prisma } from "../../data/postgres";

const products = [
  { id: 1, title: "cinturon", description: "cinturon tactico", price: 120.0 },
];

export class ProductController {
  constructor() {}

  public getProducts = (req: Request, res: Response) => {
    prisma.product.create({});
  };
}
