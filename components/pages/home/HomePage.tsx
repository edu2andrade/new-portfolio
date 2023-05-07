'use client';

import { Footer } from '../../Footer';
import { NavBar } from '../../NavBar';
import { HeroSection } from './sections/HeroSection';
import { AboutMeSection } from './sections/AboutMeSection';
import { ServicesSection } from './sections/Services';
import { ProjectsSection } from './sections/ProjectsSection';

export function HomePage() {
  return (
    <div
      className="
      bg-slate-900
      overflow-hidden
      scrol
      "
    >
      <NavBar />
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
