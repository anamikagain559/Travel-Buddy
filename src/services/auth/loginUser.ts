"use server";

import { zodValidator } from "@/lib/zodValidator";
import { loginValidationZodSchema } from "@/zod/auth.validation";
import { serverFetch } from "@/lib/server-fetch";
import { getDefaultDashboardRoute, isValidRedirectForRole, UserRole } from "@/lib/auth-utils";

interface LoginResult {
  success: boolean;
  message?: string;
  data?: {
    accessToken: string;
    refreshToken: string;
    user: any;
    needPasswordChange?: boolean;
  };
  redirect?: string;
}

export const loginUser = async (_currentState: any, formData: any): Promise<LoginResult> => {
  try {
    const redirectTo = formData.get("redirect") || null;

    const payload = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // Validate payload
    const validation = zodValidator(payload, loginValidationZodSchema);
    if (!validation.success) return validation;

    const validatedPayload = validation.data;

    // Call backend login
    const res = await serverFetch.post("/auth/login", {
      body: JSON.stringify(validatedPayload),
      headers: { "Content-Type": "application/json" },
      credentials: "include", // important to include cookies
    });

    const result = await res.json();

    if (!result.success) {
      return { success: false, message: result.message || "Login failed" };
    }

    // Backend sends accessToken, refreshToken, user, needPasswordChange
    const { accessToken, refreshToken, user, needPasswordChange } = result.data;

    if (!accessToken || !refreshToken) {
      return { success: false, message: "Tokens missing from server response" };
    }

    // Determine redirect URL based on backend flags
    let targetRedirect = redirectTo ?? getDefaultDashboardRoute(user.role);

    if (needPasswordChange) {
      targetRedirect = `/reset-password${redirectTo ? `?redirect=${redirectTo}` : ""}`;
    } else if (redirectTo && isValidRedirectForRole(redirectTo.toString(), user.role)) {
      targetRedirect = `${redirectTo}?loggedIn=true`;
    } else {
      targetRedirect = `${getDefaultDashboardRoute(user.role)}?loggedIn=true`;
    }

    return {
      success: true,
      data: { accessToken, refreshToken, user, needPasswordChange },
      redirect: targetRedirect,
      message: "User Logged In Successfully",
    };
  } catch (error: any) {
    console.error("loginUser error:", error);
    return {
      success: false,
      message: "Login failed. Please check your credentials.",
    };
  }
};
