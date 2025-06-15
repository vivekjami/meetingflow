'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Brain,
  Clock,
  Users,
  Zap,
  CheckCircle,
  Star,
  Play,
  TrendingUp,
  Shield,
  Globe,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Advanced natural language processing analyzes meeting content for actionable insights.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Monitor engagement, participation, and sentiment as your meeting unfolds.',
  },
  {
    icon: Users,
    title: 'Team Performance',
    description: 'Track team dynamics and identify opportunities for improved collaboration.',
  },
  {
    icon: Clock,
    title: 'Productivity Optimization',
    description: 'Reduce meeting time while increasing effectiveness with data-driven recommendations.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Intelligence',
    description: 'Forecast meeting outcomes and suggest optimizations before they happen.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.',
  },
]

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP of Product, TechCorp',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
    content: 'MeetingFlow transformed how our team collaborates. We\'ve reduced meeting time by 30% while improving decision quality.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Engineering Manager, StartupXYZ',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    content: 'The AI insights are incredible. It catches things we miss and helps us stay focused on what matters most.',
    rating: 5,
  },
  {
    name: 'Emily Johnson',
    role: 'Head of Operations, ScaleUp Inc',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    content: 'Finally, a tool that makes meetings productive. The real-time feedback has been a game-changer for our team.',
    rating: 5,
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '$29',
    period: 'per user/month',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 10 hours of meetings/month',
      'Real-time transcription',
      'Basic analytics dashboard',
      'Email support',
      '7-day free trial',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$79',
    period: 'per user/month',
    description: 'Advanced features for growing teams',
    features: [
      'Unlimited meeting hours',
      'AI-powered insights',
      'Advanced analytics',
      'Team performance tracking',
      'Priority support',
      'Custom integrations',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact sales',
    description: 'Tailored solutions for large organizations',
    features: [
      'Everything in Professional',
      'Custom AI models',
      'Advanced security controls',
      'Dedicated success manager',
      'SLA guarantees',
      'On-premise deployment',
    ],
    popular: false,
  },
]

export default function LandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <nav className="glass border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-primary-500 to-purple-500">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">MeetingFlow</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                Testimonials
              </Link>
            </div>
            
            <div className="flex items-center gap-3">
              <Link href="/auth/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-purple-50 to-white dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 animate-fade-in">
              🚀 Now with GPT-4 powered insights
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6 animate-slide-up">
              Transform Your Meetings with{' '}
              <span className="text-gradient">AI Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              MeetingFlow uses advanced AI to analyze your meetings in real-time, providing actionable insights 
              that boost productivity and improve team collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link href="/auth/signup">
                <Button size="xl" className="w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                size="xl"
                variant="secondary"
                onClick={() => setIsVideoPlaying(true)}
                className="w-full sm:w-auto"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Hero Image/Video */}
          <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative max-w-5xl mx-auto">
              <div className="glass-card p-2">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=600&fit=crop"
                  alt="MeetingFlow Dashboard"
                  className="w-full rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full opacity-20 animate-pulse-slow" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-primary-500 rounded-full opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to make your meetings more productive, engaging, and actionable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="glass-card hover:scale-105 transition-transform duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-primary-500 to-purple-500 text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Trusted by Leading Teams
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See how MeetingFlow is transforming meetings across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="glass-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Choose the plan that fits your team's needs. All plans include a 7-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`glass-card relative ${plan.popular ? 'ring-2 ring-primary-500' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary-500 to-purple-500 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 ml-1">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className="w-full"
                    variant={plan.popular ? 'primary' : 'secondary'}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Ready to Transform Your Meetings?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Join thousands of teams already using MeetingFlow to make their meetings more productive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="xl">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="xl" variant="secondary">
                <Globe className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-primary-500 to-purple-500">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">MeetingFlow</span>
              </div>
              <p className="text-gray-400">
                AI-powered meeting analytics for modern teams.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Integrations</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Status</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 MeetingFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}