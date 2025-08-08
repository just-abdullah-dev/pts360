"use client";

import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setFilter } from "@/store/slices/goalsSlice";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChevronRight,
  ChevronDown,
  Filter,
  Plus,
  MoreHorizontal,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { departments, sampleUsers } from "@/constants/sampleData";
import { AddGoalModal } from "@/components/modals/AddGoalModal";
import { AddTaskModal } from "@/components/modals/AddTaskModal";
import { AddJobModal } from "@/components/modals/AddJobModal";

export default function TeamGoalView() {
  const [expandedGoals, setExpandedGoals] = useState<Set<string>>(new Set());
  const [expandedJobs, setExpandedJobs] = useState<Set<string>>(new Set());
  const [showAddTask, setShowAddTask] = useState(false);
  const { user } = useAppSelector((state) => state.auth);

  const { goals, filter } = useAppSelector((state) => state.goals);
  const dispatch = useAppDispatch();

  const toggleGoalExpansion = (goalId: string) => {
    const newExpanded = new Set(expandedGoals);
    if (newExpanded.has(goalId)) {
      newExpanded.delete(goalId);
      expandedJobs.clear();
    } else {
      newExpanded.add(goalId);
    }
    setExpandedGoals(newExpanded);
  };

  const toggleJobExpansion = (jobId: string) => {
    const newExpanded = new Set(expandedJobs);
    if (newExpanded.has(jobId)) {
      newExpanded.delete(jobId);
    } else {
      newExpanded.add(jobId);
    }
    setExpandedJobs(newExpanded);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Overdue":
        return "border-red-500 text-red-700";
      case "In-Progress":
        return "border-orange-500 text-orange-700";
      case "Completed":
        return "border-green-500 text-green-700";
      case "Submitted":
        return "border-blue-500 text-blue-700";
      case "Closed":
        return "border-gray-500 text-gray-700";
      default:
        return "border-gray-500 text-gray-700";
    }
  };

  const renderAssignees = (assigneeIds: string[]) => {
    const assignees = assigneeIds
      .map((id) => sampleUsers.find((u) => u.id === id))
      .filter(Boolean);

    // if (assignees.length === 1) {
    //   return <span className="text-[12px]">{assignees[0]?.name}</span>;
    // }

    if (assignees.length <= 3) {
      return (
        <div className="flex -space-x-2">
          {assignees.map((assignee, index) => (
            <Avatar key={index} className="h-8 w-8 border-2 border-white">
              <AvatarImage src={assignee?.avatar} alt={assignee?.name} />
              <AvatarFallback className="text-[10px]">
                {assignee?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
      );
    }

    return (
      <div className="flex -space-x-2">
        {assignees.slice(0, 2).map((assignee, index) => (
          <Avatar key={index} className="h-8 w-8 border-2 border-white">
            <AvatarImage src={assignee?.avatar} alt={assignee?.name} />
            <AvatarFallback className="text-[10px]">
              {assignee?.name?.charAt(0)}
            </AvatarFallback>
          </Avatar>
        ))}
        <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
          <span className="text-[10px] text-gray-600 dark:text-gray-300">
            +{assignees.length - 2}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 space-y-2">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Tasks
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Manage your individual tasks
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div
        className="space-y-2"
      >
        <div className="flex justify-end items-center">


          <div className="flex items-center space-x-2">
   

            <Button
              variant="outline"
              size="sm"
              className="text-gray-600 dark:text-gray-300"
            >
              Select Month or Quarter
              <Calendar className="h-4 w-4 ml-2" />
            </Button>

            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* My tasks */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 dark:bg-gray-700">
                  <TableHead className="w-8"></TableHead>
                  <TableHead>Goal Title</TableHead>
                  <TableHead>Label</TableHead>
                  <TableHead>Assignee</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Due Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {goals.map((goal) => (
                  <>
                    {/* Goal Row */}
                    <TableRow
                      key={goal.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleGoalExpansion(goal.id)}
                          className="p-1"
                        >
                          {expandedGoals.has(goal.id) ? (
                            <ChevronDown className="h-5 w-5" />
                          ) : (
                            <ChevronRight className="h-5 w-5" />
                          )}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <span className=" line-clamp-1 font-medium">
                          {goal.title}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="secondary"
                          className="bg-gray-100 text-gray-700"
                        >
                          {goal.label}
                        </Badge>
                      </TableCell>
                      <TableCell>{renderAssignees(goal.assignees)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress
                            value={goal.progress}
                            className="flex-1 h-1"
                          />
                          <span className="text-[11px] text-gray-600 dark:text-gray-300">
                            {goal.progress}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={getStatusColor(goal.status) + " "}
                        >
                          {goal.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className="text-xs">{new Date(goal.dueDate).toLocaleDateString()}</span>
                      </TableCell>
                    </TableRow>

                    {/* Jobs Rows (when goal is expanded) */}
                    {expandedGoals.has(goal.id) && (
                      <>
                        <TableRow className="bg-orange-50 dark:bg-orange-900/20">
                          <TableCell colSpan={8} className="py-2">
                            <div>
                              <div className=" grid grid-cols-1 md:grid-cols-3">
                                <div className=" flex gap-2 items-center">
                                  <p className="text-xs text-gray-500">Created On:</p>
                                  <p className="text-xs font-medium">
                                    {new Date(goal.createdAt).toLocaleDateString()}
                                  </p>
                                </div>
                                <div className=" flex gap-2 items-center">
                                  <p className="text-xs text-gray-500">Expected Start Date:</p>
                                  <p className="text-xs font-medium">
                                    {new Date(goal.startDate).toLocaleDateString()}
                                  </p>
                                </div>
                                <div className=" flex gap-2 items-center">
                                  <p className="text-xs text-gray-500">Expected Due Date:</p>
                                  <p className="text-xs font-medium">
                                    <span className="text-xs">{new Date(goal.dueDate).toLocaleDateString()}</span>
                                  </p>
                                </div>
                              </div>
                              <p className=" text-xs py-1 px-2 mt-1 bg-gray-200/50 rounded-lg">
                              {goal.description}</p>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                              <span className="text-xs font-medium text-orange-700 dark:text-orange-300">
                                Jobs - (Total {goal.jobs.length} Jobs)
                              </span>
                            
                            </div>
                          </TableCell>
                        </TableRow>

                        {goal.jobs.map((job) => (
                          <>
                            <TableRow
                              key={job.id}
                              className="bg-orange-25 dark:bg-orange-900/10"
                            >
                              <TableCell className="">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => toggleJobExpansion(job.id)}
                                  className="p-1"
                                >
                                  {expandedJobs.has(job.id) ? (
                                    <ChevronDown className="h-4 w-4" />
                                  ) : (
                                    <ChevronRight className="h-4 w-4" />
                                  )}
                                </Button>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center space-x-2">
                                  <span className="text-[11px]">
                                    {job.title}
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant="secondary"
                                  className="bg-gray-100 text-gray-700 text-[10px]"
                                >
                                  {job.label}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-[11px]">
                                {renderAssignees(job.assignees)}
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center space-x-2">
                                  <Progress
                                    value={job.progress}
                                    className="flex-1 h-1"
                                  />
                                  <span className="text-[10px] text-gray-600 dark:text-gray-300">
                                    {job.progress}%
                                  </span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <Badge
                                  variant="outline"
                                  className={cn(
                                    getStatusColor(job.status),
                                    "text-[10px]"
                                  )}
                                >
                                  {job.status}
                                </Badge>
                              </TableCell>
                              <TableCell className="text-[11px]">
                                {new Date(job.dueDate).toLocaleDateString()}
                              </TableCell>
                              <TableCell>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="h-3 w-3" />
                                </Button>
                              </TableCell>
                            </TableRow>

                            {/* Tasks Rows (when job is expanded) */}
                            {expandedJobs.has(job.id) && (
                              <>
                                <TableRow className="bg-orange-100 dark:bg-orange-800/20 text-[11px]">
                                  <TableCell colSpan={8} className="py-2 ">
                                    <div className="flex items-center justify-between">
                                      <span className="text-[10px] font-medium text-orange-700 dark:text-orange-300">
                                        Tasks - (Total {job.tasks.length} Tasks)
                                      </span>
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setShowAddTask(true)}
                                        className="text-orange-600 hover:text-orange-700 text-[10px]"
                                      >
                                        <Plus className="h-3 w-3 mr-1" />
                                        Add Task
                                      </Button>
                                    </div>
                                  </TableCell>
                                </TableRow>

                                {job.tasks.map((task) => (
                                  <TableRow
                                    key={task.id}
                                    className="bg-orange-75 dark:bg-orange-900/5 text-[10px]"
                                  >
                                    <TableCell className="">
                                      <div className="w-4 h-4 border-2 opacity-0 border-gray-400 rounded"></div>
                                    </TableCell>
                                    <TableCell>
                                      <span className="text-[10px]">
                                        {task.title}
                                      </span>
                                    </TableCell>
                                    <TableCell>
                                      <Badge
                                        variant="secondary"
                                        className="bg-gray-100 text-gray-700 text-[10px]"
                                      >
                                        {task.label}
                                      </Badge>
                                    </TableCell>
                                    <TableCell className="text-[10px]">
                                      {renderAssignees([task.assignees[0]])}
                                      {/* {sampleUsers.find(u => u.id === task.assignees[0])?.name} */}
                                    </TableCell>
                                    <TableCell>
                                      <div className="flex items-center space-x-2">
                                        <Progress
                                          value={task.progress}
                                          className="flex-1 h-1"
                                        />
                                        <span className="text-[10px] text-gray-600 dark:text-gray-300">
                                          {task.progress}%
                                        </span>
                                      </div>
                                    </TableCell>
                                    <TableCell>
                                      <Badge
                                        variant="outline"
                                        className={cn(
                                          getStatusColor(task.status),
                                          "text-[10px]"
                                        )}
                                      >
                                        {task.status}
                                      </Badge>
                                    </TableCell>
                                    <TableCell className="text-[10px]">
                                      {new Date(
                                        task.dueDate
                                      ).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>
                                      <Button variant="ghost" size="sm">
                                        <MoreHorizontal className="h-3 w-3" />
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                ))}
                              </>
                            )}
                          </>
                        ))}
                      </>
                    )}
                  </>
                ))}
              </TableBody>
            </Table>
          </div>

   
      </div>
      {/* Add Task Modal */}
      <AddTaskModal open={showAddTask} onOpenChange={setShowAddTask} />
    </div>
  );
}
