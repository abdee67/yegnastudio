import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'neutral'
  className?: string
  children: React.ReactNode
}

export default function Badge({
  variant = 'neutral',
  className = '',
  children,
  ...props
}: BadgeProps) {
  const baseClasses = 'inline-flex items-center rounded-full font-medium'
  
  const variants = {
    neutral: 'bg-surface2 border border-border text-text2 px-3 py-1 text-[0.75rem]',
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}