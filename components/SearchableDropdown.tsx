'use client'

import { useRef } from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDownIcon, SearchIcon } from 'lucide-react'

import { cn } from '@/utils/cn'

export function SearchableDropdown(props: {
  label: string
  description?: string
  search: string
  setSearch: (value: string) => void
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  filteredItems: string[]
  allItemsSelected: boolean
  onSelect: (item: string) => void
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  return (
    <div className='flex flex-col gap-2'>
      <label className='text-2xl'>{props.label}</label>
      {props.description && (
        <p className='text-neutral-600'>{props.description}</p>
      )}

      <div className='relative'>
        <div className='relative flex items-center'>
          <SearchIcon
            size={16}
            className='absolute left-3.5 mr-2 text-neutral-500'
          />
          <input
            ref={inputRef}
            value={props.search}
            onChange={(e) => {
              props.setSearch(e.target.value)
              props.setIsOpen(true)
            }}
            placeholder={`Search ${props.label.toLowerCase()}...`}
            onFocus={() => props.setIsOpen(true)}
            onBlur={() => setTimeout(() => props.setIsOpen(false), 150)}
            className='flex h-12 w-full border border-neutral-300 bg-white px-3 py-1 pl-10 text-base transition-colors duration-200 ease-in-out placeholder:text-neutral-400 hover:border-neutral-400 focus-visible:border-neutral-800 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm'
          />
          <ChevronDownIcon
            size={16}
            className={cn(
              'absolute right-3.5 ml-2 transition-transform',
              props.isOpen && 'rotate-180'
            )}
          />
        </div>

        <AnimatePresence>
          {props.isOpen && (
            <motion.div
              ref={dropdownRef}
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.125 }}
              className='absolute z-[99] mt-1.5 h-fit max-h-[250px] w-full overflow-auto border border-neutral-300 bg-white shadow-lg'
              onMouseDown={(e) => e.preventDefault()}
            >
              {props.filteredItems.length > 0 ? (
                props.filteredItems.map((item) => (
                  <div
                    key={item}
                    className='cursor-pointer px-4 py-3 hover:bg-neutral-100'
                    onClick={() => {
                      props.onSelect(item)
                      inputRef.current?.blur()
                    }}
                  >
                    {item}
                  </div>
                ))
              ) : props.allItemsSelected ? (
                <div className='px-4 py-3 text-center text-neutral-400'>
                  All {props.label.toLowerCase()} selected
                </div>
              ) : (
                <div className='px-4 py-3 text-center text-neutral-400'>
                  No results found
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
