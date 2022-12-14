'use-client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import { Autoplay } from 'swiper'

import { styles } from '../styles'

import { FaArrowCircleDown } from 'react-icons/fa'

import { skills } from '../constants'
import { SkilssItem } from '../components/SkillsItem'

export const AboutMeSection = () => {
  return (
    <section>
      <main className={`${styles.flexCenter} ${styles.xPaddings} flex-col z-10`}>
        <article className={`max-w-md text-center`}>
          <h1 className={`${styles.headings} mb-12`}>Hi there!</h1>
          <p className='text-gray-300'>
            My name is Eduardo Andrade and I&apos;m Web Developer. I spent a lifetime connected to sports, from volleyball to Personal Training which was the last profession before starting this adventure through new technologies. <br /> <br />
            Currently I work with, React, NextJS and Node for web, and React Native for mobile development. I&apos;m always studying and specialising even more in these technologies to be able to solve increasingly complex problems. <br />
          </p>
        </article>

        <div className='flex justify-center gap-8 max-w-xl text-center mt-12 text-gray-300'>
          <Swiper
            slidesPerView={5}
            modules={[Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {
              skills.map((skill) => (
                <SwiperSlide key={skill.skillName}>
                  <SkilssItem
                    skillName={skill.skillName}
                    icon={skill.icon}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
        
        <div className={`${styles.flexCenter} mt-16 animate-bounce text-gray-300`}>
          <FaArrowCircleDown size={24}/>
        </div>
      </main>
    </section>
  )
}

// {
//   skills.map((skill) => (
//     <SkilssItem
//       key={skill.skillName}
//       skillName={skill.skillName}
//       icon={skill.icon}
//     />
//   ))
// }