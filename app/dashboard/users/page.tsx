"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Filter, MoreVertical, Search } from "lucide-react";
import { useState } from "react";

// Mock data - replace with your actual data fetching
const users = [
  {
    id: 1,
    firstName: "Ahmed",
    lastName: "Khan",
    email: "ahmed.khan@example.com",
    role: "SYSTEM_ADMIN",
    department: "IT",
    departmentPosition: "CTO",
    location: "Karachi",
    permissions: [
      "create_goal",
      "assign_goal",
      "update_goal",
      "delete_goal",
      "review_goal",
      "close_goal",
      "create_job",
      "assign_job",
      "update_job",
      "delete_job",
      "create_task",
      "assign_task",
      "update_task",
      "delete_task",
    ],
  },
  {
    id: 2,
    firstName: "Fatima",
    lastName: "Ali",
    email: "fatima.ali@example.com",
    role: "CEO",
    department: "Executive",
    departmentPosition: "Chief Executive Officer",
    location: "Lahore",
    permissions: [
      "create_goal",
      "assign_goal",
      "update_goal",
      "review_goal",
      "close_goal",
      "create_job",
      "review_job",
      "close_job",
    ],
  },
  {
    id: 3,
    firstName: "Usman",
    lastName: "Malik",
    email: "usman.malik@example.com",
    role: "DIRECTOR",
    department: "Operations",
    departmentPosition: "Operations Director",
    location: "Islamabad",
    permissions: [
      "create_goal",
      "assign_goal",
      "update_goal",
      "review_goal",
      "create_task",
      "assign_task",
      "update_task",
      "review_task",
    ],
  },
  {
    id: 4,
    firstName: "Ayesha",
    lastName: "Raza",
    email: "ayesha.raza@example.com",
    role: "DepartmentHead",
    department: "Marketing",
    departmentPosition: "Head of Department",
    location: "Karachi",
    permissions: [
      "create_goal",
      "assign_goal",
      "update_goal",
      "create_task",
      "assign_task",
      "update_task",
    ],
  },
  {
    id: 5,
    firstName: "Bilal",
    lastName: "Ahmed",
    email: "bilal.ahmed@example.com",
    role: "MANAGER",
    department: "Sales",
    departmentPosition: "Sales Manager",
    location: "Lahore",
    permissions: [
      "assign_goal",
      "update_goal",
      "review_goal",
      "assign_task",
      "update_task",
      "review_task",
    ],
  },
  {
    id: 6,
    firstName: "Sana",
    lastName: "Mirza",
    email: "sana.mirza@example.com",
    role: "COORDINATOR",
    department: "HR",
    departmentPosition: "HR Coordinator",
    location: "Rawalpindi",
    permissions: [
      "assign_goal",
      "review_goal",
      "assign_task",
      "review_task",
    ],
  },
  {
    id: 7,
    firstName: "Kamran",
    lastName: "Shah",
    email: "kamran.shah@example.com",
    role: "ADMIN",
    department: "Finance",
    departmentPosition: "Finance Administrator",
    location: "Karachi",
    permissions: [
      "create_goal",
      "update_goal",
      "create_task",
      "update_task",
      "delete_task",
    ],
  },
  {
    id: 8,
    firstName: "Zara",
    lastName: "Qureshi",
    email: "zara.qureshi@example.com",
    role: "MANAGER",
    department: "Customer Support",
    departmentPosition: "Support Manager",
    location: "Islamabad",
    permissions: [
      "assign_goal",
      "review_goal",
      "close_goal",
      "assign_task",
      "review_task",
      "close_task",
    ],
  },
];

const roleOptions = [
  "SYSTEM_ADMIN",
  "CEO",
  "DIRECTOR",
  "ADMIN",
  "DepartmentHead",
  "MANAGER",
  "COORDINATOR",
];

export default function UsersPage() {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (userId: number) => {
    if (expandedRows.includes(userId)) {
      setExpandedRows(expandedRows.filter((id) => id !== userId));
    } else {
      setExpandedRows([...expandedRows, userId]);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search users..."
              className="pl-10 w-[200px] sm:w-[300px]"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Link href="/dashboard/users/new">
            <Button className="bg-orange-100 text-orange-700 border-orange-300 hover:bg-orange-400">Add New User</Button>
          </Link>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Full Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <>
                <TableRow key={user.id} className="cursor-pointer">
                  <TableCell
                    onClick={() => toggleRow(user.id)}
                    className="font-medium flexitems-center"
                  >
                    <ChevronDown
                      className={`h-5 w-5 ml-2 transition-transform ${
                        expandedRows.includes(user.id) ? "rotate-180" : ""
                      }`}
                    />
                  </TableCell>
                  <TableCell className="font-mediumflex items-cente">
                    {user?.firstName} {user.lastName}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.department}</TableCell>
                  <TableCell>{user.departmentPosition}</TableCell>
                  <TableCell>{"user.location"}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
                {expandedRows.includes(user.id) && (
                  <TableRow>
                    <TableCell colSpan={7} className=" p-4">
                      <div className="mb-4">
                        <h3 className="font-medium mb-2">Permissions</h3>
                        <div className="flex flex-wrap gap-2">
                          {user.permissions.map((permission) => (
                            <span
                              key={permission}
                              className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800"
                            >
                              {permission}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Edit Permissions
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
