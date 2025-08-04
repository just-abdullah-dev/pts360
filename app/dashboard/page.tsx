"use client";

import { useState } from "react";
import {
  Department,
  departments,
} from "@/constants/sampleData";
import Link from "next/link";

export default function DashboardPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("Month");


  return (
    <div className="p-6 space-y-2">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Cheezious
          </h1>
        </div>
        {/* <div className="flex items-center space-x-2">
          <Button
            variant={selectedPeriod === 'Month' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedPeriod('Month')}
            className={selectedPeriod === 'Month' ? 'bg-orange-500 hover:bg-orange-600' : ''}
          >
            Select Month or Quarter
          </Button>
          <Calendar className="h-4 w-4 text-gray-500" />
        </div> */}
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {departments.map((item: Department) => {
          return (
            <Link
              href={`/dashboard/departments/${item.slug}`}
              key={item.id}
              className="mb-4 p-6 border hover:border-orange-400 dark:hover:border-orange-600 border-gray-400 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
            >
              <h3 className="text-lg font-semibold group-hover:text-orange-500 duration-300">
                {item.title}
              </h3>
            </Link>
          );
        })}
      </div>
     
    </div>
  );
}
