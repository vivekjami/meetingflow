'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', meetings: 12, engagement: 85 },
  { name: 'Tue', meetings: 19, engagement: 78 },
  { name: 'Wed', meetings: 15, engagement: 92 },
  { name: 'Thu', meetings: 22, engagement: 88 },
  { name: 'Fri', meetings: 18, engagement: 95 },
  { name: 'Sat', meetings: 8, engagement: 82 },
  { name: 'Sun', meetings: 5, engagement: 90 },
]

export function AnalyticsChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorMeetings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            className="text-xs"
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            className="text-xs"
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
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
            dataKey="engagement"
            stroke="#a855f7"
            fillOpacity={1}
            fill="url(#colorEngagement)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}