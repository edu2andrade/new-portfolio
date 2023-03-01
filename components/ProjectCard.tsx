'use client';

import NextLink from 'next/link';

import { FaGithub } from 'react-icons/fa';
import { IoLinkOutline } from 'react-icons/io5';
import Image from 'next/image';

interface ProjectCardProps {
  name: string
  imgUrl: string
  usedTools: string[]
  description: string
  repositoryLink: string
  liveLink: string
}

export const ProjectCard = ({
  name, 
  imgUrl, 
  repositoryLink,
  liveLink,
  description, 
  usedTools
}: ProjectCardProps) => {
  return (

    /**
     * 
     * Make it responsive! <----------------------------------------------------------------
     * 
     */
    <article className={`
      relative 
      my-6 
      flex 
      items-center
      h-[620px]
      w-[380px] 
      md:w-[480px] 
      lg:w-[680px] 
      xl:w-[1200px] 
      transition-all 
      duration-[0.7s]
      `}
    >

      <div className='absolute top-8 md:top-28 flex flex-col z-10'>
        <h2 className='px-4 mb-6 font-bold text-3xl text-white drop-shadow-md'>
          {name}
        </h2>
        <p className='p-4 mx-4 min-h-[150px] w-[300px] md:w-[420px] lg:w-[600px] mb-4 bg-gray-800 ring-1 ring-cyan-500  drop-shadow-md
                rounded-md text-base text-gray-300'>
          {description}
        </p>

        <div className="px-4 flex gap-2 flex-wrap">
          {usedTools.map((tool) => {
            return (
              <span 
                key={tool}
                className='
                p-2
                text-xs 
                bg-gray-800
                ring-cyan-500 
                ring-1
                rounded-md
                text-white
                '
              >
                {tool}
              </span>
            );
          })}
        </div>
      
      

        <div className="linkContainers flex">
          <NextLink 
            href={repositoryLink} 
            target='_blank'
            className='px-4 mt-8 flex items-center gap-2'
          >
            <FaGithub size={32} color='white' />
            <span 
              className='font-normal text-base text-white hover:underline transition drop-shadow-md'
            >
            See Repository
            </span>
          </NextLink>

          <NextLink 
            href={liveLink} 
            target='_blank'
            className='px-4 mt-8 flex items-center gap-2 drop-shadow-md'
          >
            <IoLinkOutline size={32} color='white' />
            <span 
              className='font-normal text-base text-white hover:underline transition'
            >
            See it live
            </span>
          </NextLink>
        </div>
          
      </div>

      <NextLink
        href={liveLink} 
        target='_blank'
        className="imageContainer absolute left-0 md:left-auto md:right-0"
      >
        <div className='relative w-[380px] h-[620px] md:w-[480px] md:h-[480] xl:w-[980px] xl:h-[480] opacity-10 md:opacity-20 hover:opacity-40 cursor-pointer transition'>
          <Image
            src={imgUrl}
            alt={name}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'left top',
              borderRadius: 20
            }}
          />
        </div>
      </NextLink>
      

    </article>
  );
};