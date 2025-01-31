import { Router } from "express";

import { baseRouter } from "./base.router";
import { categorieRoutes } from "./categories.route";

export const router = Router()

router.use("/", baseRouter)
router.use("/categories", categorieRoutes)