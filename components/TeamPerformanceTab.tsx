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

export default function TeamPerformanceTab() {
  const teamTasks = dashboardStats.team;
  const teamPerformanceData = [
    { name: "Asifa", open: 8, inProgress: 8, completed: 4 },
    { name: "Javed", open: 12, inProgress: 10, completed: 8 },
    { name: "Khurram", open: 16, inProgress: 10, completed: 10 },
    { name: "Nabeel", open: 20, inProgress: 24, completed: 10 },
  ];
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
            <div className=" grid grid-cols-1 md:grid-cols-2 items-center">
                         <div className="relative w-32 h-32 mx-auto ">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={[
                                  {
                                    value: teamTasks[0].open,
                                    color: "#FB923C",
                                  },
                                  {
                                    value: teamTasks[0].inProgress,
                                    color: "#F97316",
                                  },
                                  {
                                    value: teamTasks[0].completed,
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
                                    value: teamTasks[0].open,
                                    color: "#FDBA74", // Light Orange - Open
                                  },
                                  {
                                    value: teamTasks[0].inProgress,
                                    color: "#FB923C", // Medium Orange - In Progress
                                  },
                                  {
                                    value: teamTasks[0].completed,
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
                              {teamTasks[0].total}
                            </span>
                            <span className="text-sm text-gray-500">Total</span>
                          </div>
                        </div>
                        <div className="space-y-2 text-xs">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                              <span>Planned Goals</span>
                            </div>
                            <span>{teamTasks[0].open}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                              <span>In-Progress</span>
                            </div>
                            <span>{teamTasks[0].inProgress}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                              <span>Completed</span>
                            </div>
                            <span>{teamTasks[0].completed}</span>
                          </div>
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
                    <div className=" grid grid-cols-1 md:grid-cols-2 items-center">
                     <div className="relative w-32 h-32 mx-auto ">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[
                              {
                                value: teamTasks[1].open,
                                color: "#FB923C",
                              },
                              {
                                value: teamTasks[1].inProgress,
                                color: "#F97316",
                              },
                              {
                                value: teamTasks[1].completed,
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
                                value: teamTasks[1].open,
                                color: "#FDBA74", // Light Orange - Open
                              },
                              {
                                value: teamTasks[1].inProgress,
                                color: "#FB923C", // Medium Orange - In Progress
                              },
                              {
                                value: teamTasks[1].completed,
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
                          {teamTasks[1].total}
                        </span>
                        <span className="text-sm text-gray-500">Total</span>
                      </div>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                          <span>Planned Goals</span>
                        </div>
                        <span>{teamTasks[1].open}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                          <span>In-Progress</span>
                        </div>
                        <span>{teamTasks[1].inProgress}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                          <span>Completed</span>
                        </div>
                        <span>{teamTasks[1].completed}</span>
                      </div>
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
                    <div className=" grid grid-cols-1 md:grid-cols-2 items-center">
                     <div className="relative w-32 h-32 mx-auto ">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[
                              {
                                value: teamTasks[2].open,
                                color: "#FB923C",
                              },
                              {
                                value: teamTasks[2].inProgress,
                                color: "#F97316",
                              },
                              {
                                value: teamTasks[2].completed,
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
                                value: teamTasks[2].open,
                                color: "#FDBA74", // Light Orange - Open
                              },
                              {
                                value: teamTasks[2].inProgress,
                                color: "#FB923C", // Medium Orange - In Progress
                              },
                              {
                                value: teamTasks[2].completed,
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
                          {teamTasks[2].total}
                        </span>
                        <span className="text-sm text-gray-500">Total</span>
                      </div>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                          <span>Planned Goals</span>
                        </div>
                        <span>{teamTasks[2].open}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                          <span>In-Progress</span>
                        </div>
                        <span>{teamTasks[2].inProgress}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                          <span>Completed</span>
                        </div>
                        <span>{teamTasks[2].completed}</span>
                      </div>
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

        {/* Team Performance Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Team Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {teamPerformanceData.map((member) => (
                <div key={member.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{member.name}</span>
                    <span className="text-xs text-gray-500">
                      {member.open + member.inProgress + member.completed}
                    </span>
                  </div>
                  <div className="flex space-x-1 h-4">
                    <div
                      className="bg-orange-400 rounded-l"
                      style={{ width: `${(member.open / 50) * 100}%` }}
                    ></div>
                    <div
                      className="bg-orange-500"
                      style={{
                        width: `${(member.inProgress / 50) * 100}%`,
                      }}
                    ></div>
                    <div
                      className="bg-orange-600 rounded-r"
                      style={{ width: `${(member.completed / 50) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between text-xs text-gray-500 mt-4">
                <span>0</span>
                <span>50</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Over-Due Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Over-Due Tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-2">
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
                    In-Performance
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
                    In-Performance
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
          <CardContent className="space-y-2">
            <div className="space-y-2">
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
