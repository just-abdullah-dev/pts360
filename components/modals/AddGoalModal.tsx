"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { addGoal } from "@/store/slices/goalsSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Department, departments, sampleUsers } from "@/constants/sampleData";
import { Paperclip } from "lucide-react";
import { set } from "react-hook-form";

enum GoalType {
  LongTerm = "Long-Term",
  ShortTerm = "Short-Term",
  Routine = "Routine",
}

interface AddGoalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  department?: Department;
}

export function AddGoalModal({
  open,
  onOpenChange,
  department = undefined,
}: AddGoalModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    department: department || undefined,
    type: GoalType.LongTerm,
    assignees: [] as string[],
    files: [] as File[],
  });
  console.log(department, formData.department);

  const goalTypes = ["Long-Term", "Short-Term", "Routine"];

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newGoal = {
      id: Date.now().toString(),
      title: formData.title,
      description: formData.description,
      label: "New Goal",
      assignees: formData.assignees,
      progress: 0,
      status: "In-Progress" as const,
      dueDate: formData.endDate,
      startDate: formData.startDate,
      createdAt: new Date().toISOString(),
      department: formData.department,
      type: formData.type,
      files: [],
      jobs: [],
    };

    // dispatch(addGoal(newGoal));
    onOpenChange(false);

    // Reset form
    setFormData({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      assignees: [],
      files: [],
      type: GoalType.LongTerm,
      department: department || undefined,
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, files: Array.from(e.target.files) });
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setFormData({
          title: "",
          description: "",
          startDate: "",
          endDate: "",
          department: department || undefined,
          type: GoalType.LongTerm,
          assignees: [] as string[],
          files: [] as File[],
        });
        onOpenChange(false);
      }}
    >
      <DialogContent className="sm:max-w-[800px] h-[90vh] overflow-auto border border-black dark:border-white">
        <DialogHeader>
          <DialogTitle>
            Create New Goal{" "}
            <span className=" float-right pr-4 text-sm font-normal">
              Date: {new Date().toLocaleDateString()}
            </span>
          </DialogTitle>
          <DialogDescription>
            Add a new goal for your team. You can assign multiple team members
            and attach files.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-2">
          {department === undefined && (
            <div className="space-y-2">
              <Label>Department</Label>
              <Select
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    department:
                      departments.find((d) => d.id === value) || undefined,
                  })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((department) => (
                    <SelectItem key={department.id} value={department.id}>
                      {department.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          {formData.department && (
            <>
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Enter goal title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Describe the goal objectives and requirements"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Goal Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select goal type" />
                  </SelectTrigger>
                  <SelectContent>
                    {goalTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startDate">Expected Start Date *</Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData({ ...formData, startDate: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endDate">Expected End Date *</Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData({ ...formData, endDate: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Assignees</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between"
                    >
                      {formData.assignees.length > 0
                        ? `${formData.assignees.length} selected`
                        : "Select team members"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[300px] max-h-[250px] overflow-auto">
                    <div className="flex flex-col space-y-2">
                      {sampleUsers.map((user) => (
                        <div
                          key={user.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={user.id}
                            checked={formData.assignees.includes(user.id)}
                            onCheckedChange={(checked) => {
                              setFormData((prev) => {
                                const newAssignees = checked
                                  ? [...prev.assignees, user.id]
                                  : prev.assignees.filter(
                                      (id) => id !== user.id
                                    );
                                return { ...prev, assignees: newAssignees };
                              });
                            }}
                          />
                          <label
                            htmlFor={user.id}
                            className="text-sm cursor-pointer"
                          >
                            {user.name} - {user.designation}
                          </label>
                        </div>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>

                {/* Show selected assignees under dropdown */}
                {formData.assignees.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.assignees.map((id) => {
                      const user = sampleUsers.find((u) => u.id === id);
                      return (
                        <span
                          key={id}
                          className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded-full"
                        >
                          {user?.name}
                        </span>
                      );
                    })}
                  </div>
                )}
                <p className="text-xs text-gray-500">
                  Multiple assignees can be selected
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="files">Attachments</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="files"
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("files")?.click()}
                  >
                    <Paperclip className="h-4 w-4 mr-2" />
                    Attach Files
                  </Button>
                  {formData.files.length > 0 && (
                    <span className="text-sm text-gray-500">
                      {formData.files.length} file(s) selected
                    </span>
                  )}
                </div>
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Create Goal
                </Button>
              </DialogFooter>
            </>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
