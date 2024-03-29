'use-client';

import NextLink from 'next/link';

import { styles } from '../../../../styles';

import { FaArrowCircleDown } from 'react-icons/fa';

import { skills } from '../../../../constants';
import { SkilssItem } from '../../../SkillsItem';

export const AboutMeSection = () => {
  return (
    <section id="aboutMe">
      <main
        className={`
        ${styles.flexCenter} 
        ${styles.xPaddings} 
        flex-col z-10
      `}
      >
        <article className={'max-w-md text-center'}>
          <h1 className={`${styles.headings} mb-12`}>Hi there!</h1>
          <p className="text-gray-300">
            My name is Eduardo Andrade and I&apos;m a Freelance Web Developer. I
            spent a lifetime connected to sports, from volleyball to Personal
            Training, which was my last profession before restarting this
            adventure through new technologies. <br /> <br />
            Currently I work as a Freelancer bringing projects to life with
            Figma, React, NextJS and Node for the web, and React Native for
            mobile apps. I&apos;m always studying and specializing in these
            technologies to deliver the best results. <br />
          </p>
        </article>

        <NextLink
          href="https://drive.google.com/file/d/1rJlHNhW1a5cXLks2KB4o8hYPA5Pn5Kj3/view?usp=share_link"
          target="_blank"
        >
          <div
            className="
            mt-12
            py-2
            px-3 
            text-gray-300
            hover:bg-gray-800 
            ring-1 
            ring-cyan-500 
            rounded-md 
            transition-all
          "
          >
            Resume
          </div>
        </NextLink>

        <div
          className="
          flex justify-center gap-8 flex-wrap 
          max-w-2xl text-center mt-12 text-gray-300
        "
        >
          {skills.map((skill) => (
            <SkilssItem
              key={skill.skillName}
              skillName={skill.skillName}
              icon={skill.icon}
            />
          ))}
        </div>

        <div
          className={`
          ${styles.flexCenter} 
          mt-16 animate-bounce text-gray-300
        `}
        >
          <FaArrowCircleDown size={24} />
        </div>
      </main>
    </section>
  );
};
