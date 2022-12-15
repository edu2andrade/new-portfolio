'use client'

import NextLink from 'next/link'

import { styles } from '../styles'
import { FaGithub } from 'react-icons/fa'

interface ProjectCardProps {
  name: string
  imgUrl: string
  repositoryLink: string
  active: string
  handleClick: (active: string) => void
}

export const ProjectCard = ({ name, imgUrl, repositoryLink, active, handleClick }: ProjectCardProps) => {
  return (
    <article className={`relative ${
      active === name 
      ? 'flex-initial w-72'
      : 'flex-none w-44'
    } flex items-center justify-center min-w-44 h-[600px] min-h-[100px] transition-all duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(name)}
    >
      <img
        src={imgUrl}
        alt={name}
        className='absolute w-full h-full object-cover rounded-[24px]'
      />
      {
        active !== name 
        ? (
          <h3 className='absolute font-semibold sm:text-[26px] text-[18px] text-white leading-none z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>
            {name}
          </h3>
          
        ) : (
          <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]'>
            <NextLink href={repositoryLink} target='_blank' className={`${styles.flexCenter} w-[60px] h-[60px] rounded-full glassmorphism mb-4 hover:opacity-75 transition-all`}>
              <FaGithub size={32} color='white' />
            </NextLink>
            <span className=' font-normal text-base leading-5 text-white uppercase'>
              See Repository
            </span>
            <h2 className=' mt-6 font-semibold text-2xl text-white'>
              {name}
            </h2>
          </div>
        )
      }
    </article>
  )
}