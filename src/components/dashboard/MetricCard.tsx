'use client'

import { LucideIcon } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

interface MetricCardProps {
  title: string
  value: string | number
  change?: number
  changeLabel?: string
  icon: LucideIcon
  color?: 'blue' | 'purple' | 'green' | 'orange' | 'red'
  className?: string
}

const colorClasses = {
  blue: 'text-blue-600 bg-blue-100 dark:bg-blue-900/20',
  purple: 'text-purple-600 bg-purple-100 dark:bg-purple-900/20',
  green: 'text-green-600 bg-green-100 dark:bg-green-900/20',
  orange: 'text-orange-600 bg-orange-100 dark:bg-orange-900/20',
  red: 'text-red-600 bg-red-100 dark:bg-red-900/20',
}

export function MetricCard({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
  color = 'blue',
  className,
}: MetricCardProps) {
  return (
    <Card className={cn('metric-card', className)}>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {value}
          </p>
          {change !== undefined && (
            <div className="flex items-center gap-1">
              <span
                className={cn(
                  'text-xs font-medium',
                  change >= 0 ? 'text-green-600' : 'text-red-600'
                )}
              >
                {change >= 0 ? '+' : ''}{change}%
              </span>
              {changeLabel && (
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {changeLabel}
                </span>
              )}
            </div>
          )}
        </div>
        <div className={cn('p-3 rounded-lg', colorClasses[color])}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </Card>
  )
}