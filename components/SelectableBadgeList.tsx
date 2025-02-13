'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { PlusIcon, XIcon } from 'lucide-react'

import { Badge } from '@/components/ui/Badge'

export const badgeAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.15 },
}

export default function SelectableBadgeList({
  title,
  skills,
  onClick,
  selected,
}: {
  title: string
  skills: string[]
  onClick: (skill: string) => void
  selected: boolean
}) {
  if (skills.length === 0) return null

  return (
    <div className='flex flex-col gap-3.5'>
      <span className='text-sm font-medium text-neutral-500'>{title}</span>
      <div className='flex flex-wrap gap-3'>
        <AnimatePresence>
          {skills.map((skill) => (
            <motion.div
              key={skill}
              layout
              {...badgeAnimation}
              className='inline-block'
            >
              <Badge
                coloring={selected ? 'brand' : 'default'}
                className='flex cursor-pointer items-center gap-1'
                onClick={!selected ? () => onClick(skill) : undefined} // Entire badge clickable if not selected
              >
                {selected ? (
                  <XIcon
                    size={16}
                    strokeWidth={1.5}
                    className='hover:text-neutral-950'
                    onClick={() => onClick(skill)} // Only icon is clickable if selected
                  />
                ) : (
                  <PlusIcon
                    size={16}
                    strokeWidth={1.5}
                    className='hover:text-neutral-950'
                  />
                )}
                {skill}
              </Badge>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
