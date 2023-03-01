'use-client';

import { styles } from '../styles';

import { SiFigma } from 'react-icons/si';
import { IoLogoAppleAppstore } from 'react-icons/io5';
import { MdDevices } from 'react-icons/md';

export const ServicesSection = () => {
  return (
    <section id='services'>
      <main className={`${styles.flexCenter} ${styles.xPaddings} text-center mt-24 flex-col z-10`}>
        <h1 className={`${styles.headings} mb-16`}>Services & Solutions</h1>
        <div className='flex flex-wrap gap-4 justify-center'>
          <article className='flex flex-col items-center justify-center w-56 h-56 rounded-xl p-4 text-center bg-gradient-to-b from-sky-400 to-blue-800 text-gray-300 hover:scale-105 transition'>
            <SiFigma size={64} color='white' />
            <span className='mt-2 mb-4 text-white text-xl font-bold uppercase'>UX/UI</span>
            <p>High quality design and prototyping for best user experience</p>
          </article>
          <article className='flex flex-col items-center justify-center w-56 h-56 rounded-xl p-4 text-center bg-gradient-to-b from-sky-400 to-blue-800 bg-gray-700 text-gray-300 hover:scale-105 transition'>
            <MdDevices size={64} color='white' />
            <span className='mt-2 mb-4 text-white text-xl font-bold uppercase'>Web</span>
            <p>Web Apps development with best and newer programming languages</p>
          </article>
          <article className='flex flex-col items-center justify-center w-56 h-56 rounded-xl p-4 text-center bg-gradient-to-b from-sky-400 to-blue-800 bg-gray-700 text-gray-300 hover:scale-105 transition'>
            <IoLogoAppleAppstore size={64} color='white' />
            <span className='mt-2 mb-4 text-white text-xl font-bold uppercase'>Apps</span>
            <p>Mobile Apps development for iOS / Android using React Native.</p>
          </article>
        </div>
      </main>
    </section>
  );
};