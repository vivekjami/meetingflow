'use client'

import { MessageSquare, Calendar, TrendingUp, Users } from 'lucide-react'

const activities = [
  {
    id: '1',
    type: 'meeting',
    user: 'Sarah Chen',
    action: 'completed Q4 Planning Session',
    time: '2 hours ago',
    icon: Calendar,
    color: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: '2',
    type: 'insight',
    user: 'AI Assistant',
    action: 'generated new insights for Team Standup',
    time: '3 hours ago',
    icon: TrendingUp,
    color: 'text-purple-600 dark:text-purple-400'
  },
  {
    id: '3',
    type: 'comment',
    user: 'Mike Johnson',
    action: 'added comments to Client Presentation',
    time: '5 hours ago',
    icon: MessageSquare,
    color: 'text-green-600 dark:text-green-400'
  },
  {
    id: '4',
    type: 'team',
    user: 'Emma Wilson',
    action: 'joined the team',
    time: '1 day ago',
    icon: Users,
    color: 'text-orange-600 dark:text-orange-400'
  }
]

export function TeamActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-3">
          <div className={`p-2 rounded-lg bg-gray-100 dark:bg-gray-800 ${activity.color}`}>
            <activity.icon className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm">
              <span className="font-medium">{activity.user}</span>{' '}
              <span className="text-gray-600 dark:text-gray-400">{activity.action}</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  )
}