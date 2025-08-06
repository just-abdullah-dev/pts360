"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Trash2 } from "lucide-react";
import { Department, departments } from "@/constants/sampleData";

export function DepartmentAdminView() {
  const [openForm, setOpenForm] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ title: "", slug: "" });
  const [isEdit, setIsEdit] = useState(false);

  const handleCreate = () => {
    setIsEdit(false);
    setFormData({ title: "", slug: "" });
    setOpenForm(true);
  };

  const handleEdit = (id: string) => {
    const dept = departments.find((d) => d.id === id);
    if (dept) {
      setIsEdit(true);
      setFormData({ title: dept.title, slug: dept.slug });
      setSelectedId(id);
      setOpenForm(true);
    }
  };

  const handleDelete = (id: string) => {
    setSelectedId(id);
    setOpenDelete(true);
  };

  const submitForm = () => {
    if (isEdit && selectedId) {
      console.log("Edit department:", selectedId, formData);
      // call your PUT/PATCH API here
    } else {
      console.log("Create new department:", formData);
      // call your POST API here
    }
    setOpenForm(false);
  };

  const confirmDelete = () => {
    if (selectedId) {
      console.log("Deleting department:", selectedId);
      // call your DELETE API here
    }
    setOpenDelete(false);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Departments</h2>
        <Button
          onClick={handleCreate}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          Create New Department
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Title</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {departments.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">
                <Link
                  href={`/dashboard/departments/${item.slug}`}
                  className="hover:text-orange-500 transition-colors"
                >
                  {item.title}
                </Link>
              </TableCell>
              <TableCell>{item.slug}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(item.id)}
                  >
                    <Pencil className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(item.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Create / Edit Modal */}
      <Dialog open={openForm} onOpenChange={setOpenForm}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEdit ? "Edit Department" : "Create Department"}</DialogTitle>
            <DialogDescription>
              {isEdit
                ? "Update the details for this department."
                : "Enter details for the new department."}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2">
            <div>
              <Label htmlFor="title">Department Name</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="e.g. Human Resources"
              />
            </div>
            <div>
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, slug: e.target.value }))
                }
                placeholder="e.g. hr"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={submitForm} className="bg-orange-500 text-white">
              {isEdit ? "Save Changes" : "Create"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={openDelete} onOpenChange={setOpenDelete}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this department? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenDelete(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
