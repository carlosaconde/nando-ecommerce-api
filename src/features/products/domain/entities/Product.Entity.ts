export class ProductEntity {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public urls: string[],

    public stock: number,
    public color: string[],
    public size: string[],
    public createdAt: Date,
    public updatedAt: Date,
    public category?: string[]
  ) {}
}
