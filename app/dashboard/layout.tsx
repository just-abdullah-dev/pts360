"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useRouter } from "next/navigation";
import LoadingContent from "@/components/LoadingContent";
import { getUser } from "@/store/slices/authSlice";
import { getAuthToken } from "@/lib/auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    if (getAuthToken()) {
      if (!isLoading) {
        if (!user) {
          console.log("User is null, fetching...");
          dispatch(getUser());
        } else {
          if (user.roles?.includes("SystemAdmin")) {
            router.push("/dashboard");
          } else if (user.roles?.includes("Manager")) {
            router.push("/dashboard/departments/hr");
          }
        }
      }
    } else {
      console.log("no token found login please");
      window.location.href = "/login";
    }
  }, [user, isLoading, dispatch, router]);

  if (isLoading) {
    return <LoadingContent />;
  }

  return <DashboardLayout>{children}</DashboardLayout>;
}
