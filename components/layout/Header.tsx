'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { useAppSelector } from '@/store/hooks';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  Search, 
  Bell, 
  Sun, 
  Moon,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  onMobileMenuToggle: () => void;
  isMobile: boolean;
}

export function Header({ onMobileMenuToggle, isMobile }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { user } = useAppSelector((state) => state.auth);
  const { unreadCount } = useAppSelector((state) => state.notifications);

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 lg:px-6 py-[10px] flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {isMobile && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onMobileMenuToggle}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}
        
        {!isMobile && user && (
          <div className="hidden lg:flex items-center space-x-2">
            <div>
              <h1 className=" font-semibold text-gray-900 dark:text-white">
                Hello {user?.firstName}!
              </h1>
              <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-300">
                <span>{user?.position?.title}</span>
                <span>•</span>
                <MapPin className="h-3 w-3" />
                <span>{"user.location"}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-3">
        {/* Search */}
        {isMobile ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="h-5 w-5" />
          </Button>
        ) : (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search..."
              className="pl-10 w-64 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            />
          </div>
        )}

        {/* Notifications */}
        <Link href={"/dashboard/notifications"} className="relative p-[6px]">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-orange-500 hover:bg-orange-600 p-0">
              {unreadCount}
            </Badge>
          )}
        </Link>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>

        {/* User Avatar (Desktop) */}
        {/* {!isMobile && user && (
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.userName} alt={user?.firstName} />
            <AvatarFallback>{user?.firstName?.charAt(0)}</AvatarFallback>
          </Avatar>
        )} */}
      </div>

      {/* Mobile Search Bar */}
      {isMobile && searchOpen && (
        <div className="absolute top-16 left-0 right-0 p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search..."
              className="pl-10 w-full"
              autoFocus
              onBlur={() => setSearchOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}