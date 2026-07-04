import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Achievements from './components/sections/Achievements';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Certificates from './components/sections/Certificates';
import CodingProfiles from './components/sections/CodingProfiles';
import Contact from './components/sections/Contact';
import BlobBackground from './components/ui/BlobBackground';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-primary/30 selection:text-primary-foreground">
      <BlobBackground />
      <Navbar />
      
      <main className="relative z-10 flex flex-col gap-24 pb-24">
        <Hero />
        <Achievements />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <CodingProfiles />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
