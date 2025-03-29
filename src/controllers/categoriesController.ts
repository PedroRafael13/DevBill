import { NextFunction, Request, Response } from "express";
import { CategoryServices } from "../service/categoryService";
import { CategoryModel } from "../database/schemas/category.schema";
import { CategoriesRepository } from "../database/repositories/categories.repository";
import { CreateCategoryDTO } from "../dto/categories.dto";
import { StatusCodes } from "http-status-codes";


export class CategoriesController {
  async create
    (req: Request<unknown, unknown, CreateCategoryDTO>,
      res: Response,
      next: NextFunction,
    ) {
    try {
      const { title, color } = req.body

      const repository = new CategoriesRepository(CategoryModel)
      const service = new CategoryServices(repository)

      const result = await service.create({ title, color })

      return res.status(201).json(result)
    } catch (err) {
      next(err)
    }
  }

  async index(req: Request, res: Response, next: NextFunction,) {
    try {

      const repository = new CategoriesRepository(CategoryModel)
      const service = new CategoryServices(repository)

      const result = await service.index()

      return res.status(StatusCodes.OK).json(result)
    } catch (err) {
      next(err)
    }
  }
}