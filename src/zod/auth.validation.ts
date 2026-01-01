/* eslint-disable @typescript-eslint/no-explicit-any */
import z from "zod";

export const registerUserValidationZodSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    address: z.string().optional(),
    email: z.string().email({ message: "Valid email is required" }),
    password: z
      .string()
      .min(6, { message: "Password is required and must be at least 6 characters long" })
      .max(100, { message: "Password must be at most 100 characters long" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm Password is required and must be at least 6 characters long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"], // 🔹 attach error to confirmPassword field
  });

export const loginValidationZodSchema = z.object({
  email: z.string().email({ message: "Valid email is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(100, { message: "Password must be at most 100 characters long" }),
});
export const resetPasswordSchema = z
  .object({
    newPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // 🔹 attach error to confirmPassword field
  });
