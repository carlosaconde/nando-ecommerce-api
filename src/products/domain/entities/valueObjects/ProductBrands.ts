export class ProductBrands {
  id: string;
  name: string;
  description: string;
  active: boolean;
  constructor(id: string, name: string, description: string, active: boolean) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.active = active;
  }
}
