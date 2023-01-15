'use-client'

import { useState } from 'react'
import NextLink from 'next/link'
import { ProjectCard } from '../components/ProjectCard'
import { contacts, projects } from '../constants'
import { styles } from '../styles'

export const ProjectsSection = () => {
  const [active, setActive] = useState('BG Team')

  return (
    <section id='projects'>
      <main className={`${styles.flexCenter} ${styles.xPaddings} mt-24 flex-col z-10`}>
        <h1 className={`${styles.headings} mb-16`}>
          Projects
        </h1>
        <div className={`${styles.flexCenter} md:flex-row flex-col gap-5`}>
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
        <h3 className='pt-16 pb-8 text-xl font-semibold text-white'>
          See all projects here:
        </h3>
        <NextLink href={contacts[1].link} target='_blank'>
          <div className='py-2 px-4 bg-gray-800 flex items-center justify-center gap-2 text-gray-300 hover:ring-1 ring-cyan-500 rounded-md transition-color'>
            {contacts[1].icon}
            Repositories
          </div>
        </NextLink>
      </main>
    </section>
  )
}