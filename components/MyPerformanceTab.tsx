"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import { Target, Clock, TrendingUp, CheckCircle, Star, Zap, Trophy, Activity } from "lucide-react"
import type { PerformanceMetrics, Goal, Task } from "@/lib/types"

// Mock data for current user
const currentUser = {
  id: "current-user",
  name: "Alex Thompson",
  avatar: "/placeholder.svg?height=80&width=80",
  role: "Senior Frontend Developer",
  department: "Engineering",
  joinDate: "2022-03-15",
  level: "Senior",
  badge: "Top Performer",
}

const performanceMetrics: PerformanceMetrics = {
  tasksCompleted: 127,
  tasksInProgress: 8,
  overdueTasks: 2,
  completionRate: 94.8,
  avgCompletionTime: 16.2,
  goalsAchieved: 15,
  totalGoals: 18,
  performanceScore: 91,
  efficiency: 89,
  qualityScore: 93,
  weeklyProgress: [
    { week: "Week 1", completed: 12, assigned: 15 },
    { week: "Week 2", completed: 18, assigned: 20 },
    { week: "Week 3", completed: 15, assigned: 16 },
    { week: "Week 4", completed: 22, assigned: 24 },
    { week: "Week 5", completed: 19, assigned: 21 },
    { week: "Week 6", completed: 25, assigned: 26 },
  ],
  monthlyTrends: [
    { month: "Jan", score: 85 },
    { month: "Feb", score: 87 },
    { month: "Mar", score: 89 },
    { month: "Apr", score: 91 },
    { month: "May", score: 88 },
    { month: "Jun", score: 93 },
  ],
}

const recentGoals: Goal[] = [
  {
    id: "1",
    title: "Complete React Migration Project",
    progress: 85,
    target: 100,
    deadline: "2024-02-15",
    status: "on-track",
    category: "Development",
  },
  {
    id: "2",
    title: "Improve Code Review Response Time",
    progress: 92,
    target: 100,
    deadline: "2024-01-30",
    status: "completed",
    category: "Process",
  },
  {
    id: "3",
    title: "Mentor 2 Junior Developers",
    progress: 60,
    target: 100,
    deadline: "2024-03-01",
    status: "on-track",
    category: "Leadership",
  },
  {
    id: "4",
    title: "Reduce Bug Rate by 15%",
    progress: 45,
    target: 100,
    deadline: "2024-02-28",
    status: "at-risk",
    category: "Quality",
  },
]

const recentTasks: Task[] = [
  {
    id: "1",
    title: "Implement user authentication flow",
    status: "completed",
    priority: "high",
    dueDate: "2024-01-20",
    completedDate: "2024-01-19",
    assignedTo: "current-user",
    estimatedHours: 16,
    actualHours: 14,
  },
  {
    id: "2",
    title: "Design system component updates",
    status: "in-progress",
    priority: "medium",
    dueDate: "2024-01-25",
    assignedTo: "current-user",
    estimatedHours: 12,
  },
  {
    id: "3",
    title: "Performance optimization review",
    status: "overdue",
    priority: "high",
    dueDate: "2024-01-18",
    assignedTo: "current-user",
    estimatedHours: 8,
  },
]

const chartConfig = {
  completed: {
    label: "Completed",
    color: "hsl(24, 95%, 53%)",
  },
  assigned: {
    label: "Assigned",
    color: "hsl(24, 95%, 73%)",
  },
  score: {
    label: "Performance Score",
    color: "hsl(24, 95%, 53%)",
  },
}

const achievements = [
  { title: "Task Master", description: "Completed 100+ tasks", icon: Trophy, earned: true },
  { title: "Speed Demon", description: "Avg completion time < 20h", icon: Zap, earned: true },
  { title: "Quality Champion", description: "Quality score > 90%", icon: Star, earned: true },
  { title: "Goal Crusher", description: "Achieved 15+ goals", icon: Target, earned: true },
  { title: "Consistency King", description: "7 weeks streak", icon: Activity, earned: false },
]

export default function MyPerformanceTab() {
  const [selectedPeriod, setSelectedPeriod] = useState("month")

  const skillsData = [
    { skill: "Frontend Development", level: 95, color: "hsl(24, 95%, 53%)" },
    { skill: "React/Next.js", level: 92, color: "hsl(24, 95%, 63%)" },
    { skill: "TypeScript", level: 88, color: "hsl(24, 95%, 73%)" },
    { skill: "UI/UX Design", level: 75, color: "hsl(24, 95%, 83%)" },
    { skill: "Team Leadership", level: 70, color: "hsl(24, 95%, 93%)" },
  ]

  const timeDistribution = [
    { name: "Development", value: 60, color: "hsl(24, 95%, 53%)" },
    { name: "Code Review", value: 15, color: "hsl(24, 95%, 63%)" },
    { name: "Meetings", value: 20, color: "hsl(24, 95%, 73%)" },
    { name: "Learning", value: 5, color: "hsl(24, 95%, 83%)" },
  ]

  return (
    <div className=" space-y-2  min-h-screen">
 

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-orange-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Performance Score</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{performanceMetrics.performanceScore}%</div>
            <p className="text-xs text-gray-600">+3% from last month</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{performanceMetrics.tasksCompleted}</div>
            <p className="text-xs text-gray-600">{performanceMetrics.completionRate}% completion rate</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Goals Achieved</CardTitle>
            <Target className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              {performanceMetrics.goalsAchieved}/{performanceMetrics.totalGoals}
            </div>
            <p className="text-xs text-gray-600">
              {Math.round((performanceMetrics.goalsAchieved / performanceMetrics.totalGoals) * 100)}% achievement rate
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Completion Time</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{performanceMetrics.avgCompletionTime}h</div>
            <p className="text-xs text-gray-600">15% faster than average</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Performance Charts */}
          <div className="grid grid-cols-1 gap-2">
            <Card className=" w-full overflow-auto">
              <CardHeader>
                <CardTitle>Weekly Progress</CardTitle>
                <CardDescription>Tasks completed vs assigned over the last 6 weeks</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={performanceMetrics.weeklyProgress}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="completed" fill="hsl(24, 95%, 53%)" name="Completed" />
                      <Bar dataKey="assigned" fill="hsl(24, 95%, 73%)" name="Assigned" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className=" w-full overflow-auto">
              <CardHeader>
                <CardTitle>Performance Trend</CardTitle>
                <CardDescription>Monthly performance score over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceMetrics.monthlyTrends}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Area
                        type="monotone"
                        dataKey="score"
                        stroke="hsl(24, 95%, 53%)"
                        fill="hsl(24, 95%, 83%)"
                        name="Performance Score"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          {/* Time Distribution and Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Time Distribution</CardTitle>
                <CardDescription>How you spend your working hours</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={timeDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {timeDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
                <CardDescription>Your earned badges and milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`flex items-center space-x-3 p-3 rounded-lg ${achievement.earned ? "bg-orange-50 border border-orange-200" : "bg-gray-50 border border-gray-200"}`}
                    >
                      <achievement.icon
                        className={`h-6 w-6 ${achievement.earned ? "text-orange-600" : "text-gray-400"}`}
                      />
                      <div className="flex-1">
                        <h4 className={`font-medium ${achievement.earned ? "text-orange-900" : "text-gray-500"}`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-sm ${achievement.earned ? "text-orange-700" : "text-gray-400"}`}>
                          {achievement.description}
                        </p>
                      </div>
                      {achievement.earned && <Badge className="bg-orange-600 hover:bg-orange-700">Earned</Badge>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="goals" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Goals</CardTitle>
              <CardDescription>Track your progress on active goals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentGoals.map((goal) => (
                  <div key={goal.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                      <Badge
                        variant={
                          goal.status === "completed"
                            ? "default"
                            : goal.status === "at-risk"
                              ? "destructive"
                              : "secondary"
                        }
                      >
                        {goal.status.replace("-", " ")}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Category: {goal.category}</p>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>
                        {goal.progress}% of {goal.target}
                      </span>
                    </div>
                    <Progress value={goal.progress} className="h-2 mb-2" />
                    <p className="text-xs text-gray-500">Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Tasks</CardTitle>
              <CardDescription>Your latest task activities and status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTasks.map((task) => (
                  <div key={task.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{task.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            task.priority === "high"
                              ? "destructive"
                              : task.priority === "medium"
                                ? "default"
                                : "secondary"
                          }
                        >
                          {task.priority}
                        </Badge>
                        <Badge
                          variant={
                            task.status === "completed"
                              ? "default"
                              : task.status === "overdue"
                                ? "destructive"
                                : "secondary"
                          }
                        >
                          {task.status.replace("-", " ")}
                        </Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Due Date:</span>
                        <p className="font-medium">{new Date(task.dueDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Estimated:</span>
                        <p className="font-medium">{task.estimatedHours}h</p>
                      </div>
                      {task.actualHours && (
                        <div>
                          <span className="text-gray-600">Actual:</span>
                          <p className="font-medium">{task.actualHours}h</p>
                        </div>
                      )}
                      {task.completedDate && (
                        <div>
                          <span className="text-gray-600">Completed:</span>
                          <p className="font-medium">{new Date(task.completedDate).toLocaleDateString()}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Skill Assessment</CardTitle>
              <CardDescription>Your current skill levels and areas for improvement</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {skillsData.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">{skill.skill}</span>
                      <span className="text-orange-600 font-semibold">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
