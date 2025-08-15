"use client";

import { useAppSelector } from "@/store/hooks";
import CEOGoalView from "@/components/CEOGoalView";
import HODGoalView from "@/components/HODGoalView";

export default function GoalsPage() {
  const { user } = useAppSelector((state) => state.auth);

  return user?.roles?.includes("SystemAdmin") ? (
    <CEOGoalView />
  ) : user?.roles?.some((role) => ["DepartmentHead"].includes(role)) ? (
    <HODGoalView />
  ) : (
    <p>You are neither a CEO nor a HOD</p>
  );
}
