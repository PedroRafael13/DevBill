import { Router } from "express";
import { baseRouter } from "./base.router";

export const router = Router()

router.use("/", baseRouter)