'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, hover = true, ...props }, ref) => {
    const Component = hover ? motion.div : 'div'
    const motionProps = hover ? {
      whileHover: { y: -2 },
      transition: { duration: 0.2 }
    } : {}

    return (
      <Component
        ref={ref}
        className={cn('glass-card', className)}
        {...motionProps}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Card.displayName = 'Card'