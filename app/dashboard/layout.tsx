"use client";

import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/authSlice";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { sampleUsers } from "@/constants/sampleData";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    // Auto-login for demo purposes if auth token exists
    const authToken = document.cookie.includes("auth-token=authenticated");
    // if (authToken && !isAuthenticated) {
    //   // Auto-login as first user for demo
    //   dispatch(login({ email: 'admin@pts360.com', password: 'password123' }));
    // }else
    if (!authToken && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, dispatch]);

  if (!isAuthenticated) {
    return <Loading />;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}
