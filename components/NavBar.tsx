'use-client';

import NextLink from 'next/link'
import { styles } from '../styles'
import { FaWhatsapp } from 'react-icons/fa'

export const NavBar = () => {
  return (
    <nav className={`${styles.xPaddings} pt-4`}>
      <div className={`${styles.flexBetween} pb-4 border-b border-gray-700 text-gray-300 z-10`}>
        <div className={`flex gap-2`}>
          <NextLink href='/'>
            <div className='px-4 py-2 hover:bg-gray-800 active:ring-1 ring-gray-700 rounded-md transition-all'>
              <span>Home</span>
            </div>
          </NextLink>
          <NextLink href='/'>
            <div className='px-4 py-2 hover:bg-gray-800 active:ring-1 ring-gray-700 rounded-md transition-all'>
              <span>About Me</span>
            </div>
          </NextLink>
          <NextLink href='/'>
            <div className='px-4 py-2 hover:bg-gray-800 active:ring-1 ring-gray-700 rounded-md transition-all'>
              <span>Services</span>
            </div>
          </NextLink>
          <NextLink href='/'>
            <div className='px-4 py-2 hover:bg-gray-800 active:ring-1 ring-gray-700 rounded-md transition-all'>
              <span>Projects</span>
            </div>
          </NextLink>
        </div>
        <NextLink href='/'>
          <div className='p-2 bg-gray-800 hover:ring-1 ring-gray-700 rounded-md transition-all'>
            <FaWhatsapp size={24} />
          </div>
        </NextLink>
      </div>
    </nav>
  )
}