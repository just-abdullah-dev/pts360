import { NextResponse } from "next/server";

interface ProxyRequestBody {
  url: string;
  options?: RequestInit;
}

export async function POST(req: Request) {
  try {
    const { url, options = {} }: ProxyRequestBody = await req.json();

    if (!url) {
      return NextResponse.json(
        {
          success: false,
          message: "URL is required in body.",
        },
        { status: 400 }
      );
    }

    const timeout = 5 * 60_000; // 5 minutes

    const fetchWithTimeout = async (
      url: string,
      options: RequestInit = {}
    ): Promise<Response> => {
      return Promise.race([
        fetch(url, options),
        new Promise<Response>((_, reject) =>
          setTimeout(() => reject(new Error("Request timed out")), timeout)
        ),
      ]) as Promise<Response>;
    };

    const response = await fetchWithTimeout(
      `${process.env.NEXT_PUBLIC_API_URL}${url}`,
      options
    );

    if (!response?.ok) {
      return NextResponse.json(
        {
          success: false,
          message: response?.statusText,
        },
        { status: response?.status }
      );
    }

    try {
      const data = await response.json();
      return NextResponse.json({
        success: true,
        data,
      });
    } catch {
      return NextResponse.json({
        success: true,
        data: null,
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Unknown server error",
      },
      { status: 500 }
    );
  }
}
