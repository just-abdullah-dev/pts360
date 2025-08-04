import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  PieChart,
  Pie,
  Cell,
  XAxis,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { dashboardStats } from "@/constants/sampleData";
import { MessageSquare, User } from "lucide-react";
import { Button } from "./ui/button";

export default function DepartmentPerformanceTab() {
  const departmentTasks = dashboardStats.department;

  const completedTaskPerformanceData = [
    { month: "May", Asifa: 18, Javed: 15, Nabeel: 20 },
    { month: "June", Asifa: 12, Javed: 25, Nabeel: 30 },
    { month: "July", Asifa: 22, Javed: 18, Nabeel: 35 },
    { month: "Aug", Asifa: 28, Javed: 20, Nabeel: 40 },
    { month: "Sept", Asifa: 32, Javed: 30, Nabeel: 50 },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* long term goals and objectives Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              Long Term Goals & Objectives
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-">
            <div className="relative w-32 h-32 mx-auto ">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      {
                        value: departmentTasks[0].open,
                        color: "#FB923C",
                      },
                      {
                        value: departmentTasks[0].inProgress,
                        color: "#F97316",
                      },
                      {
                        value: departmentTasks[0].completed,
                        color: "#EA580C",
                      },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={60}
                    dataKey="value"
                  >
                    {[
                      {
                        value: departmentTasks[0].open,
                        color: "#FDBA74", // Light Orange - Open
                      },
                      {
                        value: departmentTasks[0].inProgress,
                        color: "#FB923C", // Medium Orange - In Progress
                      },
                      {
                        value: departmentTasks[0].completed,
                        color: "#EA580C", // Deep Orange - Completed
                      },
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {departmentTasks[0].total}
                </span>
                <span className="text-sm text-gray-500">Total</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <span>Planned Goals</span>
                </div>
                <span>{departmentTasks[0].open}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span>In-Progress</span>
                </div>
                <span>{departmentTasks[0].inProgress}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                  <span>Completed</span>
                </div>
                <span>{departmentTasks[0].completed}</span>
              </div>
            </div>

            <div className="h-36">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={completedTaskPerformanceData}>
                  <XAxis dataKey="month" />
                  <Line
                    type="monotone"
                    dataKey="Asifa"
                    stroke="#F59E0B"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="Javed"
                    stroke="#F97316"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="Nabeel"
                    stroke="#EA580C"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center space-x-4 text-xs mt-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Planned</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>In-Progress</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span>Completed</span>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* short term goals and objectives Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              Short Term Goals & Objectives
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-">
            <div className="relative w-32 h-32 mx-auto ">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      {
                        value: departmentTasks[1].open,
                        color: "#FB923C",
                      },
                      {
                        value: departmentTasks[1].inProgress,
                        color: "#F97316",
                      },
                      {
                        value: departmentTasks[1].completed,
                        color: "#EA580C",
                      },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={60}
                    dataKey="value"
                  >
                    {[
                      {
                        value: departmentTasks[1].open,
                        color: "#FDBA74", // Light Orange - Open
                      },
                      {
                        value: departmentTasks[1].inProgress,
                        color: "#FB923C", // Medium Orange - In Progress
                      },
                      {
                        value: departmentTasks[1].completed,
                        color: "#EA580C", // Deep Orange - Completed
                      },
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {departmentTasks[1].total}
                </span>
                <span className="text-sm text-gray-500">Total</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <span>Planned Goals</span>
                </div>
                <span>{departmentTasks[1].open}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span>In-Progress</span>
                </div>
                <span>{departmentTasks[1].inProgress}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                  <span>Completed</span>
                </div>
                <span>{departmentTasks[1].completed}</span>
              </div>
            </div>

            <div className="h-36">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={completedTaskPerformanceData}>
                  <XAxis dataKey="month" />
                  <Line
                    type="monotone"
                    dataKey="Asifa"
                    stroke="#F59E0B"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="Javed"
                    stroke="#F97316"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="Nabeel"
                    stroke="#EA580C"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center space-x-4 text-xs mt-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Planned</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>In-Progress</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span>Completed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* routine tasks Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Routine Tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-">
            <div className="relative w-32 h-32 mx-auto ">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      {
                        value: departmentTasks[2].open,
                        color: "#FB923C",
                      },
                      {
                        value: departmentTasks[2].inProgress,
                        color: "#F97316",
                      },
                      {
                        value: departmentTasks[2].completed,
                        color: "#EA580C",
                      },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={60}
                    dataKey="value"
                  >
                    {[
                      {
                        value: departmentTasks[2].open,
                        color: "#FDBA74", // Light Orange - Open
                      },
                      {
                        value: departmentTasks[2].inProgress,
                        color: "#FB923C", // Medium Orange - In Progress
                      },
                      {
                        value: departmentTasks[2].completed,
                        color: "#EA580C", // Deep Orange - Completed
                      },
                    ].map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {departmentTasks[2].total}
                </span>
                <span className="text-sm text-gray-500">Total</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <span>Planned Goals</span>
                </div>
                <span>{departmentTasks[2].open}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span>In-Progress</span>
                </div>
                <span>{departmentTasks[2].inProgress}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                  <span>Completed</span>
                </div>
                <span>{departmentTasks[2].completed}</span>
              </div>
            </div>

            <div className="h-36">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={completedTaskPerformanceData}>
                  <XAxis dataKey="month" />
                  <Line
                    type="monotone"
                    dataKey="Asifa"
                    stroke="#F59E0B"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="Javed"
                    stroke="#F97316"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="Nabeel"
                    stroke="#EA580C"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center space-x-4 text-xs mt-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span>Planned</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>In-Progress</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                <span>Completed</span>
              </div>
            </div>
          </CardContent>
        </Card>

     

        {/* Upcoming Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-white bg-orange-400 -m-6 mb-4 p-4 rounded-t-lg">
              Up Coming Deadlines
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {dashboardStats.upcomingDeadlines.map((deadline, index) => (
              <div key={index} className="space-y-2">
                <h4 className="font-medium text-sm">{deadline.title}</h4>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <Badge
                    variant="outline"
                    className={
                      deadline.status === "Completed"
                        ? "text-green-600 border-green-600"
                        : deadline.status === "Overdue"
                        ? "text-red-600 border-red-600"
                        : "text-orange-500 border-orange-500"
                    }
                  >
                    {deadline.status}
                  </Badge>
                  <span className="">{deadline.date}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Over-Due Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Over-Due Tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm">
                  Recruitment for Crew Members for KPK Stores
                </h4>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <User className="h-3 w-3" />
                  <span>Assigned to: Nabeel</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <Badge
                    variant="outline"
                    className="text-orange-600 border-orange-600"
                  >
                    In-Progress
                  </Badge>
                  <span className="text-gray-500">13/Oct/2025</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">
                  Policy Manual for Crew Members
                </h4>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <User className="h-3 w-3" />
                  <span>Assigned to: Asifa</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <Badge
                    variant="outline"
                    className="text-orange-600 border-orange-600"
                  >
                    In-Progress
                  </Badge>
                  <span className="text-gray-500">20/Oct/2025</span>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full text-gray-500 border-gray-300"
            >
              No more tasks
            </Button>
          </CardContent>
        </Card>

        {/* Activity Feed */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Activity Feed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm">
                  Recruitment for Crew Members for KPK Stores
                </h4>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <User className="h-3 w-3" />
                  <span>Assigned to: Nabeel</span>
                  <Badge
                    variant="outline"
                    className="text-red-600 border-red-600 ml-2"
                  >
                    From: Tahir Javed
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <Badge
                    variant="outline"
                    className="text-orange-600 border-orange-600"
                  >
                    In-Review
                  </Badge>
                  <span className="text-gray-500">13/Oct/2025</span>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm">
                  New Travel Allowance Policy
                </h4>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <User className="h-3 w-3" />
                  <span>Assigned to: Asifa</span>
                  <MessageSquare className="h-3 w-3 ml-2" />
                  <span>No Comments</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <Badge
                    variant="outline"
                    className="text-green-600 border-green-600"
                  >
                    Closed
                  </Badge>
                  <span className="text-gray-500">25/Oct/2025</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
