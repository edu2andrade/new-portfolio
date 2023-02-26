'use-client';

import NextLink from 'next/link';

import { contacts } from '../constants';

import { styles } from '../styles';

const getYear = () => {
  return new Date().getFullYear();
};

export const Footer = () => {
  return (
    <footer className={`${styles.xPaddings} mt-24`}>
      <main className={`
        ${styles.flexCenter} 
        flex-col 
        gap-6 
        py-8 
        border-t 
        border-gray-700 
        text-gray-300 
        z-10
      `}>
        <h3 className='text-xl font-semibold text-white'>
          Contacts
        </h3>
        <div className='flex flex-col sm:flex-row gap-4 mt-8'>
          {
            contacts.map((contact) => (
              <NextLink
                key={contact.type} 
                href={contact.link}
                className='
                  flex 
                  gap-2 
                  items-center 
                  cursor-pointer 
                  hover:text-cyan-500 
                  transition
                '  
              >
                {contact.icon}
                <span>
                  {contact.type}
                </span>
              </NextLink>
            ))
          }
        </div>
        <span className='w-full text-center text-gray-500 text-sm mt-8'>
          Copyright &copy; {getYear()} - Eduardo Andrade - Freelance Web Developer
        </span>
      </main>
    </footer>
  );
};