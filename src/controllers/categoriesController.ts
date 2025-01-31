import { Request, Response } from "express";
import { CategoryServices } from "../service/categoryService";

export class CategoriesController {
  async create(_: Request, res: Response) {
    const service = new CategoryServices

    const result = await service.create()

    return res.status(201).json(result)
  }
}