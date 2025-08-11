import Link from "next/link";

import { departments, sampleUsers } from "@/constants/sampleData";
import { ArrowUpRight, Building } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { it } from "node:test";

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
            <div className="grid items-start grid-cols-4 gap-4">
              <h3 className="text-[16px] col-span-3 font-semibold group-hover:text-orange-500 duration-300 line-clamp-1">
                {item.title}
              </h3>
              <Image
                src={`/${item.slug}.png`}
                alt="Department Icon"
                width={60}
                height={60}
                className=" col-span-1 p-[3px] bg-white rounded-lg"
              />
            </div>

            <div className=" flex gap-4 items-center">
              <Avatar
                key={"hod image"}
                className={`h-8 w-8 border-gray-200 dark:border-gray-600 transition-colors group-hover:border-orange-400 border-[1px] `}
              >
                <AvatarImage src={item?.hod?.avatar} alt={item?.hod?.name} />
                <AvatarFallback className="text-[10px]">
                  {item?.hod?.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <h3 className=" font-semibold text-sm">{item?.hod?.name}</h3>
            </div>
            {/* <div className="flex -space-x-3 mt-3">
              {sampleUsers.slice(0 + idx, 6 + idx).map((item, index) => (
                <Avatar
                  key={index}
                  className={`h-8 w-8 border-gray-200 dark:border-gray-600 transition-colors group-hover:border-orange-400 border-[1px] `}
                >
                  <AvatarImage src={item?.avatar} alt={item?.name} />
                  <AvatarFallback className="text-[10px]">
                    {item?.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              ))}
              <Avatar
                key={"last"}
                className="h-8 w-8 border-gray-200 dark:border-gray-600 transition-colors group-hover:border-orange-400 border-[1px]"
              >
                <AvatarImage src={""} alt={"..."} />
                <AvatarFallback className="text-[16px]">{"..."}</AvatarFallback>
              </Avatar>
            </div> */}

            {/* <span className="absolute top-2 transition-all group-hover:top-1 group-hover:right-1 right-2 text-sm text-gray-400 group-hover:text-orange-500">
                <div
                className="flex h-8 w-8 items-center justify-center rounded-full 
                              bg-orange-100 text-orange-600 group-hover:bg-orange-500 
                              group-hover:text-white transition-colors duration-300"
              >
                <ArrowUpRight className="h-5 w-5" />
              </div>
             
            </span> */}
          </Link>
        );
      })}
    </div>
  );
}
