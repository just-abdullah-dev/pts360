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
  attendance: AttendanceMetrics
  initiatives: InitiativeTracking
  objectives: MBOProgress[]
  skillGrowth: number
  mentorshipScore: number
  communicationRating: number
  problemSolvingScore: number
}

export interface Task {
  id: string
  title: string
  status: "completed" | "in-progress" | "overdue" | "pending"
  priority: "high" | "medium" | "low"
  dueDate: string
  completedDate?: string
  assignedTo: string
  estimatedHours: number
  actualHours?: number
}

export interface Goal {
  id: string
  title: string
  progress: number
  target: number
  deadline: string
  status: "on-track" | "at-risk" | "completed" | "overdue"
  category: string
}

export interface PerformanceMetrics {
  tasksCompleted: number
  tasksInProgress: number
  overdueTasks: number
  completionRate: number
  avgCompletionTime: number
  goalsAchieved: number
  totalGoals: number
  performanceScore: number
  efficiency: number
  qualityScore: number
  weeklyProgress: Array<{ week: string; completed: number; assigned: number }>
  monthlyTrends: Array<{ month: string; score: number }>
}

export interface TeamKPIs {
  totalProductivity: number
  qualityIndex: number
  collaborationScore: number
  innovationMetric: number
  customerSatisfaction: number
  timeToMarket: number
}

export interface AttendanceMetrics {
  presentDays: number
  totalWorkingDays: number
  lateArrivals: number
  earlyDepartures: number
  overtimeHours: number
  leavesTaken: number
}

export interface InitiativeTracking {
  initiativesProposed: number
  initiativesImplemented: number
  impactScore: number
  leadershipActivities: number
}

export interface MBOProgress {
  objectiveId: string
  title: string
  progress: number
  weight: number
  status: "on-track" | "at-risk" | "completed" | "delayed"
  keyResults: Array<{
    description: string
    progress: number
    target: number
  }>
}

export interface EnhancedTeamMember extends TeamMember {
  attendance: AttendanceMetrics
  initiatives: InitiativeTracking
  objectives: MBOProgress[]
  skillGrowth: number
  mentorshipScore: number
  communicationRating: number
  problemSolvingScore: number
}
