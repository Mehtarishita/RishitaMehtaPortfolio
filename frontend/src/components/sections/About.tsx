import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 inline-block relative">
            About Me
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></span>
          </h2>
          
          <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed relative z-10">
              <p>
                I'm <strong className="text-white">Rishita Mehta</strong>, a final-year Computer Science and Engineering undergraduate at VIT Bhopal University with a CGPA of 8.81/10. I build scalable full-stack applications and AI-powered systems, with work recognized through a <strong className="text-primary">published Indian Patent</strong> and a <strong className="text-secondary">National Runner-Up finish at Smart India Hackathon 2025</strong>.
              </p>
              <p>
                My focus areas are Java, full-stack web development, and applied AI/ML with system design, cloud computing, and generative AI as my current areas of deep-dive learning.
              </p>
              <p>
                Beyond code, I represented my state twice each in Chess and Hockey, which shaped the discipline and strategic thinking I bring to engineering problems.
              </p>
              
              <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Career Objective</h3>
                <p className="italic text-gray-400 bg-white/5 p-4 rounded-xl border border-white/10">
                  Aspiring Software Engineer with hands-on project experience in full-stack development and AI/ML. Published Indian Patent Holder and Smart India Hackathon 2025 National Runner-Up, with a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, and Database Management Systems.
                </p>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 relative z-10">
              <span className="text-sm font-semibold text-white uppercase tracking-wider">Currently Exploring:</span>
              <div className="flex flex-wrap gap-2">
                {['System Design', 'Generative AI', 'Cloud Computing'].map(skill => (
                  <span key={skill} className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 shadow-[0_0_10px_rgba(34,211,238,0.1)]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 flex justify-center sm:justify-start relative z-10">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] flex items-center gap-2"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default About;
