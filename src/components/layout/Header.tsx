'use client'

import { useState } from 'react'
import { Bell, Search, Moon, Sun, Menu } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Avatar } from '@/components/ui/Avatar'
import { Badge } from '@/components/ui/Badge'

export function Header() {
  const [isDark, setIsDark] = useState(false)
  const [notifications] = useState(3)

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="h-16 glass border-b border-gray-200/50 dark:border-gray-700/50 px-4 lg:px-6">
      <div className="flex h-full items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search meetings, insights..."
              className="w-80 pl-10"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>

          {/* Notifications */}
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
            >
              <Bell className="h-4 w-4" />
            </Button>
            {notifications > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
              >
                {notifications}
              </Badge>
            )}
          </div>

          {/* User menu */}
          <div className="flex items-center gap-3 pl-3 border-l border-gray-200 dark:border-gray-700">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Sarah Chen
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Product Manager
              </p>
            </div>
            <Avatar
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150"
              alt="Sarah Chen"
              fallback="SC"
            />
          </div>
        </div>
      </div>
    </header>
  )
}