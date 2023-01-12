'use-client'

import Image from "next/image"
import NextLink from 'next/link'
import profilePic from '../public/profile_pic.webp'

import { styles } from '../styles'
import { FaArrowCircleDown } from 'react-icons/fa'
import { contacts } from "../constants"


export const HeroSection = () => {
  return (
    <section id='home' className=" mb-24">
      <div className='absolute top-[220px] md:right-48 gradient-01 overflow-hidden max-[639px]:hidden' />
      <div className='absolute top-[510px] left-16 gradient-02 overflow-hidden sm:hidden' />
      <main className={`${styles.flexCenter} flex-col md:${styles.flexAround} md:flex-row ${styles.xPaddings} pt-8 md:pt-24 pb-16 text-white z-10`}>
        <div className="z-10 flex flex-col justify-center items-center md:items-start">
          <h1 className='font-extrabold text-6xl md:text-8xl -ml-1 tracking-tighter leading-none'>
            I am
          </h1>
          <span className='font-extrabold text-9xl md:text-[200px] -ml-3 tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-300'>
            Edu.
          </span>
          <h2 className=' text-center font-bold text-4xl md:text-4xl tracking-tighter leading-none'>
            Freelance Web Developer
          </h2>
          <NextLink 
            href={contacts[2].link}
            className='py-2 px-4 w-40 flex items-center justify-center gap-2 mt-8 bg-gray-800 hover:ring-1 ring-cyan-500 transition-colors rounded-md'
          >
            {contacts[2].icon}
            Contact Me
          </NextLink>
        </div>
        <div className='w-52 h-52 md:w-96 mt-8 md:mt-0 md:h-96 relative'>
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