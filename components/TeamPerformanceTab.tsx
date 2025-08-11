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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Line,
  ComposedChart,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import {
  Users,
  TrendingUp,
  CheckCircle,
  Target,
  Clock,
  Lightbulb,
  Award,
  MessageSquare,
  Brain,
  Activity,
} from "lucide-react"
import type { EnhancedTeamMember, TeamKPIs } from "@/lib/types"

// Enhanced mock data
const teamKPIs: TeamKPIs = {
  totalProductivity: 87,
  qualityIndex: 92,
  collaborationScore: 89,
  innovationMetric: 76,
  customerSatisfaction: 94,
  timeToMarket: 82,
}

const enhancedTeamMembers: EnhancedTeamMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Senior Developer",
    department: "Engineering",
    tasksCompleted: 45,
    totalTasks: 52,
    overdueTasks: 2,
    avgCompletionTime: 18.5,
    goalsAchieved: 8,
    totalGoals: 10,
    performanceScore: 92,
    lastActive: "2 hours ago",
    efficiency: 88,
    qualityScore: 95,
    attendance: {
      presentDays: 22,
      totalWorkingDays: 23,
      lateArrivals: 1,
      earlyDepartures: 0,
      overtimeHours: 15,
      leavesTaken: 1,
    },
    initiatives: {
      initiativesProposed: 5,
      initiativesImplemented: 4,
      impactScore: 85,
      leadershipActivities: 8,
    },
    objectives: [
      {
        objectiveId: "obj1",
        title: "Improve Code Quality",
        progress: 85,
        weight: 30,
        status: "on-track",
        keyResults: [
          { description: "Reduce bug rate by 20%", progress: 90, target: 100 },
          { description: "Increase test coverage to 90%", progress: 80, target: 100 },
        ],
      },
    ],
    skillGrowth: 15,
    mentorshipScore: 88,
    communicationRating: 92,
    problemSolvingScore: 94,
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Product Manager",
    department: "Product",
    tasksCompleted: 38,
    totalTasks: 45,
    overdueTasks: 1,
    avgCompletionTime: 22.3,
    goalsAchieved: 6,
    totalGoals: 8,
    performanceScore: 85,
    lastActive: "1 hour ago",
    efficiency: 84,
    qualityScore: 89,
    attendance: {
      presentDays: 23,
      totalWorkingDays: 23,
      lateArrivals: 0,
      earlyDepartures: 1,
      overtimeHours: 8,
      leavesTaken: 0,
    },
    initiatives: {
      initiativesProposed: 7,
      initiativesImplemented: 5,
      impactScore: 78,
      leadershipActivities: 12,
    },
    objectives: [
      {
        objectiveId: "obj2",
        title: "Launch New Feature",
        progress: 70,
        weight: 40,
        status: "on-track",
        keyResults: [
          { description: "Complete user research", progress: 100, target: 100 },
          { description: "Deliver MVP", progress: 40, target: 100 },
        ],
      },
    ],
    skillGrowth: 12,
    mentorshipScore: 75,
    communicationRating: 95,
    problemSolvingScore: 87,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "UX Designer",
    department: "Design",
    tasksCompleted: 42,
    totalTasks: 48,
    overdueTasks: 0,
    avgCompletionTime: 16.8,
    goalsAchieved: 9,
    totalGoals: 10,
    performanceScore: 94,
    lastActive: "30 minutes ago",
    efficiency: 91,
    qualityScore: 96,
    attendance: {
      presentDays: 23,
      totalWorkingDays: 23,
      lateArrivals: 0,
      earlyDepartures: 0,
      overtimeHours: 5,
      leavesTaken: 0,
    },
    initiatives: {
      initiativesProposed: 6,
      initiativesImplemented: 6,
      impactScore: 92,
      leadershipActivities: 6,
    },
    objectives: [
      {
        objectiveId: "obj3",
        title: "Design System Enhancement",
        progress: 95,
        weight: 35,
        status: "completed",
        keyResults: [
          { description: "Create 20 new components", progress: 100, target: 100 },
          { description: "Update documentation", progress: 90, target: 100 },
        ],
      },
    ],
    skillGrowth: 18,
    mentorshipScore: 82,
    communicationRating: 89,
    problemSolvingScore: 91,
  },
  {
    id: "4",
    name: "David Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Backend Developer",
    department: "Engineering",
    tasksCompleted: 35,
    totalTasks: 44,
    overdueTasks: 3,
    avgCompletionTime: 25.1,
    goalsAchieved: 5,
    totalGoals: 9,
    performanceScore: 78,
    lastActive: "4 hours ago",
    efficiency: 79,
    qualityScore: 82,
    attendance: {
      presentDays: 21,
      totalWorkingDays: 23,
      lateArrivals: 3,
      earlyDepartures: 2,
      overtimeHours: 12,
      leavesTaken: 2,
    },
    initiatives: {
      initiativesProposed: 2,
      initiativesImplemented: 1,
      impactScore: 65,
      leadershipActivities: 3,
    },
    objectives: [
      {
        objectiveId: "obj4",
        title: "API Performance Optimization",
        progress: 45,
        weight: 25,
        status: "at-risk",
        keyResults: [
          { description: "Reduce response time by 30%", progress: 60, target: 100 },
          { description: "Implement caching", progress: 30, target: 100 },
        ],
      },
    ],
    skillGrowth: 8,
    mentorshipScore: 65,
    communicationRating: 72,
    problemSolvingScore: 78,
  },
  {
    id: "5",
    name: "Lisa Wang",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "QA Engineer",
    department: "Engineering",
    tasksCompleted: 51,
    totalTasks: 55,
    overdueTasks: 1,
    avgCompletionTime: 14.2,
    goalsAchieved: 7,
    totalGoals: 8,
    performanceScore: 89,
    lastActive: "1 hour ago",
    efficiency: 93,
    qualityScore: 91,
    attendance: {
      presentDays: 23,
      totalWorkingDays: 23,
      lateArrivals: 0,
      earlyDepartures: 0,
      overtimeHours: 10,
      leavesTaken: 0,
    },
    initiatives: {
      initiativesProposed: 4,
      initiativesImplemented: 3,
      impactScore: 80,
      leadershipActivities: 5,
    },
    objectives: [
      {
        objectiveId: "obj5",
        title: "Test Automation Framework",
        progress: 80,
        weight: 30,
        status: "on-track",
        keyResults: [
          { description: "Automate 80% of test cases", progress: 85, target: 100 },
          { description: "Reduce manual testing time", progress: 75, target: 100 },
        ],
      },
    ],
    skillGrowth: 14,
    mentorshipScore: 78,
    communicationRating: 85,
    problemSolvingScore: 88,
  },
]

const chartConfig = {
  performance: { label: "Performance", color: "hsl(24, 95%, 53%)" },
  efficiency: { label: "Efficiency", color: "hsl(24, 95%, 63%)" },
  quality: { label: "Quality", color: "hsl(24, 95%, 73%)" },
  collaboration: { label: "Collaboration", color: "hsl(24, 95%, 83%)" },
  innovation: { label: "Innovation", color: "hsl(24, 95%, 93%)" },
}

export interface TeamMember {
  id: string
  name: string
  avatar: string
  role: string
  department: string
  tasksCompleted: number
  totalTasks: number
  overdueTasks: number
  avgCompletionTime: number // in hours
  goalsAchieved: number
  totalGoals: number
  performanceScore: number
  lastActive: string
  efficiency: number
  qualityScore: number
}
// Mock data for team members
const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Senior Developer",
    department: "Engineering",
    tasksCompleted: 45,
    totalTasks: 52,
    overdueTasks: 2,
    avgCompletionTime: 18.5,
    goalsAchieved: 8,
    totalGoals: 10,
    performanceScore: 92,
    lastActive: "2 hours ago",
    efficiency: 88,
    qualityScore: 95,
  },
  {
    id: "2",
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Product Manager",
    department: "Product",
    tasksCompleted: 38,
    totalTasks: 45,
    overdueTasks: 1,
    avgCompletionTime: 22.3,
    goalsAchieved: 6,
    totalGoals: 8,
    performanceScore: 85,
    lastActive: "1 hour ago",
    efficiency: 84,
    qualityScore: 89,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "UX Designer",
    department: "Design",
    tasksCompleted: 42,
    totalTasks: 48,
    overdueTasks: 0,
    avgCompletionTime: 16.8,
    goalsAchieved: 9,
    totalGoals: 10,
    performanceScore: 94,
    lastActive: "30 minutes ago",
    efficiency: 91,
    qualityScore: 96,
  },
  {
    id: "4",
    name: "David Kim",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Backend Developer",
    department: "Engineering",
    tasksCompleted: 35,
    totalTasks: 44,
    overdueTasks: 3,
    avgCompletionTime: 25.1,
    goalsAchieved: 5,
    totalGoals: 9,
    performanceScore: 78,
    lastActive: "4 hours ago",
    efficiency: 79,
    qualityScore: 82,
  },
  {
    id: "5",
    name: "Lisa Wang",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "QA Engineer",
    department: "Engineering",
    tasksCompleted: 51,
    totalTasks: 55,
    overdueTasks: 1,
    avgCompletionTime: 14.2,
    goalsAchieved: 7,
    totalGoals: 8,
    performanceScore: 89,
    lastActive: "1 hour ago",
    efficiency: 93,
    qualityScore: 91,
  },
]

export default function EnhancedTeamPerformanceDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("performance")
  const [filterDepartment, setFilterDepartment] = useState("all")
  const [selectedMetric, setSelectedMetric] = useState("performance")
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => setIsRefreshing(false), 2000)
  }

  const handleExport = () => {
    // Mock export functionality
    alert("Exporting team performance report...")
  }

  const filteredMembers = enhancedTeamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.role.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = filterDepartment === "all" || member.department === filterDepartment
    return matchesSearch && matchesDepartment
  })

  // KPI Radar Chart Data
  const kpiRadarData = [
    { metric: "Productivity", value: teamKPIs.totalProductivity, fullMark: 100 },
    { metric: "Quality", value: teamKPIs.qualityIndex, fullMark: 100 },
    { metric: "Collaboration", value: teamKPIs.collaborationScore, fullMark: 100 },
    { metric: "Innovation", value: teamKPIs.innovationMetric, fullMark: 100 },
    { metric: "Customer Sat.", value: teamKPIs.customerSatisfaction, fullMark: 100 },
    { metric: "Time to Market", value: teamKPIs.timeToMarket, fullMark: 100 },
  ]

  // Performance Distribution Data
  const performanceDistribution = [
    { range: "90-100%", count: 2, color: "hsl(120, 70%, 50%)" },
    { range: "80-89%", count: 2, color: "hsl(24, 95%, 53%)" },
    { range: "70-79%", count: 1, color: "hsl(45, 95%, 53%)" },
    { range: "60-69%", count: 0, color: "hsl(0, 70%, 50%)" },
  ]

  // Attendance Overview
  const attendanceData = enhancedTeamMembers.map((member) => ({
    name: member.name.split(" ")[0],
    attendance: Math.round((member.attendance.presentDays / member.attendance.totalWorkingDays) * 100),
    overtime: member.attendance.overtimeHours,
    lateArrivals: member.attendance.lateArrivals,
  }))

  // Initiative Tracking
  const initiativeData = enhancedTeamMembers.map((member) => ({
    name: member.name.split(" ")[0],
    proposed: member.initiatives.initiativesProposed,
    implemented: member.initiatives.initiativesImplemented,
    impact: member.initiatives.impactScore,
  }))
const chartConfig = {
  completed: {
    label: "Completed",
    color: "hsl(24, 95%, 53%)", // Orange
  },
  pending: {
    label: "Pending",
    color: "hsl(24, 95%, 83%)", // Light Orange
  },
  overdue: {
    label: "Overdue",
    color: "hsl(0, 84%, 60%)", // Red
  },
}
  // Skills Comparison
  const skillsComparisonData = enhancedTeamMembers.map((member) => ({
    name: member.name.split(" ")[0],
    communication: member.communicationRating,
    problemSolving: member.problemSolvingScore,
    mentorship: member.mentorshipScore,
    skillGrowth: member.skillGrowth + 70, // Base + growth
  }))

  // Chart data
  const performanceData = teamMembers.map((member) => ({
    name: member.name.split(" ")[0],
    performance: member.performanceScore,
    efficiency: member.efficiency,
    quality: member.qualityScore,
  }))
  
  // Team overview metrics
  const totalTasks = teamMembers.reduce((sum, member) => sum + member.totalTasks, 0)
  const completedTasks = teamMembers.reduce((sum, member) => sum + member.tasksCompleted, 0)
  const overdueTasks = teamMembers.reduce((sum, member) => sum + member.overdueTasks, 0)
  const avgPerformanceScore = teamMembers.reduce((sum, member) => sum + member.performanceScore, 0) / teamMembers.length


    const taskDistributionData = [
    { name: "Completed", value: completedTasks, color: "hsl(24, 95%, 53%)" },
    { name: "In Progress", value: totalTasks - completedTasks - overdueTasks, color: "hsl(24, 95%, 73%)" },
    { name: "Overdue", value: overdueTasks, color: "hsl(0, 84%, 60%)" },
  ]

  return (
    <div className="space-y-2 min-h-screen">
      
      <Tabs defaultValue="overview" className="space-y-2 bg-transparent">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="kpis">KPIs</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="initiatives">Initiatives</TabsTrigger>
          <TabsTrigger value="detailed">Detailed View</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-2 bg-transparent">
          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-l-4 bg-transparent border-l-orange-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Performance</CardTitle>
                <TrendingUp className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">
                  {Math.round(
                    enhancedTeamMembers.reduce((sum, member) => sum + member.performanceScore, 0) /
                      enhancedTeamMembers.length,
                  )}
                  %
                </div>
                <p className="text-xs text-gray-600 dark:text-white">+5% from last month</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 bg-transparent border-l-green-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Team Attendance</CardTitle>
                <Users className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {Math.round(
                    (enhancedTeamMembers.reduce(
                      (sum, member) => sum + member.attendance.presentDays / member.attendance.totalWorkingDays,
                      0,
                    ) /
                      enhancedTeamMembers.length) *
                      100,
                  )}
                  %
                </div>
                <p className="text-xs text-gray-600 dark:text-white">Excellent attendance rate</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 bg-transparent border-l-blue-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Initiatives</CardTitle>
                <Lightbulb className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {enhancedTeamMembers.reduce((sum, member) => sum + member.initiatives.initiativesImplemented, 0)}
                </div>
                <p className="text-xs text-gray-600 dark:text-white">
                  {enhancedTeamMembers.reduce((sum, member) => sum + member.initiatives.initiativesProposed, 0)}{" "}
                  proposed total
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 bg-transparent border-l-purple-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Skill Growth</CardTitle>
                <Brain className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">
                  +
                  {Math.round(
                    enhancedTeamMembers.reduce((sum, member) => sum + member.skillGrowth, 0) /
                      enhancedTeamMembers.length,
                  )}
                  %
                </div>
                <p className="text-xs text-gray-600 dark:text-white">Average skill improvement</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className=" bg-transparent col-span-2 w-full overflow-auto">
          <CardHeader>
            <CardTitle>Team Performance Overview</CardTitle>
            <CardDescription>Performance, efficiency, and quality scores by team member</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="performance" fill="hsl(24, 95%, 53%)" name="Performance" />
                  <Bar dataKey="efficiency" fill="hsl(24, 95%, 73%)" name="Efficiency" />
                  <Bar dataKey="quality" fill="hsl(24, 95%, 83%)" name="Quality" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className=" bg-transparent col-span-1 w-full overflow-auto">
          <CardHeader>
            <CardTitle>Task Distribution</CardTitle>
            <CardDescription>Current status of all team tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={taskDistributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {taskDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
        </TabsContent>

        <TabsContent value="kpis" className="space-y-2 bg-transparent">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className=" bg-transparent">
              <CardHeader>
                <CardTitle>Team KPI Radar</CardTitle>
                <CardDescription>Overall team performance across key indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={kpiRadarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="metric" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar
                        name="KPI Score"
                        dataKey="value"
                        stroke="hsl(24, 95%, 53%)"
                        fill="hsl(24, 95%, 53%)"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </RadarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className=" bg-transparent">
              <CardHeader>
                <CardTitle>KPI Breakdown</CardTitle>
                <CardDescription>Individual KPI scores and targets</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(teamKPIs).map(([key, value]) => (
                  <div key={key} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                      </span>
                      <span className="text-orange-600 font-semibold">{value}%</span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-2 bg-transparent">
          <Card className=" bg-transparent">
            <CardHeader>
              <CardTitle>Attendance & Time Tracking</CardTitle>
              <CardDescription>Team attendance patterns and overtime analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={attendanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar yAxisId="left" dataKey="attendance" fill="hsl(24, 95%, 53%)" name="Attendance %" />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="overtime"
                      stroke="hsl(0, 70%, 50%)"
                      name="Overtime Hours"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="initiatives" className="space-y-2 bg-transparent">
          <Card className=" bg-transparent">
            <CardHeader>
              <CardTitle>Initiative Tracking</CardTitle>
              <CardDescription>Team member initiatives and their impact</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={initiativeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="proposed" fill="hsl(24, 95%, 73%)" name="Proposed" />
                    <Bar dataKey="implemented" fill="hsl(24, 95%, 53%)" name="Implemented" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="detailed" className="space-y-2 bg-transparent">
          <Card className=" bg-transparent">
            <CardHeader>
              <CardTitle>Detailed Team Performance View</CardTitle>
              <CardDescription>Comprehensive performance metrics for each team member</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {filteredMembers.map((member) => (
                  <div key={member.id} className="p-6 border rounded-lg hover:bg-orange-50 dark:hover:bg-gray-800/30 dark:text-white transition-colors">
                    {/* Member Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-white">
                            {member.role} • {member.department}
                          </p>
                          <p className="text-xs text-gray-500">Last active: {member.lastActive}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-orange-600">{member.performanceScore}%</div>
                          <div className="text-xs text-gray-600 dark:text-white">Performance</div>
                        </div>
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>

                    {/* Performance Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-4">
                      <div className="text-center p-3 bg-transparent rounded-lg border">
                        <CheckCircle className="h-5 w-5 text-green-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-green-600">
                          {member.tasksCompleted}/{member.totalTasks}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-white">Tasks</div>
                      </div>
                      <div className="text-center p-3 bg-transparent rounded-lg border">
                        <Target className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-blue-600">
                          {member.goalsAchieved}/{member.totalGoals}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-white">Goals</div>
                      </div>
                      <div className="text-center p-3 bg-transparent rounded-lg border">
                        <Clock className="h-5 w-5 text-purple-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-purple-600">{member.avgCompletionTime}h</div>
                        <div className="text-xs text-gray-600 dark:text-white">Avg Time</div>
                      </div>
                      <div className="text-center p-3 bg-transparent rounded-lg border">
                        <Activity className="h-5 w-5 text-orange-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-orange-600">{member.efficiency}%</div>
                        <div className="text-xs text-gray-600 dark:text-white">Efficiency</div>
                      </div>
                      <div className="text-center p-3 bg-transparent rounded-lg border">
                        <Award className="h-5 w-5 text-yellow-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-yellow-600">{member.qualityScore}%</div>
                        <div className="text-xs text-gray-600 dark:text-white">Quality</div>
                      </div>
                      <div className="text-center p-3 bg-transparent rounded-lg border">
                        <Lightbulb className="h-5 w-5 text-indigo-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-indigo-600">
                          {member.initiatives.initiativesImplemented}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-white">Initiatives</div>
                      </div>
                    </div>

                    {/* Progress Bars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Task Completion</span>
                          <span>{Math.round((member.tasksCompleted / member.totalTasks) * 100)}%</span>
                        </div>
                        <Progress value={(member.tasksCompleted / member.totalTasks) * 100} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Attendance Rate</span>
                          <span>
                            {Math.round((member.attendance.presentDays / member.attendance.totalWorkingDays) * 100)}%
                          </span>
                        </div>
                        <Progress
                          value={(member.attendance.presentDays / member.attendance.totalWorkingDays) * 100}
                          className="h-2"
                        />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Initiative Impact</span>
                          <span>{member.initiatives.impactScore}%</span>
                        </div>
                        <Progress value={member.initiatives.impactScore} className="h-2" />
                      </div>
                    </div>

                    {/* MBO Progress */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900 dark:text-white">Management by Objectives (MBO)</h4>
                      {member.objectives.map((objective) => (
                        <div key={objective.objectiveId} className="p-3 bg-transparent rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-sm">{objective.title}</span>
                            <Badge
                              variant={
                                objective.status === "completed"
                                  ? "default"
                                  : objective.status === "at-risk"
                                    ? "destructive"
                                    : "secondary"
                              }
                            >
                              {objective.status.replace("-", " ")}
                            </Badge>
                          </div>
                          <Progress value={objective.progress} className="h-2 mb-2" />
                          <div className="text-xs text-gray-600 dark:text-white">
                            Weight: {objective.weight}% • Progress: {objective.progress}%
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-end space-x-2 mt-4 pt-4 border-t">
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        1-on-1
                      </Button>
                      <Button size="sm" variant="outline">
                        <Target className="h-4 w-4 mr-2" />
                        Set Goal
                      </Button>
                      <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                        <Award className="h-4 w-4 mr-2" />
                        Review
                      </Button>
                    </div>
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
