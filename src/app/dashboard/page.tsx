'use client'

import { Calendar, Clock, Users, TrendingUp, BarChart3, Brain, Video, Plus } from 'lucide-react'
import { MetricCard } from '@/components/dashboard/MetricCard'
import { ParticipationChart } from '@/components/charts/ParticipationChart'
import { EngagementChart } from '@/components/charts/EngagementChart'
import { TrendChart } from '@/components/charts/TrendChart'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Avatar } from '@/components/ui/Avatar'

const recentMeetings = [
  {
    id: '1',
    title: 'Product Strategy Review',
    time: '2:00 PM - 3:00 PM',
    participants: 6,
    status: 'completed',
    engagement: 92,
  },
  {
    id: '2',
    title: 'Engineering Standup',
    time: '10:00 AM - 10:30 AM',
    participants: 8,
    status: 'completed',
    engagement: 78,
  },
  {
    id: '3',
    title: 'Client Presentation',
    time: '4:00 PM - 5:00 PM',
    participants: 4,
    status: 'live',
    engagement: 95,
  },
]

const upcomingMeetings = [
  {
    id: '4',
    title: 'Weekly Team Sync',
    time: 'Tomorrow, 9:00 AM',
    participants: 12,
  },
  {
    id: '5',
    title: 'Q4 Planning Session',
    time: 'Friday, 2:00 PM',
    participants: 8,
  },
]

const insights = [
  {
    type: 'success',
    title: 'Great Meeting Engagement',
    description: 'Your team had 15% higher engagement this week compared to last week.',
  },
  {
    type: 'warning',
    title: 'Unbalanced Participation',
    description: 'Consider encouraging quieter team members to participate more in discussions.',
  },
  {
    type: 'info',
    title: 'Meeting Duration Trend',
    description: 'Your meetings are averaging 8 minutes shorter than last month.',
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Welcome back! Here's what's happening with your meetings.
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Meeting
        </Button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Meetings"
          value="127"
          change={12}
          changeLabel="vs last month"
          icon={Calendar}
          color="blue"
        />
        <MetricCard
          title="Meeting Hours"
          value="84.5h"
          change={-8}
          changeLabel="vs last month"
          icon={Clock}
          color="purple"
        />
        <MetricCard
          title="Avg Engagement"
          value="87%"
          change={5}
          changeLabel="vs last month"
          icon={TrendingUp}
          color="green"
        />
        <MetricCard
          title="Team Members"
          value="24"
          change={15}
          changeLabel="vs last month"
          icon={Users}
          color="orange"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EngagementChart />
        <ParticipationChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Meetings */}
        <Card className="lg:col-span-2 glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Video className="h-5 w-5" />
              Recent Meetings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMeetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary-500 to-purple-500 flex items-center justify-center">
                        <Video className="h-5 w-5 text-white" />
                      </div>
                      {meeting.status === 'live' && (
                        <div className="absolute -top-1 -right-1">
                          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-gray-100">
                        {meeting.title}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {meeting.time} • {meeting.participants} participants
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={meeting.status === 'live' ? 'destructive' : 'success'}
                    >
                      {meeting.status === 'live' ? 'Live' : 'Completed'}
                    </Badge>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {meeting.engagement}%
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Engagement
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Meetings & Insights */}
        <div className="space-y-6">
          {/* Upcoming Meetings */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Upcoming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingMeetings.map((meeting) => (
                  <div
                    key={meeting.id}
                    className="p-3 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                      {meeting.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {meeting.time}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Users className="h-3 w-3 text-gray-400" />
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {meeting.participants} participants
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {insights.map((insight, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start gap-2">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 ${
                          insight.type === 'success'
                            ? 'bg-green-500'
                            : insight.type === 'warning'
                            ? 'bg-yellow-500'
                            : 'bg-blue-500'
                        }`}
                      />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                          {insight.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {insight.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Trend Chart */}
      <TrendChart />
    </div>
  )
}