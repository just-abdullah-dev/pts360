"use client";
import React, { useEffect, useState } from "react";
import { toast } from "./use-toast";
import { customFetch } from "@/lib/utils";
import { Department } from "@/lib/types";

export default function useDepartments() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDepartments = async () => {
    setIsLoading(true);
    try {
      const res = await customFetch(
        `/User/companies/${process.env.NEXT_PUBLIC_COMPANY_ID}/departments`
      );
      const data = await res.json();

      if (data.success) {
        setDepartments(data.data.departments);
        localStorage.setItem("departments", JSON.stringify(data.data.departments));
      } else {
        toast({
          variant: "destructive",
          description:
            data.message ||
            "Something went wrong while fetching departments",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description: `Failed to fetch departments: ${error}`,
      });
      console.error("Failed to fetch departments:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Runs once on mount
  useEffect(() => {
    const stored = localStorage.getItem("departments");
    if (stored) {
      try {
        setDepartments(JSON.parse(stored));
      } catch {
        localStorage.removeItem("departments"); // corrupted data fallback
        fetchDepartments();
      }
    } else {
      fetchDepartments();
    }
  }, []);

  return { departments, isLoading, refetchDepartments: fetchDepartments };
}
