import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/cn';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(link => link.name.toLowerCase());
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= (el.offsetTop - 100)) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4 bg-[#050816]/80 backdrop-blur-lg border-b border-white/10" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-white flex items-center gap-2 group" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-sm group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all">RM</span>
          <span className="hidden sm:block">Rishita Mehta</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                activeSection === link.name.toLowerCase() 
                  ? "bg-white/10 text-white" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium border border-white/20 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#050816]/95 backdrop-blur-xl border-b border-white/10 py-4 px-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={cn(
                "px-4 py-3 rounded-lg text-sm font-medium transition-all",
                activeSection === link.name.toLowerCase() 
                  ? "bg-primary/20 text-white" 
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              )}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 px-4 py-3 rounded-lg bg-primary/20 hover:bg-primary/30 text-white text-center text-sm font-medium border border-primary/30"
          >
            View Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
