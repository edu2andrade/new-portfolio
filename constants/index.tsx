'use-client';

import { BiMailSend } from 'react-icons/bi';
import { FaReact, FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import {
  SiReact,
  SiCss3,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiSass,
  SiStyledcomponents,
  SiNodedotjs,
  SiFigma,
  SiTypescript,
  SiJavascript
} from 'react-icons/si';

const iconSizes = {
  small: 18,
  medium: 24,
  large: 48,
};

export const skills = [
  // {
  //   skillName: 'HTML',
  //   icon: <SiHtml5 size={iconSizes.large}/>,
  // },
  // {
  //   skillName: 'CSS',
  //   icon: <SiCss3 size={iconSizes.large}/>,
  // },
  // {
  //   skillName: 'SASS',
  //   icon: <SiSass size={iconSizes.large}/>,
  // },
  {
    skillName: 'Javascript',
    icon: <SiJavascript size={iconSizes.large}/>,
  },
  {
    skillName: 'Typescript',
    icon: <SiTypescript size={iconSizes.large}/>,
  },
  // {
  //   skillName: 'TailwindCSS',
  //   icon: <SiTailwindcss size={iconSizes.large}/>,
  // },
  // {
  //   skillName: 'Styled Components',
  //   icon: <SiStyledcomponents size={iconSizes.large}/>,
  // },
  {
    skillName: 'React JS',
    icon: <FaReact size={iconSizes.large}/>,
  },
  {
    skillName: 'React Native',
    icon: <SiReact size={iconSizes.large}/>,
  },
  {
    skillName: 'Next JS',
    icon: <SiNextdotjs size={iconSizes.large}/>,
  },
  {
    skillName: 'Node JS',
    icon: <SiNodedotjs size={iconSizes.large}/>,
  },
  {
    skillName: 'Figma',
    icon: <SiFigma size={iconSizes.large}/>,
  },
];

export const projects = [
  {
    name: 'BG Team',
    imgUrl: '/bg-team.png',
    repositoryLink: 'https://www.galvaocoach.com/',
    // liveLink: '',
  },
  {
    name: 'Personal Portfolio',
    imgUrl: '/portfolio.png',
    repositoryLink: 'https://github.com/edu2andrade/new-portfolio',
    // liveLink: '',
  },
  {
    name: 'Ignite Gym',
    imgUrl: '/ignite-gym.png',
    repositoryLink: 'https://github.com/edu2andrade/ignitegym',
    // liveLink: '',
  },
  {
    name: 'Coffe Delivery',
    imgUrl: '/coffee-delivery.png',
    repositoryLink: 'https://github.com/edu2andrade/coffee-delivery',
    liveLink: 'https://coffee-delivery-andradee.vercel.app/',
  },
];

export const contacts = [
  {
    type: 'LinkedIn',
    icon: <FaLinkedinIn size={iconSizes.small}/>,
    link: 'https://www.linkedin.com/in/edu2andrade/',
  },
  {
    type: 'Github',
    icon: <FaGithub size={iconSizes.small}/>,
    link: 'https://github.com/edu2andrade',
  },
  {
    type: 'E-mail',
    icon: <BiMailSend size={iconSizes.small}/>,
    link: 'mailto:edu2andrade@gmail.com',
  },
];