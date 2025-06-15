'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Calendar,
  BarChart3,
  Settings,
  Users,
  Video,
  Menu,
  X,
  Zap,
  TrendingUp,
  Clock,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Meetings', href: '/meetings', icon: Calendar },
  { name: 'Live Meeting', href: '/live', icon: Video },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Insights', href: '/insights', icon: TrendingUp },
  { name: 'Team', href: '/team', icon: Users },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile backdrop */}
      {!isCollapsed && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          'fixed left-0 top-0 z-50 h-full glass border-r border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 lg:relative lg:translate-x-0',
          isCollapsed ? '-translate-x-full lg:w-16' : 'w-64'
        )}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-gray-200/50 dark:border-gray-700/50">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-primary-500 to-purple-500">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gradient">MeetingFlow</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8 lg:hidden"
          >
            {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'nav-link group',
                  isActive && 'active',
                  isCollapsed && 'justify-center px-2'
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {!isCollapsed && (
                  <span className="truncate">{item.name}</span>
                )}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 hidden group-hover:block">
                    <div className="glass rounded-lg px-2 py-1 text-sm">
                      {item.name}
                    </div>
                  </div>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        {!isCollapsed && (
          <div className="p-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="glass-card p-3">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-primary-500" />
                <span className="text-sm font-medium">Usage This Month</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Meeting Hours</span>
                  <span className="font-medium">24.5h / 100h</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                  <div className="bg-gradient-to-r from-primary-500 to-purple-500 h-1.5 rounded-full w-1/4" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}