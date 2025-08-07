import { z } from "zod";

export const createProductSchema = z.object({
  body: z.object({
    name: z.string().min(3, "Name is required"),

    description: z.string().min(3, "Description is required"),
    price: z.number().positive("price must be greater than zero"),
    category: z.string().optional(),
    stock: z.number().positive("stock must be greater than zero or zero"),
  }),
});

export const updateProductSchema = z.object({
  body: z.object({
    name: z.string().min(3, "Name is required").optional(),

    description: z.string().min(3, "Description is required").optional(),
    price: z.number().positive("price must be greater than zero").optional(),
    category: z.string().optional(),
    stock: z
      .number()
      .positive("stock must be greater than zero or zero")
      .optional(),
  }),
});

export type CreateProductRequest = z.infer<typeof createProductSchema>;
export type UpdateProductRequest = z.infer<typeof updateProductSchema>;
