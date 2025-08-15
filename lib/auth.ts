// lib/auth.ts

export function getAuthToken(): string | null {
  if (typeof document === "undefined") {
    // Running on server — can't access document.cookie
    return null;
  }

  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("auth-token="))
    ?.split("=")[1];

  return token || null;
}
