"use client";
import { departments } from "@/constants/sampleData";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import DepartmentPerformanceTab from "./DepartmentPerformanceTab";
import TeamPerformanceTab from "./TeamPerformanceTab";
import MyPerformanceTab from "./MyPerformanceTab";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { AddGoalModal } from "@/components/modals/AddGoalModal";
import { useAppSelector } from "@/store/hooks";

export default function Department({ slug }: { slug: string }) {
  const department = departments.filter((item) => item.slug === slug)[0];
  const { user } = useAppSelector((state) => state.auth);

  const [showAddGoal, setShowAddGoal] = useState(false);

  return (
    <div className="p-4 space-y-2">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {department.title}
          </h1>
        </div>
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
      {/* Tabs */}
      <Tabs defaultValue="department-performance" className="space-y-2">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-xl mb-[70px] md:m-0">
          <TabsTrigger value="department-performance">
            Department Performance
          </TabsTrigger>
          <TabsTrigger value="team-performance">Team Performance</TabsTrigger>
           {["HOD", "Manager", "Coordinator"].includes(`${user?.role}`) && (
  
            <TabsTrigger value="my-performance">My Performance</TabsTrigger>
          )}
        </TabsList>

        {/* Team's Performance Tab */}
        <TabsContent value="department-performance" className="space-y-2">
          <DepartmentPerformanceTab />
        </TabsContent>

        {/* Team's Performance Tab */}
        <TabsContent value="team-performance" className="space-y-2">
          <TeamPerformanceTab />
        </TabsContent>

        {/* My Performance Tab */}
        <TabsContent value="my-performance" className="space-y-2">
          <MyPerformanceTab />
        </TabsContent>
      </Tabs>
      {/* Add Goal Modal */}
      <AddGoalModal
        department={department}
        open={showAddGoal}
        onOpenChange={setShowAddGoal}
      />
    </div>
  );
}
