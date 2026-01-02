// src/middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getDefaultDashboardRoute, getRouteOwner, isAuthRoute, UserRole } from "./lib/auth-utils";
import { getUserInfo } from "./services/auth/getUserInfo";
import { deleteCookie, getCookie } from "./services/auth/tokenHandlers";
import { getNewAccessToken } from "./services/auth/auth.service";
import { jwtVerify } from "jose";

// This is now the default Next.js middleware
export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const hasTokenRefreshedParam = request.nextUrl.searchParams.has("tokenRefreshed");

  // Remove tokenRefreshed param if coming back after refresh
  if (hasTokenRefreshedParam) {
    const url = request.nextUrl.clone();
    url.searchParams.delete("tokenRefreshed");
    return NextResponse.redirect(url);
  }

  // Try refreshing token if needed
  const tokenRefreshResult = await getNewAccessToken();
  if (tokenRefreshResult?.tokenRefreshed) {
    const url = request.nextUrl.clone();
    url.searchParams.set("tokenRefreshed", "true");
    return NextResponse.redirect(url);
  }

  // Get access token from cookies
  const accessToken = await getCookie("accessToken") || null;

  // Verify access token using jose
  let userRole: UserRole | null = null;
  if (accessToken) {
    try {
      const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_ACCESS_SECRET);
      const { payload } = await jwtVerify(accessToken, secret);
      userRole = payload.role as UserRole;
    } catch {
      await deleteCookie("accessToken");
      await deleteCookie("refreshToken");
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  const routerOwner = getRouteOwner(pathname);
  const isAuth = isAuthRoute(pathname);

  // Rule 1: Logged-in user trying to access login/register page
  if (accessToken && isAuth) {
    return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), request.url));
  }

  // Rule 2: Public routes
  if (routerOwner === null) {
    return NextResponse.next();
  }

  // Rule 3: Protected route but not logged in
  if (!accessToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Rule 4: Password change enforcement
  if (accessToken) {
    const userInfo = await getUserInfo();
    if (userInfo.needPasswordChange && pathname !== "/reset-password") {
      const resetPasswordUrl = new URL("/reset-password", request.url);
      resetPasswordUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(resetPasswordUrl);
    }

    if (!userInfo.needPasswordChange && pathname === "/reset-password") {
      return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), request.url));
    }
  }

  // Rule 5: Common protected routes
  if (routerOwner === "COMMON") {
    return NextResponse.next();
  }

  // Rule 6: Role-based protected routes
  if (routerOwner === "ADMIN" || routerOwner === "USER") {
    if (userRole !== routerOwner) {
      return NextResponse.redirect(new URL(getDefaultDashboardRoute(userRole as UserRole), request.url));
    }
  }

  return NextResponse.next();
}

// Configure middleware to run on all routes except API/static
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)",
  ],
};
