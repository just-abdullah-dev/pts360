"use client";

import { useAppSelector } from "@/store/hooks";
import { DepartmentAdminView } from "@/components/DepartmentsAdminView";
import { DepartmentsCEOView } from "@/components/DepartmentsCEOView";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { AddGoalModal } from "@/components/modals/AddGoalModal";

export default function DashboardPage() {
  const { user } = useAppSelector((state) => state.auth);

  const [showAddGoal, setShowAddGoal] = useState(false);

  return (
    <div className="p-6 space-y-2">
      {user?.role === "Admin" && <DepartmentAdminView />}

      {user?.role === "CEO" && (
        <>
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 justify-between w-full">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Cheezious
              </h1>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAddGoal(true)}
                className="bg-orange-100 text-orange-700 border-orange-300 hover:bg-orange-400"
              >
                <Plus className="h-4 w-4 mr-2 dar:text-gray-300" />
                Add new Goal
              </Button>
            </div>
          </div>
          <DepartmentsCEOView />
        </>
      )}

      {/* Add Goal Modal */}
      <AddGoalModal open={showAddGoal} onOpenChange={setShowAddGoal} />
    </div>
  );
}
