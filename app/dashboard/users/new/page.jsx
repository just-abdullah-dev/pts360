"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";

export default function NewUserPage() {
  // Mock data - replace with your actual data
  const departments = ["IT", "HR", "Finance", "Marketing"];
  const locations = ["Karachi", "Lahore", "Islamabad", "Rawalpindi"];
  const positions = ["Manager", "Developer", "Designer", "Analyst"];
  const permissionGroups = [
    {
      name: "Goal Management",
      permissions: [
        "create_goal",
        "assign_goal",
        "update_goal",
        "delete_goal",
        "review_goal",
        "close_goal",
      ],
    },
    {
      name: "Task Management",
      permissions: [
        "create_task",
        "assign_task",
        "update_task",
        "delete_task",
        "review_task",
        "close_task",
      ],
    },
  ];

  const individualPermissions = [
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
    "review_job",
    "close_job",
    "create_task",
    "assign_task",
    "update_task",
    "delete_task",
    "review_task",
    "close_task",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Create New User</h1>
        <Link href="/dashboard/users">
          <Button variant="outline">Back to Users</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="space-y4 grid grid-cols-1 md:grid-cols-2  gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="Enter first name" />
          </div>

          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Enter last name" />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter email" />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter password" />
          </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <PhoneInput
            id="phone"
            defaultCountry="PK"
            placeholder="+92 300 1234567"
          />
        </div>
        </div>
        <div className="space-y-2">
          <div>
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" placeholder="Enter address" />
          </div>

          <div>
            <Label>Department</Label>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Add Department</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Department</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2 py-4">
                    <Input placeholder="Department name" />
                    <Button>Save</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div>
            <Label>Location</Label>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Add Location</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Location</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2 py-4">
                    <Input placeholder="Location name" />
                    <Button>Save</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div>
            <Label>Department Position</Label>
            <div className="flex gap-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select position" />
                </SelectTrigger>
                <SelectContent>
                  {positions.map((pos) => (
                    <SelectItem key={pos} value={pos}>
                      {pos}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Add Position</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Position</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2 py-4">
                    <Input placeholder="Position name" />
                    <Button>Save</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Permissions</h2>

        <div className="mb-6">
          <h3 className="font-medium mb-2">Permission Groups</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {permissionGroups.map((group) => (
              <div key={group.name} className="border rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <input type="checkbox" id={`group-${group.name}`} />
                  <label
                    htmlFor={`group-${group.name}`}
                    className="font-medium"
                  >
                    {group.name}
                  </label>
                </div>
                <div className="pl-6 space-y-1">
                  {group.permissions.map((perm) => (
                    <div key={perm} className="flex items-center space-x-2">
                      <input type="checkbox" id={`perm-${perm}`} />
                      <label htmlFor={`perm-${perm}`} className="text-sm">
                        {perm}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-2">Individual Permissions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {individualPermissions.map((perm) => (
              <div key={perm} className="flex items-center space-x-2">
                <input type="checkbox" id={`perm-${perm}`} />
                <label htmlFor={`perm-${perm}`}>{perm}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Button>Create User</Button>
      </div>
    </div>
  );
}
