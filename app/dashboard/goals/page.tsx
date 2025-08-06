"use client";

import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { setFilter } from "@/store/slices/goalsSlice";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChevronRight,
  ChevronDown,
  Filter,
  Plus,
  MoreHorizontal,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { departments, sampleUsers } from "@/constants/sampleData";
import { AddGoalModal } from "@/components/modals/AddGoalModal";
import { AddTaskModal } from "@/components/modals/AddTaskModal";
import { AddJobModal } from "@/components/modals/AddJobModal";
import CEOGoalView from "@/components/CEOGoalView";
import HODGoalView from "@/components/HODGoalView";

export default function GoalsPage() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    user?.role === "CEO" ? <CEOGoalView /> : user?.role === "HOD" ? <HODGoalView /> : <p>You are neither a CEO nor a HOD</p>
  );
}
