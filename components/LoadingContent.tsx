"use client";
import React from "react";

export default function LoadingContent() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto space-y-6 animate-pulse">
        {/* Header skeleton */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="h-8 w-48 bg-gray-300/50 dark:bg-gray-700 rounded"></div>
          <div className="flex gap-2 w-full sm:w-auto">
            <div className="h-10 w-24 bg-gray-300/50 dark:bg-gray-700 rounded"></div>
            <div className="h-10 w-24 bg-gray-300/50 dark:bg-gray-700 rounded"></div>
          </div>
        </div>

        {/* Search bar skeleton */}
        <div className="h-12 w-full bg-gray-300/50 dark:bg-gray-700 rounded"></div>

        {/* Card grid skeleton */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 space-y-3"
            >
              <div className="h-40 bg-gray-300/50 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-300/50 dark:bg-gray-700 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-300/50 dark:bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>

        {/* Content lines skeleton */}
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-4 w-full bg-gray-300/50 dark:bg-gray-700 rounded"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
