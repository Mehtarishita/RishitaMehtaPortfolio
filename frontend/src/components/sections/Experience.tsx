import { motion } from 'framer-motion';
import { Briefcase, Medal, ExternalLink } from 'lucide-react';
import { experiences, leadershipAndSports } from '../../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
            Experience & Leadership
            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Work Experience Timeline */}
          <div className="flex-1 relative">
            <div className="absolute left-[28px] top-4 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative pl-16 md:pl-20"
                >
                  <div className="absolute left-0 top-1 w-14 h-14 rounded-full bg-[#050816] border-2 border-primary flex items-center justify-center text-primary shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                    <Briefcase size={24} />
                  </div>
                  
                  <div className="glass-panel p-6 md:p-8 rounded-2xl group hover:border-primary/30 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                        <p className="text-lg font-medium text-gray-300">{exp.organization}</p>
                      </div>
                      <div className="flex flex-col md:items-end text-sm">
                        <span className="text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full border border-accent/20 mb-2 inline-block w-fit">
                          {exp.duration || "Duration to be added"}
                        </span>
                        <span className="text-gray-400">{exp.location} • {exp.type}</span>
                      </div>
                    </div>
                    
                    {exp.description && (
                      <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.techStack.map(tech => (
                        <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {(exp.certificateUrl || exp.lorUrl || exp.promotionUrl || exp.appreciationUrl) && (
                      <div className="flex gap-3 pt-4 border-t border-white/10 flex-wrap">
                        {exp.certificateUrl && (
                          <a href={exp.certificateUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-primary hover:text-accent transition-colors flex items-center gap-1">
                            Certificate <ExternalLink size={12} />
                          </a>
                        )}
                        {exp.lorUrl && (
                          <a href={exp.lorUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-secondary hover:text-accent transition-colors flex items-center gap-1">
                            Letter of Recommendation <ExternalLink size={12} />
                          </a>
                        )}
                        {exp.promotionUrl && (
                          <a href={exp.promotionUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-emerald-400 hover:text-white transition-colors flex items-center gap-1">
                            Letter of Promotion <ExternalLink size={12} />
                          </a>
                        )}
                        {exp.appreciationUrl && (
                          <a href={exp.appreciationUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-purple-400 hover:text-white transition-colors flex items-center gap-1">
                            Letter of Appreciation <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sports & Leadership Strip */}
          <div className="w-full lg:w-80 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
              <Medal className="text-secondary" /> Sports & Awards
            </h3>
            
            {leadershipAndSports.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass p-5 rounded-xl border-l-4 hover:-translate-y-1 transition-all duration-300 ${
                  (item as any).highlight 
                    ? 'border-l-primary bg-primary/5 shadow-[0_0_15px_rgba(124,58,237,0.15)]' 
                    : 'border-l-secondary'
                }`}
              >
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                {(item as any).tags && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {(item as any).tags.map((tag: string) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300 text-[10px] uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {(item as any).certificateUrl && (
                  <a href={(item as any).certificateUrl} className="text-xs text-primary hover:text-white transition-colors flex items-center gap-1 opacity-80 hover:opacity-100 font-medium">
                    View Certificate <ExternalLink size={12} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
