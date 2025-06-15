'use client'

import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  TrendingUp, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Activity
} from 'lucide-react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { MetricCard } from '@/components/dashboard/MetricCard'
import { RecentMeetings } from '@/components/dashboard/RecentMeetings'
import { AnalyticsChart } from '@/components/dashboard/AnalyticsChart'
import { TeamActivity } from '@/components/dashboard/TeamActivity'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-3xl font-bold font-display">Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Welcome back! Here's what's happening with your meetings.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="mt-4 sm:mt-0">
            <Button className="group">
              <Plus className="w-4 h-4 mr-2" />
              New Meeting
            </Button>
          </motion.div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <MetricCard
              title="Total Meetings"
              value="127"
              change="+12%"
              trend="up"
              icon={Calendar}
              description="This month"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <MetricCard
              title="Meeting Hours"
              value="89.5h"
              change="+8%"
              trend="up"
              icon={Clock}
              description="This month"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <MetricCard
              title="Avg Engagement"
              value="87%"
              change="+5%"
              trend="up"
              icon={TrendingUp}
              description="Last 30 days"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <MetricCard
              title="Active Users"
              value="24"
              change="-2%"
              trend="down"
              icon={Users}
              description="This week"
            />
          </motion.div>
        </motion.div>

        {/* Charts Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold">Meeting Analytics</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Weekly meeting trends
                  </p>
                </div>
                <BarChart3 className="w-5 h-5 text-gray-400" />
              </div>
              <AnalyticsChart />
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold">Team Activity</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Recent team interactions
                  </p>
                </div>
                <Activity className="w-5 h-5 text-gray-400" />
              </div>
              <TeamActivity />
            </Card>
          </motion.div>
        </motion.div>

        {/* Recent Meetings */}
        <motion.div variants={fadeInUp}>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold">Recent Meetings</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Your latest meeting sessions
                </p>
              </div>
              <Button variant="ghost" size="sm">
                View all
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <RecentMeetings />
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}