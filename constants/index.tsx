'use-client';

import { IoMailOutline } from 'react-icons/io5';
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
    name: 'BG Team Web',
    imgUrl: '/bgTeamWeb.png',
    usedTools: ['NextJS', 'Typescript', 'Styled Components', 'Stripe API', 'Supabase'],
    description: 'Web App to sell Online Coaching services. This web application was built with the latest version of NextJS (13 at the moment) for both, the front and backend, taking advantage of all features of this beautiful framework. Stripe was integrated for managing the payments, and Supabase for storage, Styled Components was my choice for styling this time, and of course, the UI design was made in Figma.',
    repositoryLink: 'https://github.com/edu2andrade/galvao_coach_next',
    liveLink: 'https://www.galvaocoach.com/',
  },
  {
    name: 'Coffe Delivery',
    imgUrl: '/coffeeDelivery.png',
    usedTools: ['ReactJS', 'Typescript', 'Styled Components', 'Redux Toolkit'],
    description: 'This project is an application to manage a shopping cart from a fictitious coffee shop delivery. Was built using ReactJS, Typescript and ViteJS. Styled Component was used for styles, and the state management was made with Redux Toolkit which was great for the task.',
    repositoryLink: 'https://github.com/edu2andrade/coffee-delivery',
    liveLink: 'https://coffee-delivery-andradee.vercel.app/',
  },
  {
    name: 'BG Team App (under construction!)',
    imgUrl: '/bgTeamApp.jpg',
    usedTools: ['React Native', 'Expo', 'Typescript', 'Native Base', 'Stripe API', 'Supabase'],
    description: 'App to sell Online Coaching services. This mobile application is in the development phase and I’m using React Native to build it, this app will be deployed in Apple App Store and Google Play Store. Stripe will be integrated for managing payments, and Supabase to manage database users, Native Base was my choice for styling this time, and the UI design was made in Figma too.',
    repositoryLink: 'https://github.com/edu2andrade/bg-team-app',
    liveLink: '', // disabled!
  },
  {
    name: 'Ignite Gym',
    imgUrl: '/igniteGym.png',
    usedTools: ['React Native', 'Expo', 'Typescript', 'Native Base', 'Context API'],
    description: 'Gym App develop during Ignite Course by Rocketseat. This app was built using React Native, Native Base for styles, React Hook Forms and Yup for managing user inputs, Context API to manage the states of the app, and Axios to manage the API calls.',
    repositoryLink: 'https://github.com/edu2andrade/ignitegym',
    liveLink: '', // disabled!
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
    icon: <IoMailOutline size={iconSizes.small}/>,
    link: 'mailto:edu2andrade@gmail.com',
  },
];