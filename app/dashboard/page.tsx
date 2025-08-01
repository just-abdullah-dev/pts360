'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Calendar, Clock, User, MessageSquare } from 'lucide-react';
import { dashboardStats, sampleUsers } from '@/constants/sampleData';

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('Month');

  const myTasksData = [
    { name: 'Open Tasks', value: dashboardStats.myTasks.open, color: '#FB923C' },
    { name: 'In Progress', value: dashboardStats.myTasks.inProgress, color: '#F97316' },
    { name: 'Completed', value: dashboardStats.myTasks.completed, color: '#EA580C' },
  ];

  const teamProgressData = [
    { name: 'Asifa', open: 8, inProgress: 8, completed: 4 },
    { name: 'Javed', open: 12, inProgress: 10, completed: 8 },
    { name: 'Khurram', open: 16, inProgress: 10, completed: 10 },
    { name: 'Nabeel', open: 20, inProgress: 24, completed: 10 },
  ];

  const monthlyProgressData = [
    { month: 'Jun', completed: 17, overdue: 6 },
    { month: 'July', completed: 94, overdue: 6 },
    { month: 'Aug', completed: 38, overdue: 35 },
    { month: 'Sept', completed: 55, overdue: 45 },
  ];

  const completedTaskProgressData = [
    { month: 'May', Asifa: 18, Javed: 15, Nabeel: 20 },
    { month: 'June', Asifa: 12, Javed: 25, Nabeel: 30 },
    { month: 'July', Asifa: 22, Javed: 18, Nabeel: 35 },
    { month: 'Aug', Asifa: 28, Javed: 20, Nabeel: 40 },
    { month: 'Sept', Asifa: 32, Javed: 30, Nabeel: 50 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Welcome back! Here's what's happening.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant={selectedPeriod === 'Month' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedPeriod('Month')}
            className={selectedPeriod === 'Month' ? 'bg-orange-500 hover:bg-orange-600' : ''}
          >
            Select Month or Quarter
          </Button>
          <Calendar className="h-4 w-4 text-gray-500" />
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="team-progress" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="team-progress">Team's Progress</TabsTrigger>
          <TabsTrigger value="my-progress">My Progress</TabsTrigger>
        </TabsList>

        {/* Team's Progress Tab */}
        <TabsContent value="team-progress" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Summary Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative w-32 h-32 mx-auto">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { value: dashboardStats.teamTasks.open, color: '#FB923C' },
                          { value: dashboardStats.teamTasks.inProgress, color: '#F97316' },
                          { value: dashboardStats.teamTasks.completed, color: '#EA580C' },
                        ]}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={60}
                        dataKey="value"
                      >
                        {[
                          { value: dashboardStats.teamTasks.open, color: '#FB923C' },
                          { value: dashboardStats.teamTasks.inProgress, color: '#F97316' },
                          { value: dashboardStats.teamTasks.completed, color: '#EA580C' },
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {dashboardStats.teamTasks.total}
                    </span>
                    <span className="text-sm text-gray-500">Total</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                      <span>Open Tasks</span>
                    </div>
                    <span>{dashboardStats.teamTasks.open}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      <span>In-Progress</span>
                    </div>
                    <span>{dashboardStats.teamTasks.inProgress}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                      <span>Completed</span>
                    </div>
                    <span>{dashboardStats.teamTasks.completed}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Progress Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Team Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teamProgressData.map((member) => (
                    <div key={member.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{member.name}</span>
                        <span className="text-xs text-gray-500">{member.open + member.inProgress + member.completed}</span>
                      </div>
                      <div className="flex space-x-1 h-4">
                        <div 
                          className="bg-orange-400 rounded-l"
                          style={{ width: `${(member.open / 50) * 100}%` }}
                        ></div>
                        <div 
                          className="bg-orange-500"
                          style={{ width: `${(member.inProgress / 50) * 100}%` }}
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
                        className={deadline.status === 'Completed' ? 'text-green-600 border-green-600' : 'text-orange-600 border-orange-600'}
                      >
                        {deadline.status}
                      </Badge>
                      <span className=''>{deadline.date}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Over-Due Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Over-Due Tasks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Recruitment for Crew Members for KPK Stores</h4>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="h-3 w-3" />
                      <span>Assigned to: Nabeel</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        In-Progress
                      </Badge>
                      <span className="text-gray-500">13/Oct/2025</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Policy Manual for Crew Members</h4>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="h-3 w-3" />
                      <span>Assigned to: Asifa</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        In-Progress
                      </Badge>
                      <span className="text-gray-500">20/Oct/2025</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-gray-500 border-gray-300">
                  No more tasks
                </Button>
              </CardContent>
            </Card>

            {/* Completed Task Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Completed Task Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={completedTaskProgressData}>
                      <XAxis dataKey="month" />
                      <Line type="monotone" dataKey="Asifa" stroke="#F59E0B" strokeWidth={2} />
                      <Line type="monotone" dataKey="Javed" stroke="#F97316" strokeWidth={2} />
                      <Line type="monotone" dataKey="Nabeel" stroke="#EA580C" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center space-x-4 text-xs mt-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Asifa</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Javed</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span>Nabeel</span>
                  </div>
                </div>
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
                    <h4 className="font-medium text-sm">Recruitment for Crew Members for KPK Stores</h4>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="h-3 w-3" />
                      <span>Assigned to: Nabeel</span>
                      <Badge variant="outline" className="text-red-600 border-red-600 ml-2">
                        From: Tahir Javed
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        In-Review
                      </Badge>
                      <span className="text-gray-500">13/Oct/2025</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">New Travel Allowance Policy</h4>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="h-3 w-3" />
                      <span>Assigned to: Asifa</span>
                      <MessageSquare className="h-3 w-3 ml-2" />
                      <span>No Comments</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Closed
                      </Badge>
                      <span className="text-gray-500">25/Oct/2025</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* My Progress Tab */}
        <TabsContent value="my-progress" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* My Tasks Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">My Tasks Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative w-32 h-32 mx-auto">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={myTasksData}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={60}
                        dataKey="value"
                      >
                        {myTasksData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {dashboardStats.myTasks.total}
                    </span>
                    <span className="text-sm text-gray-500">Total</span>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                      <span>Open Tasks</span>
                    </div>
                    <span>{dashboardStats.myTasks.open}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                      <span>In-Progress</span>
                    </div>
                    <span>{dashboardStats.myTasks.inProgress}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-orange-600"></div>
                      <span>Completed</span>
                    </div>
                    <span>{dashboardStats.myTasks.completed}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* New Tasks Added */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">New Tasks Added</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {dashboardStats.newTasks.map((task, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-medium text-sm">{task.title}</h4>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="h-3 w-3" />
                      <span>{task.assignee}</span>
                      <Badge variant="outline" className="text-green-600 border-green-600 ml-2">
                        {task.status}
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-500">{task.date}</div>
                  </div>
                ))}
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
                        className={deadline.status === 'Completed' ? 'text-green-600 border-green-600' : 'text-orange-600 border-orange-600'}
                      >
                        {deadline.status}
                      </Badge>
                      <span>{deadline.date}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Bottom Row - My Progress */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* My Over-Due Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">My Over-Due Tasks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Recruitment for Marketing Manager in North Region</h4>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="h-3 w-3" />
                      <span>Assigned to: Me</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        In-Progress
                      </Badge>
                      <span className="text-gray-500">13/Oct/2025</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">HR Metrics Comparison with 2024</h4>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="h-3 w-3" />
                      <span>Assigned to: Me</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        In-Progress
                      </Badge>
                      <span className="text-gray-500">20/Oct/2025</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full text-gray-500 border-gray-300">
                  No more tasks
                </Button>
              </CardContent>
            </Card>

            {/* My Task Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">My Task Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyProgressData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Bar dataKey="completed" fill="#F97316" />
                      <Bar dataKey="overdue" fill="#FB923C" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center space-x-4 text-xs mt-2">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Completed</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span>Overdue</span>
                  </div>
                </div>
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
                    <h4 className="font-medium text-sm">Recruitment for Crew Members for KPK Stores</h4>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="h-3 w-3" />
                      <span>Assigned to: Nabeel</span>
                      <Badge variant="outline" className="text-red-600 border-red-600 ml-2">
                        From: Tahir Javed
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        In-Review
                      </Badge>
                      <span className="text-gray-500">13/Oct/2025</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">New Travel Allowance Policy</h4>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="h-3 w-3" />
                      <span>Assigned to: Asifa</span>
                      <MessageSquare className="h-3 w-3 ml-2" />
                      <span>No Comments</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Closed
                      </Badge>
                      <span className="text-gray-500">25/Oct/2025</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Recruitment for Crew Members for Punjab Stores</h4>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="h-3 w-3" />
                      <span>Assigned to: Javed</span>
                      <Badge variant="outline" className="text-red-600 border-red-600 ml-2">
                        From: Omer
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <Badge variant="outline" className="text-orange-600 border-orange-600">
                        In-Review
                      </Badge>
                      <span className="text-gray-500">23/Oct/2025</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}