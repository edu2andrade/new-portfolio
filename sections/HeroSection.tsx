'use-client'

import Image from "next/image"
import NextLink from 'next/link'
import profilePic from '../public/profile_pic.webp'

import { styles } from '../styles'
import { FaArrowCircleDown } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { contacts } from "../constants"

export const HeroSection = () => {
  return (
    <section id='home' className=" mb-24">
      <div className='absolute top-40 right-44 gradient-01 overflow-hidden' />
      <main className={`${styles.flexAround} ${styles.xPaddings} pt-24 pb-16 text-white z-10`}>
        <div className="z-10">
          <h1 className='font-extrabold text-8xl -ml-1 tracking-tighter leading-none'>
            I am
          </h1>
          <span className='font-extrabold text-[200px] -ml-3 tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-300'>
            Edu.
          </span>
          <h2 className='font-bold text-4xl tracking-tighter leading-none'>
            Web Developer
          </h2>
          <NextLink 
            href={contacts[2].link}
            className='py-2 px-4 w-40 flex items-center justify-center gap-2 mt-8 bg-gray-800 hover:ring-1 ring-cyan-500 transition-colors rounded-md'
          >
            {contacts[2].icon}
            Contact Me
          </NextLink>
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