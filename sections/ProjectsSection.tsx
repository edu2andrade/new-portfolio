'use-client'

import { useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../constants'
import { styles } from '../styles'

export const ProjectsSection = () => {
  const [active, setActive] = useState('Personal Portfolio')

  return (
    <section>
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
      </main>
    </section>
  )
}