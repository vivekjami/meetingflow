'use client'

import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Globe, 
  MessageSquare, 
  Mic, 
  Play, 
  Shield, 
  Star, 
  TrendingUp, 
  Users, 
  Zap 
} from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-purple-600/10 dark:from-primary-400/5 dark:to-purple-400/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Meeting Intelligence
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold font-display mb-8 text-balance"
            >
              Transform Your
              <span className="gradient-text block">Meetings Forever</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-balance"
            >
              Advanced AI analytics that turn every meeting into actionable insights. 
              Real-time transcription, sentiment analysis, and productivity optimization.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/auth/signup">
                <Button size="lg" className="group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="secondary" size="lg" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-16 flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400"
            >
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                14-day free trial
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                No credit card required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Cancel anytime
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold font-display mb-6"
            >
              Everything you need for
              <span className="gradient-text block">smarter meetings</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Comprehensive meeting intelligence powered by cutting-edge AI technology
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid md:grid-cols-4 gap-8 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="glass-card p-8">
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold font-display mb-6"
            >
              Simple, transparent
              <span className="gradient-text block">pricing</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300"
            >
              Choose the plan that fits your team's needs
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`p-8 h-full relative ${plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold gradient-text mb-2">{plan.price}</div>
                    <div className="text-gray-600 dark:text-gray-300">{plan.period}</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? 'primary' : 'secondary'} 
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold font-display mb-6"
            >
              Ready to transform
              <span className="gradient-text block">your meetings?</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Join thousands of teams already using MeetingFlow to boost productivity
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link href="/auth/signup">
                <Button size="lg" className="group">
                  Start Your Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    icon: Mic,
    title: 'Real-time Transcription',
    description: 'Accurate speech-to-text with speaker identification and live captions during meetings.'
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Advanced analytics that identify key decisions, action items, and meeting effectiveness.'
  },
  {
    icon: BarChart3,
    title: 'Participation Analytics',
    description: 'Track speaking time, engagement levels, and team dynamics with detailed visualizations.'
  },
  {
    icon: TrendingUp,
    title: 'Sentiment Analysis',
    description: 'Understand meeting tone and emotional context to improve team communication.'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'AI-optimized meeting scheduling based on team availability and productivity patterns.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.'
  }
]

const stats = [
  { value: '10M+', label: 'Minutes Analyzed' },
  { value: '50K+', label: 'Teams Served' },
  { value: '95%', label: 'Accuracy Rate' },
  { value: '40%', label: 'Time Saved' }
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '$9',
    period: 'per user/month',
    popular: false,
    cta: 'Start Free Trial',
    features: [
      'Up to 10 hours/month',
      'Real-time transcription',
      'Basic analytics',
      'Email support',
      '7-day history'
    ]
  },
  {
    name: 'Professional',
    price: '$29',
    period: 'per user/month',
    popular: true,
    cta: 'Start Free Trial',
    features: [
      'Unlimited meetings',
      'Advanced AI insights',
      'Team analytics',
      'Priority support',
      'Unlimited history',
      'Custom integrations'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact sales',
    popular: false,
    cta: 'Contact Sales',
    features: [
      'Everything in Pro',
      'Custom AI models',
      'Advanced security',
      'Dedicated support',
      'On-premise deployment',
      'SLA guarantee'
    ]
  }
]