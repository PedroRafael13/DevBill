import { Router } from "express";
import { CategoriesController } from "../controllers/categoriesController";

export const categorieRoutes = Router()

const controller = new CategoriesController()

categorieRoutes.post('/', controller.create)