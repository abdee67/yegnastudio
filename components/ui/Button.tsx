import React from 'react'
import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: 'button' | 'a'
  href?: string
  variant?: 'solid' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

export default function Button({
  as = 'button',
  href,
  variant = 'solid',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses = 'display-font font-bold rounded-full transition-all duration-200 inline-flex items-center justify-center cursor-pointer'
  
  const variants = {
    solid: 'bg-accent text-black hover:bg-accent-dark hover:-translate-y-0.5 border-none',
    outline: 'border border-border text-text bg-transparent hover:border-accent hover:text-accent',
  }
  
  const sizes = {
    sm: 'px-5 py-2 text-[0.85rem]',
    md: 'px-6 py-2.5 text-[0.85rem]',
    lg: 'px-7 py-3 text-[0.9rem]',
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (as === 'a' && href) {
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return <a href={href} className={classes}>{children}</a>
    }
    return <Link href={href} className={classes}>{children}</Link>
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}