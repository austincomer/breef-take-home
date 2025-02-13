'use client'

export default function PageHeader(props: {
  title: string
  description: string
}) {
  return (
    <div className='flex flex-col gap-2.5'>
      <h2 className='text-6xl font-thin tracking-tighter'>{props.title}</h2>

      <h3 className='text-2xl font-light text-neutral-600'>
        {props.description}
      </h3>
    </div>
  )
}
