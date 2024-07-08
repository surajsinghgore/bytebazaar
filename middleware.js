import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export function middleware(request) {
  const Token = cookies().get("clientToken");
  // dashboard page prevent before login
  if (request.nextUrl.pathname.startsWith("/ordercomplete")||request.nextUrl.pathname.startsWith("/checkout")) {
    if (!Token) {
      // If there's no token, redirect to the login page
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // login page prevent after login
  if (request.nextUrl.pathname.startsWith("/login")) {
    if (Token) {
      return NextResponse.redirect(new URL("/checkout", request.url));
    }
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/ordercomplete", "/login","/checkout"],
};