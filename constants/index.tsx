'use-client'

import { FaReact } from 'react-icons/fa'
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
} from 'react-icons/si'


export const skills = [
  {
    skillName: 'HTML',
    icon: <SiHtml5 size={48}/>,
  },
  {
    skillName: 'CSS',
    icon: <SiCss3 size={48}/>,
  },
  {
    skillName: 'SASS',
    icon: <SiSass size={48}/>,
  },
  {
    skillName: 'Javascript',
    icon: <SiJavascript size={48}/>,
  },
  {
    skillName: 'Typescript',
    icon: <SiTypescript size={48}/>,
  },
  {
    skillName: 'TailwindCSS',
    icon: <SiTailwindcss size={48}/>,
  },
  {
    skillName: 'Styled Components',
    icon: <SiStyledcomponents size={48}/>,
  },
  {
    skillName: 'React',
    icon: <FaReact size={48}/>,
  },
  {
    skillName: 'React Native',
    icon: <SiReact size={48}/>,
  },
  {
    skillName: 'Next JS',
    icon: <SiNextdotjs size={48}/>,
  },
  {
    skillName: 'Node',
    icon: <SiNodedotjs size={48}/>,
  },
  {
    skillName: 'Figma',
    icon: <SiFigma size={48}/>,
  },
]

export const projects = [
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
    name: 'BG Team',
    imgUrl: '/bg-team.png',
    repositoryLink: 'https://www.galvaocoach.com/',
    // liveLink: '',
  },
  {
    name: 'Coffe Delivery',
    imgUrl: '/coffee-delivery.png',
    repositoryLink: 'https://github.com/edu2andrade/coffee-delivery',
    // liveLink: '',
  },
]