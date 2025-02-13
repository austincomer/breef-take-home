'use client'

import { useRef, useState } from 'react'

import { skills } from '@/lib/skillsData'

import Divider from '@/components/ui/Divider'

import PageHeader from '@/components/PageHeader'
import { SearchableDropdown } from '@/components/SearchableDropdown'
import SelectableBadgeList from '@/components/SelectableBadgeList'

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [search, setSearch] = useState('')
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const filteredSkills = skills
    .filter((skill) => skill.toLowerCase().includes(search.toLowerCase()))
    .filter((skill) => !selectedSkills.includes(skill))

  const suggestedSkills = skills
    .filter((_, index) => (index + 1) % 2 === 0)
    .filter((skill) => !selectedSkills.includes(skill))

  const allSkillsSelected = selectedSkills.length === skills.length

  const addSkill = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill])
    }
    setSearch('')
    setIsDropDownOpen(false)
    inputRef.current?.blur()
  }

  const removeSkill = (skill: string) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill))
  }

  return (
    <>
      <PageHeader
        title='Project Scope'
        description='Tell us what you are looking for and when you want to start'
      />

      <Divider />

      <div className='flex h-full w-full flex-col gap-12'>
        <SearchableDropdown
          label='Agency Skills'
          description='What type of agency are you looking for? Select one or multiple'
          search={search}
          setSearch={setSearch}
          isOpen={isDropDownOpen}
          setIsOpen={setIsDropDownOpen}
          filteredItems={filteredSkills}
          allItemsSelected={allSkillsSelected}
          onSelect={addSkill}
        />

        {/* Selected skills */}
        <SelectableBadgeList
          title='Selected Skills:'
          skills={selectedSkills}
          onClick={removeSkill}
          selected={true}
        />

        {/* Suggested skills */}
        <SelectableBadgeList
          title='Suggested Skills:'
          skills={suggestedSkills}
          onClick={addSkill}
          selected={false}
        />
      </div>
    </>
  )
}
