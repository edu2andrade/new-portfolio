'use client'

import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "../sections/HeroSection";
import { AboutMeSection } from "../sections/AboutMeSection";
import { ServicesSection } from "../sections/Services";
import { ContactMeSection } from "../sections/ContactMeSection";
import { ProjectsSection } from "../sections/ProjectsSection";

export default function Home() {
  return (
    <div className='bg-gray-900 overflow-hidden scrol'>
      <NavBar />
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactMeSection />
      <Footer />
    </div>
  )
}
