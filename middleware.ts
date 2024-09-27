import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { key } from "./key";
const ADMIN_ROUTE = "admin";
const AUTH_ROUTES = ["/auth/login", "/auth/register"];
const PUBLIC_ROUTES = ["/", "/books"];

export async function middleware(request: NextRequest) {
  const token = cookies().get(key.dreamLab_token)?.value;

  const currentPathname = request.nextUrl.pathname;
  const isLoggedIn = !!token;
  const isPublicRoute = PUBLIC_ROUTES.includes(currentPathname);
  const isAuthRoute = AUTH_ROUTES.includes(currentPathname);
  const isAdminRoute = currentPathname.split("/")[1] === ADMIN_ROUTE;

  if (isAdminRoute) {
    const response = await fetch(
      `${key.endPoint}/${key.version1}/auth/isAdmin`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      return NextResponse.redirect(new URL("/profile", request.url));
    }
    const data = await response.json();
    if (data.isAdmin) {
      return null;
    }
  }
  if (isAuthRoute) {
  }
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/profile", request.url));
    }
    return null;
  }
  if (isPublicRoute) {
    return null;
  }
  if (!isPublicRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  return null;
}
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
