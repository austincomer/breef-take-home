'use client'

import * as React from 'react'

import { type VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/utils/cn'

const badgeVariants = cva(
  'inline-flex items-center gap-1 text-xs font-medium transition-all duration-200 ease-in-out',
  {
    variants: {
      size: {
        default: 'px-3 py-0.5',
        sm: 'px-1.5 py-0.5',
        lg: 'px-2.5 py-1 text-sm',
        xl: 'px-3.5 py-0.5 text-base',
      },
      shape: {
        square: 'rounded-none',
        rounded: 'rounded-sm',
        pill: 'rounded-full',
      },
      coloring: {
        default: 'border border-neutral-400 text-neutral-700',
        brand: 'border border-brand bg-brand/5 text-brand',
      },
      clickable: {
        true: 'cursor-pointer',
        false: '',
      },
    },
    compoundVariants: [
      {
        coloring: 'default',
        clickable: true,
        class: 'hover:border-neutral-800 hover:text-neutral-900',
      },
      {
        coloring: 'brand',
        clickable: true,
        class: 'hover:border-brand/80 hover:bg-transparent hover:text-brand/80',
      },
    ],
    defaultVariants: {
      size: 'lg',
      coloring: 'default',
      shape: 'pill',
      clickable: false,
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({
  className,
  size,
  shape,
  coloring,
  clickable,
  ...props
}: BadgeProps) => (
  <div
    className={cn(badgeVariants({ size, shape, coloring, clickable }), className)}
    {...props}
  />
)

export { Badge, badgeVariants }
