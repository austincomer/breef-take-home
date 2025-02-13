'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { MoveLeftIcon } from 'lucide-react'

import { cn } from '@/utils/cn'

import { Button } from '@/components/ui/Button'

const steps = [
  { label: 'Project', href: '/' },
  { label: 'Agency', href: '/agency' },
  { label: 'Details', href: '/details' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className='relative flex min-h-full flex-col-reverse gap-2 border-neutral-300 px-8 py-5 sm:flex-row-reverse sm:items-center sm:justify-center sm:gap-10 sm:px-14 sm:py-8 lg:min-w-[300px] lg:items-start lg:border-r lg:px-10 lg:py-16'>
      <nav aria-label='Progress steps' className='w-full'>
        <ol className='flex w-full flex-wrap justify-between gap-7 lg:flex-col'>
          {steps.map((step, index) => {
            const isActive = pathname === step.href

            return (
              <li key={step.label} className='flex items-center gap-2 lg:gap-3'>
                <Link
                  href={step.href}
                  className='flex items-center gap-2 lg:gap-3'
                >
                  <span
                    className={cn(
                      'flex size-6 items-center justify-center rounded-full text-sm font-semibold transition-all lg:size-7',
                      isActive
                        ? 'bg-brand text-white'
                        : 'bg-neutral-200 text-neutral-800 hover:bg-neutral-300'
                    )}
                  >
                    {index + 1}
                  </span>

                  <div
                    className={cn(
                      'text-xl transition-all lg:text-2xl',
                      isActive
                        ? 'text-neutral-950'
                        : 'text-neutral-500 hover:text-neutral-700'
                    )}
                  >
                    {step.label}
                  </div>
                </Link>
              </li>
            )
          })}
        </ol>
      </nav>

      <div className='flex w-fit items-center justify-center lg:absolute lg:bottom-14 lg:left-10'>
        <Button variant='text' size='fit'>
          <MoveLeftIcon size={42} strokeWidth={1} />
        </Button>
      </div>
    </aside>
  )
}
