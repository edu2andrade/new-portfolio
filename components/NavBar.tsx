'use-client';

import NextLink from 'next/link'

import { contacts } from '../constants';

import { styles } from '../styles'
import { FaWhatsapp } from 'react-icons/fa';

export const NavBar = () => {
  return (
    <nav className={`${styles.xPaddings} pt-4`}>
      <div className={`${styles.flexBetween} pb-4 border-b border-gray-700 text-gray-300 z-10`}>
        <div className={`flex gap-2`}>
          <a href='/'>
            <div className='px-4 py-2 hover:bg-gray-800 active:ring-1 ring-cyan-500 rounded-md transition-all'>
              <span>Home</span>
            </div>
          </a>
          {/* NextLink is not working with inner page anchor sections */}
          <a href='/#aboutMe'>
            <div className='px-4 py-2 hover:bg-gray-800 active:ring-1 ring-cyan-500 rounded-md transition-all'>
              <span>About Me</span>
            </div>
          </a>
          <a href="/#services" >
            <div className='px-4 py-2 hover:bg-gray-800 active:ring-1 ring-cyan-500 rounded-md transition-all'>
              <span>Services</span>
            </div>
          </a>
          <a href='/#projects' >
            <div className='px-4 py-2 hover:bg-gray-800 active:ring-1 ring-cyan-500 rounded-md transition-all'>
              <span>Projects</span>
            </div>
          </a>
        </div>
        <NextLink href={contacts[3].link} target='_blank'>
          <div className='p-2 bg-gray-800 hover:ring-1 ring-cyan-500 rounded-md transition-all'>
            <FaWhatsapp size={24}/>
          </div>
        </NextLink>
      </div>
    </nav>
  )
}