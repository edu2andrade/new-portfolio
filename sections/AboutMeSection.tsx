'use-client'

import { SkilssItem } from '../components/SkillsItem'
import { styles } from '../styles'

import { FaArrowCircleDown } from 'react-icons/fa'

import { skills } from '../constants'

export const AboutMeSection = () => {
  return (
    <section>
      <main className={`${styles.flexCenter} ${styles.xPaddings} flex-col z-10`}>
        <article className={`max-w-md text-center`}>
          <h1 className={`${styles.headings} mb-12`}>Hi there!</h1>
          <p className='text-gray-300'>
            My name is Eduardo Andrade and I'm Web Developer. I spent a lifetime connected to sports, from volleyball to Personal Training which was the last profession before starting this adventure through new technologies. <br /> <br />
            Currently I work with, React, NextJS and Node for web, and React Native for mobile development. I'm always studing and specialising even more in these technologies to be able to solve increasingly complex problems. <br />
          </p>
        </article>
        <div className='text-center mt-8 text-gray-300'>
          <div className='flex flex-wrap justify-center gap-4'>
            {
              skills.map((skill) => (
                <SkilssItem
                  key={skill.skillName}
                  skillName={skill.skillName}
                  icon={skill.icon}
                />
              ))
            }
          </div>
        </div>
        <div className={`${styles.flexCenter} mt-16 animate-bounce text-gray-300`}>
          <FaArrowCircleDown size={24}/>
        </div>
      </main>
    </section>
  )
}