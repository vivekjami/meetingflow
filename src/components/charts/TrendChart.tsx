'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

const data = [
  { date: 'Jan', meetings: 24, hours: 48 },
  { date: 'Feb', meetings: 32, hours: 64 },
  { date: 'Mar', meetings: 28, hours: 56 },
  { date: 'Apr', meetings: 45, hours: 90 },
  { date: 'May', meetings: 38, hours: 76 },
  { date: 'Jun', meetings: 52, hours: 104 },
]

export function TrendChart() {
  return (
    <Card className="chart-container">
      <CardHeader>
        <CardTitle>Meeting Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorMeetings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="date"
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Area
                type="monotone"
                dataKey="meetings"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorMeetings)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="hours"
                stroke="#8b5cf6"
                fillOpacity={1}
                fill="url(#colorHours)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}