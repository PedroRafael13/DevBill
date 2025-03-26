import { z } from "zod";

const createCategorySchema = {
  title: z.string(),
  color: z.string().regex(/^#[A-Fa-f0-9]{6}$/),
}

const createCategoryObject = z.object(createCategorySchema)

export type CreateCategoryDTO = z.infer<typeof createCategoryObject>