import { StatusCodes } from "http-status-codes";
import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CreateCategoryDTO } from "../dto/categories.dto";
import { Category } from "../entities/category.entity";
import { AppError } from "../erros/app.error";

export class CategoryServices {
  constructor(private categoriesRepository: CategoriesRepository) { }

  async create({ title, color }: CreateCategoryDTO): Promise<Category> {
    const findCategory = await this.categoriesRepository.findByTitle(title)

    if (findCategory) {
      throw new AppError("Category already exits", StatusCodes.BAD_REQUEST)
    }

    const category = new Category({
      title,
      color,
    })

    const createdCategory = await this.categoriesRepository.create(category)

    return createdCategory
  }

  async index(): Promise<Category[]> {
    const categories = await this.categoriesRepository.index()

    return categories
  }
}