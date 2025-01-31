import { Category } from "../entities/category.entity";

export class CategoryServices {
  async create(): Promise<Category> {
    const category = new Category({
      title: "Example Category",
      color: "#20B2AA",
    })

    return category
  }
}