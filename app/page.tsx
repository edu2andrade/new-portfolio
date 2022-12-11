import { Footer } from "../sections/Footer";
import { NavBar } from "../sections/NavBar";
import { HeroSection } from "../sections/HeroSection";
import { AboutMeSection } from "../sections/AboutMeSection";
import { WhatIDoSection } from "../sections/WhatIDo";
import { ContactMeSection } from "../sections/ContactMeSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMeSection />
      <WhatIDoSection />
      <ContactMeSection />
      <Footer />
    </>
  )
}
