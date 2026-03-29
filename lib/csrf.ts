import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const CSRF_COOKIE_NAME = "csrf-token";
const CSRF_HEADER_NAME = "x-csrf-token";

export async function getCsrfToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get(CSRF_COOKIE_NAME)?.value;
  return token;
}

export async function generateCsrfToken() {
  const token = crypto.randomUUID();
  const cookieStore = await cookies();
  cookieStore.set(CSRF_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });
  return token;
}

export async function validateCsrfToken(request: NextRequest) {
  const cookieStore = await cookies();
  const cookieToken = cookieStore.get(CSRF_COOKIE_NAME)?.value;
  const headerToken = request.headers.get(CSRF_HEADER_NAME);

  if (!cookieToken || !headerToken || cookieToken !== headerToken) {
    return false;
  }
  return true;
}
