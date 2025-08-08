"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { logout } from "@/store/slices/authSlice";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  Target,
  Users,
  ChevronDown,
  User,
  Settings,
  LogOut,
  X,
  ChevronLeft,
  ChevronRight,
  Building2,
  ListTodo,
} from "lucide-react";
import { Department, departments } from "@/constants/sampleData";

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
  isMobile: boolean;
  mobileOpen: boolean;
  onMobileToggle: (open: boolean) => void;
}

export function Sidebar({
  collapsed,
  onCollapse,
  isMobile,
  mobileOpen,
  onMobileToggle,
}: SidebarProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const navigationItems = [
    {
      href: "/dashboard",
      icon: LayoutDashboard,
      label: "Cheezious",
      roles: ["CEO"],
    },
    {
      href: "/dashboard/goals",
      icon: Target,
      label: "Goals",
      roles: ["CEO", "HOD"],
    },
    {
      href: "/dashboard/tasks",
      icon: ListTodo,
      label: "Tasks",
      roles: ["Manager", "Coordinator"],
    },
    {
      href: "/dashboard",
      icon: Building2,
      label: "Departments",
      roles: ["Admin"],
    },
    {
      href: "/dashboard/team",
      icon: Users,
      label: "Team",
      roles: ["HOD"],
    },
    { href: "/dashboard/users", icon: Users, label: "Users", roles: ["Admin"] },
  ];

  const handleLogout = () => {
    dispatch(logout());
    document.cookie =
      "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    document.cookie =
      "departmentSlug=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    window.location.href = "/login";
  };

  if (isMobile) {
    return (
      <>
        {/* Mobile Overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => onMobileToggle(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={cn(
            "fixed left-0 top-0 z-50 h-full w-64 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-bold text-gray-900 dark:text-white">
                PTS360
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onMobileToggle(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navigationItems.map((item) => {
                if (user && item.roles.includes(user.role)) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                          pathname === item.href
                            ? "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                            : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                        )}
                        onClick={() => onMobileToggle(false)}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </nav>

          {/* Mobile User Menu */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center space-x-3 mb-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300 truncate">
                  {user?.designation}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    userMenuOpen && "rotate-180"
                  )}
                />
              </Button>
            </div>

            {userMenuOpen && (
              <div className="space-y-1">
                <Link
                  href="/dashboard/profile"
                  className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg"
                  onClick={() => onMobileToggle(false)}
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg"
                  onClick={() => onMobileToggle(false)}
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg w-full text-left"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }

  // Desktop Sidebar
  return (
    <div
      className={cn(
        "hidden lg:flex lg:flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 overflow-y-auto py-14 relative ",
        collapsed ? "w-[76px]" : "w-64"
      )}
    >
      {/* Header */}
      <div
        className={`flex items-center justify-between p-3 fixed top-0 left-0 border-b bg-white  dark:bg-gray-900 border-gray-200 dark:border-gray-700 ${
          collapsed ? "w-[76px]" : "w-64"
        }`}
      >
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white">
              PTS360
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCollapse(!collapsed)}
          className="p-4"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul
          className={` gap-1 flex flex-col ${
            user?.role === "HOD" ? " flex-col-reverse" : "lg:flex-col"
          }`}
        >
          {navigationItems.map((item) => {
            if (user && item.roles.includes(user.role)) {
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-[6px] rounded-lg text-sm font-medium transition-colors line-clamp-1 overflow-hidden",
                      collapsed ? "justify-center" : "space-x-3",
                      pathname === item.href
                        ? "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    )}
                    title={collapsed ? item.label : undefined}
                  >
                    <item.icon className="h-5 w-5 inline-block" />
                    {!collapsed && <span>{item.label}</span>}
                  </Link>
                </li>
              );
            }
          })}
          {departments.map((item: Department) => {
            if (
              user?.role !== "CEO" &&
              (user?.role !== "HOD" || user.departmentSlug !== item.slug)
            ) {
              return null;
            }
            return (
              <Link
                href={`/dashboard/departments/${item.slug}`}
                key={item.id}
                className={cn(
                  "flex items-center px-3 py-[6px] rounded-lg text-sm font-medium transition-colors line-clamp-1 overflow-hidden",
                  collapsed ? "justify-center" : "space-x-3",
                  pathname.endsWith(item.slug)
                    ? "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                )}
                title={collapsed ? item.title : undefined}
              >
                <Building2 className="h-5 w-5 inline-block" />
                {!collapsed && <span>{item.title}</span>}
              </Link>
            );
          })}
        </ul>
      </nav>

      {/* Desktop User Menu */}
      <div
        className={` p-2 fixed bottom-0 left-0 border-b bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 ${
          collapsed ? "w-[76px]" : "w-64"
        }`}
      >
        {collapsed ? (
          <Avatar className="h-8 w-8 mx-auto">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
        ) : (
          <>
            <div className="flex items-center space-x-3 mb-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={user?.avatar} alt={user?.name} />
                <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {user?.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300 truncate">
                  {user?.designation}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    userMenuOpen && "rotate-180"
                  )}
                />
              </Button>
            </div>

            {userMenuOpen && (
              <div className="space-y-1">
                <Link
                  href="/dashboard/profile"
                  className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg"
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg"
                >
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded-lg w-full text-left"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
