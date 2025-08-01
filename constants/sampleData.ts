export interface User {
  id: string;
  name: string;
  email: string;
  designation: string;
  location: string;
  avatar: string;
  role: 'HOD' | 'CEO' | 'Secretary' | 'Manager' | 'Coordinator' | 'Employee' | 'Admin';
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  label: string;
  assignees: string[];
  progress: number;
  status: 'Overdue' | 'In-Progress' | 'Completed' | 'Submitted' | 'Closed';
  dueDate: string;
  startDate: string;
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
  status: 'Overdue' | 'In-Progress' | 'Completed' | 'Submitted' | 'Closed';
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
  status: 'Overdue' | 'In-Progress' | 'Completed' | 'Submitted' | 'Closed';
  dueDate: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: string;
  read: boolean;
}

export const sampleUsers: User[] = [
  {
    id: '0',
    name: 'Admin',
    email: 'admin@pts360.com',
    designation: 'Admin User',
    location: 'Lahore, Pakistan',
    avatar: 'https://images.pexels.com/photos/2379003/pexels-photo-2379003.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Admin'
  },
  {
    id: '1',
    name: 'Rabial',
    email: 'hod@pts360.com',
    designation: 'Department Head',
    location: 'Karachi, Pakistan',
    avatar: 'https://images.pexels.com/photos/2379021/pexels-photo-2379021.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'HOD'
  },
  {
    id: '2',
    name: 'Nabeel',
    email: 'nabeel@pts360.com',
    designation: 'Store Manager',
    location: 'Lahore, Pakistan',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Manager'
  },
  {
    id: '3',
    name: 'Multi',
    email: 'multi@pts360.com',
    designation: 'HR Coordinator',
    location: 'Islamabad, Pakistan',
    avatar: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Coordinator'
  },
  {
    id: '4',
    name: 'Asifa',
    email: 'asifa@pts360.com',
    designation: 'Policy Specialist',
    location: 'Karachi, Pakistan',
    avatar: 'https://images.pexels.com/photos/2379007/pexels-photo-2379007.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: 'Employee'
  }
];

export const sampleGoals: Goal[] = [
  {
    id: '1',
    title: 'Recruitment for Crew Members for KPK Stores',
    description: 'Complete recruitment process for new crew members in KPK region',
    label: 'Recruitment',
    assignees: ['2'],
    progress: 100,
    status: 'Completed',
    dueDate: '2025-10-13',
    startDate: '2025-09-01',
    files: [],
    jobs: [
      {
        id: '1',
        goalId: '1',
        title: 'Develop New On-Boarding Policy',
        label: 'Policies',
        assignees: ['3'],
        progress: 100,
        status: 'Completed',
        dueDate: '2025-10-13',
        tasks: [
          {
            id: '1',
            jobId: '1',
            title: 'Equal Employment Policy',
            label: 'Policies',
            assignees: ['4'],
            progress: 100,
            status: 'Completed',
            dueDate: '2025-10-13'
          },
          {
            id: '2',
            jobId: '1',
            title: 'Employment Agreement',
            label: 'Documentation',
            assignees: ['4'],
            progress: 100,
            status: 'Completed',
            dueDate: '2025-10-15'
          }
        ]
      },
      {
        id: '2',
        goalId: '1',
        title: 'Onboard policy for KPK stores employees',
        label: 'Policies',
        assignees: ['3'],
        progress: 100,
        status: 'Completed',
        dueDate: '2025-10-13',
        tasks: [
          {
            id: '1',
            jobId: '2',
            title: 'Employment Policy',
            label: 'Policies',
            assignees: ['4'],
            progress: 100,
            status: 'Completed',
            dueDate: '2025-10-13'
          },
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Create comprehensive policy manual',
    description: 'Create comprehensive policy manual',
    label: 'Policies',
    assignees: ['3'],
    progress: 67,
    status: 'In-Progress',
    dueDate: '2025-10-20',
    startDate: '2025-09-15',
    files: [],
    jobs: [
      {
        id: '1',
        goalId: '2',
        title: 'Develop New On-Boarding Policy',
        label: 'Policies',
        assignees: ['3'],
        progress: 30,
        status: 'In-Progress',
        dueDate: '2025-10-13',
        tasks: [
          {
            id: '1',
            jobId: '1',
            title: 'Equal Employment Policy',
            label: 'Policies',
            assignees: ['4'],
            progress: 50,
            status: 'In-Progress',
            dueDate: '2025-10-13'
          },
          {
            id: '2',
            jobId: '1',
            title: 'Employment Agreement',
            label: 'Documentation',
            assignees: ['4'],
            progress: 10,
            status: 'In-Progress',
            dueDate: '2025-10-15'
          }
        ]
      },
    ]
  }
];

export const sampleNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Task Assigned',
    message: 'You have been assigned a new task for recruitment process',
    type: 'info',
    timestamp: '2025-01-09T10:30:00Z',
    read: false
  },
  {
    id: '2',
    title: 'Goal Deadline Approaching',
    message: 'KPK Recruitment goal deadline is in 2 days',
    type: 'warning',
    timestamp: '2025-01-09T09:15:00Z',
    read: true
  },
  {
    id: '3',
    title: 'New Task Submitted',
    message: 'Ali submitted a new task for recruitment process',
    type: 'info',
    timestamp: '2025-01-09T10:30:00Z',
    read: false
  },
  {
    id: '4',
    title: 'Goal Created: .........',
    message: 'KPK Recruitment goal deadline is in 2 days',
    type: 'info',
    timestamp: '2025-01-09T09:15:00Z',
    read: true
  }
];

export const dashboardStats = {
  myTasks: {
    total: 12,
    open: 2,
    inProgress: 4,
    completed: 6
  },
  teamTasks: {
    total: 89,
    open: 10,
    inProgress: 23,
    completed: 56
  },
  newTasks: [
    {
      title: 'Industry Payroll Comparison',
      assignee: 'No Assignee',
      status: 'Open Task',
      date: '20/Jan/2026'
    },
    {
      title: 'Gratuity Distribution',
      assignee: 'No Assignee',
      status: 'Open Task',
      date: '30/Jan/2026'
    }
  ],
  upcomingDeadlines: [
    {
      title: 'Performance Review of Q3',
      status: 'In-Progress',
      date: '2/Nov/2025'
    },
    {
      title: 'Recruitment for Store Managers',
      status: 'Completed',
      date: '3/Nov/2025'
    }
  ]
};