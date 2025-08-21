import { z } from "zod";

export const fnameValidation =z
    .string()
    .min(2, {message:"farmer name must be atleast 2 character"})
    .max(10, {message:"farmer name not more than 10 character"})
    .regex(/^[a-zA-Z0-9_-]+$/,{message:"farmer name must not contain special character"})

export const signUpSchema = z.object({
    fname: fnameValidation,
    cnumber: z
            .string()
            .min(10).
            max(10),
    email: z
        .string()
        .email({message: "invalid email address"}),
    password: z
        .string()
        .min(6, {message: "password must be atleast 6 character"})
})