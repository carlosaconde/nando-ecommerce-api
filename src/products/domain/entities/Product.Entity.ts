import {
  ProductBrands,
  ProductCategory,
  ProductColor,
  ProductDescription,
  ProductId,
  ProductIsNew,
  ProductName,
  ProductPrice,
  ProductSize,
  ProductStock,
  ProductUrls,
} from "./valueObjects";

export class ProductEntity {
  id: ProductId;
  name: ProductName;
  description: ProductDescription;
  price: ProductPrice;
  urls: ProductUrls;
  category: ProductCategory;
  stock: ProductStock;
  isNew: ProductIsNew;
  brands: ProductBrands;
  color?: ProductColor;
  size?: ProductSize;
  constructor(
    id: ProductId,
    name: ProductName,
    description: ProductDescription,
    price: ProductPrice,
    urls: ProductUrls,
    category: ProductCategory,
    stock: ProductStock,
    isNew: ProductIsNew,
    brands: ProductBrands,
    color?: ProductColor,
    size?: ProductSize
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.urls = urls;
    this.category = category;
    this.stock = stock;
    this.isNew = isNew;
    this.brands = brands;
    this.color = color;
    this.size = size;
  }
}
