'use-client'

import NextLink from 'next/link'

import { contacts } from '../constants';

import { styles } from '../styles'

export const Footer = () => {
  return (
    <footer className={`${styles.xPaddings} mt-24`}>
      <main className={`${styles.flexCenter} flex-col gap-6 py-8 border-t border-gray-700 text-gray-300 z-10`}>
        <h3 className='text-xl font-semibold text-white'>
          Contacts
        </h3>
        <div className='flex gap-6'>
          {
            contacts.map(contact => (
              <NextLink
                key={contact.type} 
                href={contact.link}
                className='flex gap-2 items-center cursor-pointer hover:text-cyan-500 transition-color'  
              >
                {contact.icon}
                <span>
                  {contact.type}
                </span>
              </NextLink>
            ))
          }
        </div>
        <span className='text-gray-500 text-sm'>
          Copyright © 2023 - Eduardo Andrade
        </span>
      </main>
    </footer>
  )
}