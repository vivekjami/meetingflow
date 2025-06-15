'use client'

import { Calendar, Clock, Users, MoreHorizontal } from 'lucide-react'
import { formatDate } from '@/lib/utils'

const meetings = [
  {
    id: '1',
    title: 'Q4 Planning Session',
    date: new Date('2024-01-15T10:00:00'),
    duration: '1h 30m',
    participants: 8,
    status: 'completed',
    engagement: 92
  },
  {
    id: '2',
    title: 'Team Standup',
    date: new Date('2024-01-15T09:00:00'),
    duration: '25m',
    participants: 5,
    status: 'completed',
    engagement: 88
  },
  {
    id: '3',
    title: 'Client Presentation',
    date: new Date('2024-01-14T14:00:00'),
    duration: '45m',
    participants: 12,
    status: 'completed',
    engagement: 95
  },
  {
    id: '4',
    title: 'Product Review',
    date: new Date('2024-01-14T11:00:00'),
    duration: '1h 15m',
    participants: 6,
    status: 'completed',
    engagement: 85
  }
]

export function RecentMeetings() {
  return (
    <div className="space-y-4">
      {meetings.map((meeting) => (
        <div
          key={meeting.id}
          className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h4 className="font-medium">{meeting.title}</h4>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {formatDate(meeting.date)}
                </span>
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {meeting.participants} participants
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-medium">{meeting.duration}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {meeting.engagement}% engagement
              </div>
            </div>
            <span className="status-completed">Completed</span>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}