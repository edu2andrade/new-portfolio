'use-client'

import Image from "next/image"
import profilePic from '../public/profile_pic.webp'

import { styles } from '../styles'
import { FaArrowCircleDown } from 'react-icons/fa'

export const HeroSection = () => {
  return (
    <section className="h-screen">
      <div className='absolute top-28 right-32 gradient-01 overflow-hidden' />
      <main className={`${styles.flexAround} ${styles.xPaddings} pt-24 pb-16 text-white z-10`}>
        <div className="z-10">
          <h1 className='font-extrabold text-8xl tracking-tighter leading-none'>
            I am
          </h1>
          <span className='font-extrabold text-[200px] tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-300'>
            Edu.
          </span>
        </div>
        <div className='w-96 h-96 relative'>
          <Image
            src={profilePic}
            alt='Beautiful Smiling Face!'
            width={380}
            height={380}
            priority
          />
        </div>
      </main>
      <div className={`${styles.flexCenter} animate-bounce text-gray-300`}>
        <FaArrowCircleDown size={24}/>
      </div>
    </section>
  )
}