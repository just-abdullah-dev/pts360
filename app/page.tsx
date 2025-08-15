"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";
import { getAuthToken } from "@/lib/auth";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (getAuthToken()) {
      router.push("/dashboard");
    } else {
      router.push("/login");
    }
  }, [router]);

  return <Loading />;
}
