import { NextFunction, Request, Response } from "express";
import { z, ZodRawShape } from "zod"
import { AppError } from "../erros/app.error";
import { StatusCodes } from "http-status-codes";

export enum ParamsType {
  Query = "query",
  Body = "body"
}

type validateParams = {
  schema: ZodRawShape;
  type: ParamsType;
}

export function validator(params: validateParams) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = z.object(params.schema).safeParse(req[params.type])

    if (!result.success) {
      const errorFormatted = result.error.issues.map(item =>
        `${item.path.join('.')}: ${item.message}`)

      throw new AppError(errorFormatted, StatusCodes.UNPROCESSABLE_ENTITY)
    }

    req[params.type] = result.data;
    next()
  }
}