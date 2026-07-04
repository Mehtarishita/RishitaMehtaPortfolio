import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const eduData = [
  {
    id: 1,
    institution: "VIT Bhopal University",
    degree: "B.Tech, Computer Science & Engineering",
    score: "CGPA: 8.81/10",
    year: "Expected 2026",
  },
  {
    id: 2,
    institution: "Class XII",
    degree: "Higher Secondary",
    score: "81%",
    year: "Completed",
  },
  {
    id: 3,
    institution: "Class X",
    degree: "Secondary",
    score: "93.60%",
    year: "Completed",
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
            Education
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px bg-white/10 md:-translate-x-1/2"></div>
          
          <div className="space-y-8">
            {eduData.map((edu, idx) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row gap-4 md:gap-8 relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#050816] border-2 border-accent flex items-center justify-center -translate-x-[15px] md:-translate-x-1/2 z-10 shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                  <GraduationCap size={14} className="text-accent" />
                </div>
                
                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 glass p-6 rounded-2xl group hover:border-accent/30 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">{edu.institution}</h3>
                  <p className="text-gray-300 font-medium mb-3">{edu.degree}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold border border-accent/20">
                      {edu.score}
                    </span>
                    <span className="text-gray-500">{edu.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
