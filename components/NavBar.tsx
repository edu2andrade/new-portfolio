'use-client';

import NextLink from 'next/link';

import { contacts } from '../constants';

import { styles } from '../styles';
import { BurguerMenu } from './BurguerMenu';
import { BiMailSend } from 'react-icons/bi';

export const NavBar = () => {
  return (
    <nav className={`${styles.xPaddings} ${styles.yPaddings}`}>
      <div className={`
        ${styles.flexBetween} 
        pb-4 border-b 
        border-gray-700 
        text-gray-300 
        z-10
      `}>
        {/* This menu only appears when screen is bigger than 639px */}
        <div className={'max-[639px]:hidden flex gap-2'}>
          <a href='/#home'>
            <div className='
              px-4 
              py-2 
              hover:bg-gray-800 
              active:ring-1 
              ring-cyan-500 
              rounded-md 
              transition-all
            '>
              <span>Home</span>
            </div>
          </a>
          {/* NextLink is not working with inner page anchor sections */}
          <a href='/#aboutMe'>
            <div className='
              px-4 
              py-2 
              hover:bg-gray-800 
              active:ring-1 
              ring-cyan-500 
              rounded-md 
              transition-all
            '>
              <span>About Me</span>
            </div>
          </a>
          <a href='/#services' >
            <div className='
              px-4 
              py-2 
              hover:bg-gray-800 
              active:ring-1 
              ring-cyan-500 
              rounded-md 
              transition-all
            '>
              <span>Services</span>
            </div>
          </a>
          <a href='/#projects' >
            <div className='
              px-4 
              py-2 
              hover:bg-gray-800 
              active:ring-1 
              ring-cyan-500 
              rounded-md 
              transition-all
            '>
              <span>Projects</span>
            </div>
          </a>
        </div>
        {/* This burguer menu only appears when screen is smaller than 640px */}
        <BurguerMenu />
        
        <NextLink href={contacts[2].link} target='_blank'>
          <div className='
            p-2 
            bg-gray-800 
            hover:ring-1 
            ring-cyan-500 
            rounded-md 
            transition-all
          '>
            <BiMailSend size={24}/>
          </div>
        </NextLink>
      </div>
    </nav>
  );
};