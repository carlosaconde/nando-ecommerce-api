export class PostProductDto {
  private constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly price: number,
    public readonly urls: string,
    public readonly category: string,
    public readonly stock: number,
    public readonly brand: string,
    public readonly isNew: boolean,
    public readonly color?: string[],
    public readonly size?: string[]
  ) {}

  static create(props: { [key: string]: any }): [string?, PostProductDto?] {
    const {
      id,
      name,
      description,
      price,
      urls,
      category,
      stock,
      brands,
      isNew,
      color,
    } = props;

    return [
      undefined,
      new PostProductDto(
        id,
        name,
        description,
        price,
        urls,
        category,
        stock,
        brands,
        isNew,
        color
      ),
    ];
  }
}
