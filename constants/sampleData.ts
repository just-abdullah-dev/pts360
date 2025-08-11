export interface User {
  id: string;
  name: string;
  email: string;
  designation: string;
  location: string;
  avatar: string;
  departmentSlug?: string;
  role:
    | "HOD"
    | "CEO"
    | "Secretary"
    | "Manager"
    | "Coordinator"
    | "Employee"
    | "Admin";
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  label: string;
  department: string;
  assignees: string[];
  progress: number;
  status: "Overdue" | "In-Progress" | "Completed" | "Submitted" | "Closed";
  dueDate: string;
  startDate: string;
  createdAt: string;
  files: string[];
  jobs: Job[];
}

export interface Job {
  id: string;
  goalId: string;
  title: string;
  label: string;
  assignees: string[];
  progress: number;
  status: "Overdue" | "In-Progress" | "Completed" | "Submitted" | "Closed";
  dueDate: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  jobId: string;
  title: string;
  label: string;
  assignees: string[];
  progress: number;
  status: "Overdue" | "In-Progress" | "Completed" | "Submitted" | "Closed";
  dueDate: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  timestamp: string;
  read: boolean;
}

export interface Department {
  id: string;
  title: string;
  slug: string;
  hod?: {
    name?: string;
    avatar?: string;
  };
}

export const departments: Department[] = [
  {
    id: "1",
    title: "Human Resources",
    slug: "hr",
    hod: {
      name: "Ahmed",
      avatar:
        "https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  },
  {
    id: "2",
    title: "Finance",
    slug: "finance",
    hod: {
      name: "Sara",
      avatar:
        "https://images.pexels.com/photos/2379003/pexels-photo-2379008.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  },
  {
    id: "3",
    title: "Operations",
    slug: "operations",
    hod: {
      name: "Ali",
      avatar:
        "https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  },
  {
    id: "4",
    title: "Marketing",
    slug: "marketing",
    hod: {
      name: "Zara",
      avatar:
        "https://images.pexels.com/photos/2379003/pexels-photo-2379009.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  },
  {
    id: "5",
    title: "Sales",
    slug: "sales",
    hod: {
      name: "Omar",
      avatar:
        "https://images.pexels.com/photos/2379003/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  },
  {
    id: "6",
    title: "IT",
    slug: "it",
    hod: {
      name: "Laila",
      avatar:
        "https://images.pexels.com/photos/2379003/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  },
  { id: "7", title: "Legal", slug: "legal", hod: { name: "Khan", avatar: "" } },
  { id: "10", title: "Administration", slug: "administration", hod: { name: "Ali", avatar: "" } },
  { id: "11", title: "Logistics", slug: "logistics", hod: { name: "Zara", avatar: "" } },
];

export const sampleUsers: User[] = [
  {
    id: "101",
    name: "CEO User",
    email: "ceo@pts360.com",
    designation: "CEO User",
    location: "Lahore, Pakistan",
    avatar:
      "https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=400",
    role: "CEO",
  },
  {
    id: "102",
    name: "HR HOD",
    email: "hr.hod@pts360.com",
    designation: "Department Head",
    location: "Karachi, Pakistan",
    departmentSlug: "hr",
    avatar:
      "https://images.pexels.com/photos/2379021/pexels-photo-2379021.jpeg?auto=compress&cs=tinysrgb&w=400",
    role: "HOD",
  },
  {
    id: "103",
    name: "IT HOD",
    email: "it.hod@pts360.com",
    designation: "Department Head",
    location: "Karachi, Pakistan",
    departmentSlug: "it",
    avatar:
      "https://images.pexels.com/photos/2379021/pexels-photo-2379021.jpeg?auto=compress&cs=tinysrgb&w=400",
    role: "HOD",
  },
  {
    id: "104",
    name: "Finance HOD",
    email: "finance.hod@pts360.com",
    designation: "Department Head",
    location: "Karachi, Pakistan",
    departmentSlug: "finance",
    avatar:
      "https://images.pexels.com/photos/2379021/pexels-photo-2379021.jpeg?auto=compress&cs=tinysrgb&w=400",
    role: "HOD",
  },
  {
    id: "0",
    name: "Admin",
    email: "admin@pts360.com",
    designation: "Admin User",
    location: "Lahore, Pakistan",
    avatar:
      "https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=400",
    role: "Admin",
  },
  {
    id: "2",
    name: "Nabeel",
    email: "team@pts360.com",
    designation: "Store Manager",
    location: "Lahore, Pakistan",
    avatar:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
    role: "Manager",
  },
  {
    id: "3",
    name: "Multi",
    email: "multi@pts360.com",
    designation: "HR Coordinator",
    location: "Islamabad, Pakistan",
    avatar:
      "https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=400",
    role: "Coordinator",
  },
  {
    id: "4",
    name: "Asifa",
    email: "asifa@pts360.com",
    designation: "Policy Specialist",
    location: "Karachi, Pakistan",
    avatar:
      "https://images.pexels.com/photos/2379007/pexels-photo-2379007.jpeg?auto=compress&cs=tinysrgb&w=400",
    role: "Employee",
  },
  {
    id: "22",
    name: "Nabeel",
    email: "team@pts360.com",
    designation: "Store Manager",
    location: "Lahore, Pakistan",
    avatar:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
    role: "Manager",
  },
  {
    id: "33",
    name: "Multi",
    email: "multi@pts360.com",
    designation: "HR Coordinator",
    location: "Islamabad, Pakistan",
    avatar:
      "https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=400",
    role: "Coordinator",
  },
  {
    id: "44",
    name: "Asifa",
    email: "asifa@pts360.com",
    designation: "Policy Specialist",
    location: "Karachi, Pakistan",
    avatar:
      "https://images.pexels.com/photos/2379007/pexels-photo-2379007.jpeg?auto=compress&cs=tinysrgb&w=400",
    role: "Employee",
  },
];

export const sampleGoals: Goal[] = [
  {
    id: "1",
    title: "Recruitment for Crew Members for KPK Stores",
    description:
      "Complete recruitment process for new crew members in KPK region",
    label: "Recruitment",

    department: "IT",
    assignees: ["2"],
    progress: 100,
    status: "Completed",
    dueDate: "2025-10-13",
    startDate: "2025-09-01",
    createdAt: "2025-08-15",
    files: [],
    jobs: [
      {
        id: "1",
        goalId: "1",
        title: "Develop New On-Boarding Policy",
        label: "Policies",
        assignees: ["3"],
        progress: 100,
        status: "Completed",
        dueDate: "2025-10-13",
        tasks: [
          {
            id: "1",
            jobId: "1",
            title: "Equal Employment Policy",
            label: "Policies",
            assignees: ["4"],
            progress: 100,
            status: "Completed",
            dueDate: "2025-10-13",
          },
          {
            id: "2",
            jobId: "1",
            title: "Employment Agreement",
            label: "Documentation",
            assignees: ["4"],
            progress: 100,
            status: "Completed",
            dueDate: "2025-10-15",
          },
        ],
      },
      {
        id: "2",
        goalId: "1",
        title: "Onboard policy for KPK stores employees",
        label: "Policies",
        assignees: ["3"],
        progress: 100,
        status: "Completed",
        dueDate: "2025-10-13",
        tasks: [
          {
            id: "1",
            jobId: "2",
            title: "Employment Policy",
            label: "Policies",
            assignees: ["4"],
            progress: 100,
            status: "Completed",
            dueDate: "2025-10-13",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Create comprehensive policy manual",
    description: "Create comprehensive policy manual",
    department: "HR",
    label: "Policies",
    assignees: ["3"],
    progress: 67,
    status: "In-Progress",
    dueDate: "2025-10-20",
    startDate: "2025-09-15",
    createdAt: "2025-08-27",
    files: [],
    jobs: [
      {
        id: "1",
        goalId: "2",
        title: "Develop New On-Boarding Policy",
        label: "Policies",
        assignees: ["3"],
        progress: 30,
        status: "In-Progress",
        dueDate: "2025-10-13",
        tasks: [
          {
            id: "1",
            jobId: "1",
            title: "Equal Employment Policy",
            label: "Policies",
            assignees: ["4"],
            progress: 50,
            status: "In-Progress",
            dueDate: "2025-10-13",
          },
          {
            id: "2",
            jobId: "1",
            title: "Employment Agreement",
            label: "Documentation",
            assignees: ["4"],
            progress: 10,
            status: "In-Progress",
            dueDate: "2025-10-15",
          },
        ],
      },
    ],
  },
];

export const sampleNotifications: Notification[] = [
  {
    id: "1",
    title: "New Task Assigned",
    message: "You have been assigned a new task for recruitment process",
    type: "info",
    timestamp: "2025-01-09T10:30:00Z",
    read: false,
  },
  {
    id: "2",
    title: "Goal Deadline Approaching",
    message: "KPK Recruitment goal deadline is in 2 days",
    type: "warning",
    timestamp: "2025-01-09T09:15:00Z",
    read: true,
  },
  {
    id: "3",
    title: "New Task Submitted",
    message: "Ali submitted a new task for recruitment process",
    type: "info",
    timestamp: "2025-01-09T10:30:00Z",
    read: false,
  },
  {
    id: "4",
    title: "Goal Created: .........",
    message: "KPK Recruitment goal deadline is in 2 days",
    type: "info",
    timestamp: "2025-01-09T09:15:00Z",
    read: true,
  },
];

export const dashboardStats = {
  department: [
    {
      total: 89,
      open: 10,
      inProgress: 23,
      completed: 56,
    },
    {
      total: 95,
      open: 12,
      inProgress: 28,
      completed: 55,
    },
    {
      total: 110,
      open: 20,
      inProgress: 35,
      completed: 55,
    },
  ],
  team: [
    {
      total: 40,
      open: 5,
      inProgress: 10,
      completed: 25,
    },
    {
      total: 32,
      open: 4,
      inProgress: 8,
      completed: 20,
    },
    {
      total: 28,
      open: 3,
      inProgress: 7,
      completed: 18,
    },
  ],
  my: [
    {
      total: 22,
      open: 2,
      inProgress: 6,
      completed: 14,
    },
    {
      total: 18,
      open: 1,
      inProgress: 5,
      completed: 12,
    },
    {
      total: 25,
      open: 3,
      inProgress: 7,
      completed: 15,
    },
  ],

  newTasks: [
    {
      title: "Industry Payroll Comparison",
      assignee: "No Assignee",
      status: "Open Task",
      date: "20/Jan/2026",
    },
    {
      title: "Gratuity Distribution",
      assignee: "No Assignee",
      status: "Open Task",
      date: "30/Jan/2026",
    },
  ],
  upcomingDeadlines: [
    {
      title: "Performance Review of Q3",
      status: "In-Progress",
      date: "2/Nov/2025",
    },
    {
      title: "Recruitment for Store Managers",
      status: "Overdue",
      date: "3/Nov/2025",
    },
  ],
};
