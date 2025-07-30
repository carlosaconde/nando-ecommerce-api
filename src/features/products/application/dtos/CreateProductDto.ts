export interface CreateProductDto {
  name: string;
  description: string;
  price: number;
  category?: string[];
  stock: number;
}
