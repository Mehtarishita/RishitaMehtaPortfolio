import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050816]/80 backdrop-blur-lg py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold text-white">Rishita Mehta</span>
          <p className="text-gray-400 text-sm text-center md:text-left">
            Building scalable software, solving real-world problems.
          </p>
        </div>
        
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] group"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 mt-8 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Rishita Mehta. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
