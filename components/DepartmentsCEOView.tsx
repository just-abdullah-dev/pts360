import Link from "next/link";

import { departments } from "@/constants/sampleData";
import { ArrowUpRight, Building } from "lucide-react";

export function DepartmentsCEOView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {departments.map((item, idx) => {
        
        return (
          <Link
            href={`/dashboard/departments/${item.slug}`}
            key={item.id}
            className="relative group rounded-xl border border-gray-200 dark:border-gray-700 
                       bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 
                       p-4 shadow-md hover:shadow-lg transition-all duration-300
                       hover:border-orange-400 dark:hover:border-orange-600"
          >
            <div className="flex items-center gap-4">
              
              <h3 className="text-lg font-semibold group-hover:text-orange-500 duration-300">
                {item.title}
              </h3>
            </div>

            <p className="mt-3 text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
              {"Click to explore this department and its details."}
            </p>

            <span className="absolute top-2 transition-all group-hover:top-1 group-hover:right-1 right-2 text-sm text-gray-400 group-hover:text-orange-500">
                <div
                className="flex h-8 w-8 items-center justify-center rounded-full 
                              bg-orange-100 text-orange-600 group-hover:bg-orange-500 
                              group-hover:text-white transition-colors duration-300"
              >
                <ArrowUpRight className="h-5 w-5" />
              </div>
             
            </span>
          </Link>
        );
      })}
    </div>
  );
}
