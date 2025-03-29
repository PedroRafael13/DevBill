import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CategoryModel } from "../database/schemas/category.schema";
import { CategoryServices } from "../service/categoryService";

export class CategoriesFactory {
  private static categoriesService: CategoryServices

  static getServiceInstance() {
    if (this.categoriesService) {
      return this.categoriesService
    }

    const repository = new CategoriesRepository(CategoryModel)
    const service = new CategoryServices(repository)

    this.categoriesService = service

    return service
  }
}