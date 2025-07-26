import { ProductEntity } from "../../../domain/entities/Product.Entity";
import {
  ProductBrands,
  ProductCategory,
  ProductDescription,
  ProductId,
  ProductIsNew,
  ProductName,
  ProductPrice,
  ProductSize,
  ProductStock,
  ProductUrls,
} from "../../../domain/entities/valueObjects";
import { ProductRepository } from "../../../domain/repositories/product.repository";

import { ProductColor } from "../../../domain/entities/valueObjects/ProductColor";
import { PostProductDto } from "../../dtos/PostProduct.dto";

export class ProductCreate {
  constructor(private repository: ProductRepository) {}

  async run(
    id: string,
    name: string,
    description: string,
    price: number,
    urls: string,
    category: string,
    stock: number,
    isNew: boolean,
    brands: { id: string; name: string; description: string; active: boolean },
    color: string[],
    size: string[]
  ): Promise<void> {
    const product = new ProductEntity(
      new ProductId(id),

      new ProductName(name),
      new ProductDescription(description),
      new ProductPrice(price),
      new ProductUrls(urls),
      new ProductCategory(category),
      new ProductStock(stock),
      new ProductIsNew(isNew),
      new ProductBrands(
        brands.id,
        brands.name,
        brands.description,
        brands.active
      ),
      new ProductColor(color),
      new ProductSize(size)
    );

    // Adaptar el producto a PostProductDto antes de enviarlo al repositorio
    // const productDto = {
    //   id: product.id.value,
    //   name: product.name.value,
    //   description: product.description.value,
    //   price: product.price.value,
    //   urls: product.urls.value,
    //   category: product.category.value,
    //   stock: product.stock.value,
    //   isNew: product.isNew.value,
    //   brand:  { connect: { id: brand } },
    //   color: product.color?.value,
    //   size: product.size?.value,
    // Adaptar el producto a PostProductDto antes de enviarlo al repositorio
    const productDto: PostProductDto = {
      id: product.id.value,
      name: product.name.value,
      description: product.description.value,
      price: product.price.value,
      urls: product.urls.value,
      category: product.category.value,
      stock: product.stock.value,
      isNew: product.isNew.value,
      brand: product.brands?.id,
      color: product.color?.value,
      size: product.size?.value,
    };

    return this.repository.create(productDto);
  }
}
