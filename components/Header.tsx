'use client'

import { Button } from '@/components/ui/Button'

export default function Header() {
  return (
    <div className='flex h-[125px] w-full items-center justify-between border-b border-neutral-300 px-5 sm:px-10'>
      <h1 className='font-host text-5xl font-light tracking-tighter'>breef.</h1>

      <Button size='xl' variant='outline' shape='square' className='uppercase'>
        Save & Exit
      </Button>
    </div>
  )
}
