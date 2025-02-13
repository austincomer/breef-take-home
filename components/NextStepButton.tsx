'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/utils/cn'

import { Button, buttonVariants } from '@/components/ui/Button'

export default function NextStepButton() {
  const pathname = usePathname()

  // Determine the next step based on the current path
  const nextStep =
    {
      '/': '/agency',
      '/agency': '/details',
    }[pathname] || null

  return (
    <div className='sm:w-fit sm:self-center lg:self-end'>
      {nextStep ? (
        <Link
          href={nextStep}
          className={cn(
            buttonVariants({ variant: 'brand', size: 'xl' }),
            'w-full border border-neutral-800 px-14 font-light uppercase'
          )}
        >
          Next
        </Link>
      ) : (
        <Button
          variant='brand'
          size='xl'
          className='w-full border border-neutral-800 px-14 font-light uppercase'
        >
          Complete
        </Button>
      )}
    </div>
  )
}
