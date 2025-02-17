import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CreateCategoryDTO } from "../dto/categories.dto";
import { Category } from "../entities/category.entity";

export class CategoryServices {
  constructor(private categoriesRepository: CategoriesRepository) { }


  async create({ title, color }: CreateCategoryDTO): Promise<Category> {
    const category = new Category({
      title,
      color,
    })

    const createdCategory = await this.categoriesRepository.create(category)

    return category
  }
}