/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { registerUserValidationZodSchema } from "@/zod/auth.validation";

export const registerUser = async (_state: any, formData: FormData) => {
  try {
    const payload = {
      name: formData.get("name"),
      address: formData.get("address"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };



const validation = zodValidator(payload, registerUserValidationZodSchema);

if (!validation.success || !validation.data) {
  return {
    success: false,
    errors: validation.errors,
    message: "Validation failed",
  };
}

const data = validation.data; // ✅ safe now

// Now TypeScript knows `data` is defined
const registerData = {
  password: validation.data.password,
  patient: {
    name: validation.data.name,
    address: validation.data.address,
    email: validation.data.email,
  },
};

    const newFormData = new FormData();
    newFormData.append("data", JSON.stringify(registerData));

    if (formData.get("file")) {
      newFormData.append("file", formData.get("file") as Blob);
    }

    const res = await serverFetch.post("/user/register", {
      body: newFormData,
    });

    const result = await res.json();

    if (!res.ok || !result.success) {
      return {
        success: false,
        message: result.message || "Registration failed",
      };
    }

    // ✅ JUST RETURN — no login, no redirect
    return {
      success: true,
      message: "Account created successfully",
    };
  } catch (error: any) {
    return {
      success: false,
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Registration failed",
    };
  }
};
