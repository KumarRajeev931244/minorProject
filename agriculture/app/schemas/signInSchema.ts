import { z } from "zod";

export const signInSchema = z.object({
    identifier: z.string(),
    cnumber: z.number(),
    password: z.string()
})