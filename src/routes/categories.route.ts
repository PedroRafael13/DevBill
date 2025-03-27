import { Router } from "express";
import { CategoriesController } from "../controllers/categoriesController";
import { ParamsType, validator } from "../middlewares/validate.middeleware";
import { createCategorySchema } from "../dto/categories.dto"

export const categorieRoutes = Router()

const controller = new CategoriesController()

categorieRoutes.post('/', validator({
  schema: createCategorySchema,
  type: ParamsType.Body,
}),
  controller.create.bind(controller),
)