import { NextFunction, Request, Response } from "express";
import { CategoryServices } from "../service/categoryService";
import { CategoryModel } from "../database/schemas/category.schema";
import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CreateCategoryDTO } from "../dto/categories.dto";
import { z } from "zod"

export class CategoriesController {
  async create
    (req: Request<unknown, unknown, CreateCategoryDTO>,
      res: Response,
      next: NextFunction
    ) {
    try {
      const validateSchema = z.object({
        title: z.string(),
        color: z.string().regex(/^#(A-Fa-f0-9){6}$/),
      })

      const { title, color } = req.body
      const repository = new CategoriesRepository(CategoryModel)
      const service = new CategoryServices(repository)

      const result = await service.create({ title, color })

      return res.status(201).json(result)
    } catch (err) {
      next(err)
    }
  }
}