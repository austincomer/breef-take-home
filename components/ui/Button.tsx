'use client'

import * as React from 'react'

import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const buttonVariants = cva(
  'focus-visible:ring-ring relative inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-sm font-medium transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-30',
  {
    variants: {
      variant: {
        default: 'bg-neutral-800 text-white hover:bg-neutral-700',
        brand: 'bg-brand text-white hover:bg-brand/80',
        white:
          'border border-neutral-200 bg-white text-neutral-950 shadow-sm hover:bg-neutral-50',
        destructive:
          'border border-red-300 bg-red-50 text-red-500 hover:border-red-400/80 hover:bg-red-100/80',
        outline:
          'border border-brand text-brand hover:border-neutral-800 hover:text-neutral-800',
        outlineGhost:
          'border border-transparent text-neutral-600 hover:border-neutral-800 hover:text-neutral-800',
        secondary:
          'border border-neutral-200/40 bg-neutral-100 hover:bg-neutral-200',
        ghost: 'hover:bg-neutral-100 hover:text-neutral-800',
        activeGhost: 'bg-neutral-100 text-neutral-800',
        destructiveGhost: 'text-red-600 hover:bg-red-100 hover:text-red-700',
        link: 'text-neutral-900 underline-offset-4 hover:underline',
        text: 'cursor-pointer text-neutral-500 hover:text-neutral-900',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-11 px-8',
        xl: 'h-12 px-8 text-xl',
        icon: 'p-1.5',
        fit: 'h-fit w-fit p-0',
      },
      shape: {
        square: 'rounded-none',
        rounded: 'rounded-md',
        pill: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      shape: 'square',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, shape, className, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, shape }), className)}
        ref={ref}
        {...props}
      >
        {props.children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
