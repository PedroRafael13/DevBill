import { NextFunction, Request, Response } from "express";
import { CategoryServices } from "../service/categoryService";
import { CreateCategoryDTO } from "../dto/categories.dto";
import { StatusCodes } from "http-status-codes";
export class CategoriesController {
  constructor(private categoriesService: CategoryServices) { }

  create = async (
    req: Request<unknown, unknown, CreateCategoryDTO>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { title, color } = req.body

      const result = await this.categoriesService.create({ title, color })

      return res.status(StatusCodes.CREATED).json(result)
    } catch (err) {
      next(err)
    }
  }

  index = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const result = await this.categoriesService.index()

      return res.status(StatusCodes.OK).json(result)
    } catch (err) {
      next(err)
    }
  }
}