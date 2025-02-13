'use client'

import { useRef, useState } from 'react'

import { agencies } from '@/lib/agenciesData'

import Divider from '@/components/ui/Divider'

import PageHeader from '@/components/PageHeader'
import { SearchableDropdown } from '@/components/SearchableDropdown'
import SelectableBadgeList from '@/components/SelectableBadgeList'

export default function AgencyPage() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectedAgencies, setSelectedAgencies] = useState<string[]>([])
  const [search, setSearch] = useState('')
  const [isDropdownOpen, setIsDropDownOpen] = useState(false)

  const filteredAgencies = agencies
    .filter((agency) => agency.toLowerCase().includes(search.toLowerCase()))
    .filter((agency) => !selectedAgencies.includes(agency))

  const suggestedAgencies = agencies
    .filter((_, index) => (index + 1) % 2 === 0)
    .filter((agency) => !selectedAgencies.includes(agency))

  const allAgenciesSelected = selectedAgencies.length === agencies.length

  const addAgency = (agency: string) => {
    if (!selectedAgencies.includes(agency)) {
      setSelectedAgencies([...selectedAgencies, agency])
    }
    setSearch('')
    setIsDropDownOpen(false)
    inputRef.current?.blur()
  }

  const removeAgency = (agency: string) => {
    setSelectedAgencies(selectedAgencies.filter((a) => a !== agency))
  }

  return (
    <>
      <PageHeader
        title='Select Agencies'
        description="Choose the agencies you'd want to work with."
      />

      <Divider />

      <div className='flex h-full w-full flex-col gap-12'>
        <SearchableDropdown
          label='Agencies'
          description='Which agency would you like to work with? You can select one or more.'
          search={search}
          setSearch={setSearch}
          isOpen={isDropdownOpen}
          setIsOpen={setIsDropDownOpen}
          filteredItems={filteredAgencies}
          allItemsSelected={allAgenciesSelected}
          onSelect={addAgency}
        />

        {/* Selected Agencies */}
        <SelectableBadgeList
          title='Selected Agencies:'
          skills={selectedAgencies}
          onClick={removeAgency}
          selected={true}
        />

        {/* Suggested Agencies */}
        <SelectableBadgeList
          title='Suggested Agencies:'
          skills={suggestedAgencies}
          onClick={addAgency}
          selected={false}
        />
      </div>
    </>
  )
}
