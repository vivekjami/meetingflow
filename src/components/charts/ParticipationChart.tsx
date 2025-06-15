'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

interface ParticipationData {
  name: string
  value: number
  color: string
}

const data: ParticipationData[] = [
  { name: 'Sarah Chen', value: 35, color: '#3b82f6' },
  { name: 'Mike Johnson', value: 28, color: '#8b5cf6' },
  { name: 'Emily Davis', value: 22, color: '#06b6d4' },
  { name: 'Alex Kim', value: 15, color: '#10b981' },
]

export function ParticipationChart() {
  return (
    <Card className="chart-container">
      <CardHeader>
        <CardTitle>Speaking Time Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`${value}%`, 'Speaking Time']}
                labelStyle={{ color: '#374151' }}
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                formatter={(value) => (
                  <span className="text-sm text-gray-600 dark:text-gray-400">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}