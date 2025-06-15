export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'admin' | 'member' | 'viewer'
  createdAt: Date
  lastActive: Date
}

export interface Team {
  id: string
  name: string
  description?: string
  members: User[]
  ownerId: string
  createdAt: Date
}

export interface Meeting {
  id: string
  title: string
  description?: string
  teamId: string
  createdBy: string
  participants: User[]
  startTime: Date
  endTime?: Date
  duration?: number
  status: 'scheduled' | 'live' | 'completed' | 'cancelled'
  recordingUrl?: string
  transcriptionId?: string
  analyticsId?: string
  createdAt: Date
}

export interface Transcription {
  id: string
  meetingId: string
  content: string
  speakerName: string
  speakerId?: string
  timestamp: number
  confidence: number
  createdAt: Date
}

export interface MeetingAnalytics {
  id: string
  meetingId: string
  participationData: ParticipationData[]
  sentimentData: SentimentData
  engagementScore: number
  effectivenessScore: number
  insights: Insight[]
  actionItems: ActionItem[]
  keyDecisions: Decision[]
  createdAt: Date
}

export interface ParticipationData {
  speakerId: string
  speakerName: string
  speakingTime: number
  wordCount: number
  participationPercentage: number
  interruptionCount: number
  questionCount: number
}

export interface SentimentData {
  overall: number
  positive: number
  neutral: number
  negative: number
  timeline: SentimentPoint[]
}

export interface SentimentPoint {
  timestamp: number
  sentiment: number
  speaker: string
}

export interface Insight {
  id: string
  type: 'warning' | 'suggestion' | 'success' | 'info'
  title: string
  description: string
  priority: 'high' | 'medium' | 'low'
  category: 'participation' | 'sentiment' | 'effectiveness' | 'engagement'
}

export interface ActionItem {
  id: string
  text: string
  assignee?: string
  priority: 'high' | 'medium' | 'low'
  dueDate?: Date
  completed: boolean
  extractedAt: number
}

export interface Decision {
  id: string
  text: string
  decisionMaker: string
  confidence: number
  extractedAt: number
}

export interface DashboardMetrics {
  totalMeetings: number
  totalHours: number
  averageEngagement: number
  teamProductivity: number
  weeklyTrend: number
  monthlyTrend: number
}

export interface ChartData {
  name: string
  value: number
  color?: string
}

export interface TimeSeriesData {
  date: string
  value: number
  category?: string
}