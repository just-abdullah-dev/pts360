import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { getAuthToken } from "./auth";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function customFetch(
  input: string,
  init?: RequestInit
): Promise<any> {
  try {
    return await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: input,
        options: {
          ...init,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAuthToken()}`,
            ...init?.headers,
          },
        },
      }),
    });
  } catch (error) {
    console.error("customFetch error:", error);
    throw error;
  }
}
