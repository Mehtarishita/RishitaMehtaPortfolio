import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '../ui/Button';

const roles = [
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "Patent Holder",
  "Open Source Contributor"
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Mouse reactive glow would go here or globally */}
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center gap-8">
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary/50 p-1 relative group"
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl group-hover:bg-primary/40 transition-colors"></div>
          {/* [TO ADD LATER — leave a clean circular/rounded placeholder with soft glow ring] */}
          <div className="w-full h-full rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-white/10 relative z-10">
             <span className="text-4xl text-gray-500">Photo</span>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4 items-center max-w-3xl">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-accent font-medium tracking-wide uppercase text-sm md:text-base"
          >
            Hi, I'm
          </motion.p>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
          >
            Rishita <span className="text-gradient">Mehta</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300"
          >
            Aspiring Software Engineer
          </motion.h2>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-8 md:h-10 text-lg md:text-xl text-primary font-medium flex items-center justify-center overflow-hidden"
          >
            <motion.span
              key={currentRole}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute"
            >
              {roles[currentRole]}
            </motion.span>
          </motion.div>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed mt-4"
          >
            Building scalable software, solving real-world problems, and turning ideas into impactful digital products.
          </motion.p>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-4"
        >
          <Button variant="primary" size="lg" onClick={() => window.open('/resume.pdf', '_blank')}>
            <Download size={18} className="mr-2" />
            View Resume
          </Button>
          <Button variant="secondary" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Projects
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </Button>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-6 mt-8"
        >
          <a href="https://github.com/Mehtarishita" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all p-2 rounded-full hover:bg-white/5">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/rishitamehta29/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A66C2] hover:scale-110 transition-all p-2 rounded-full hover:bg-white/5">
            <FaLinkedin size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
