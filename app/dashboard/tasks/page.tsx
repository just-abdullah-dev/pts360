"use client";
import TeamGoalView from "@/components/TeamGoalView";
import { useAppSelector } from "@/store/hooks";

export default function GoalsPage() {
  const { user } = useAppSelector((state) => state.auth);

  return ["Manager", "Coordinator"].includes(user?.role ?? "") ? (
    <TeamGoalView />
  ) : (
    <p>You are not part of any team.</p>
  );
}
