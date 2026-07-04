import { motion } from 'framer-motion';
import { Award, Trophy, Code, FileBadge, CheckCircle2 } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Card 1 — Published Patent */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 glass-panel rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award size={120} className="text-primary" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 border border-primary/30">
                <CheckCircle2 size={16} />
                Published Patent
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                A Smart System to Prioritize Lanes to Manage Traffic at Intersection
              </h3>
              <p className="text-accent font-medium mb-6">Indian Patent Office · Government of India</p>
              
              <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
                An AI-driven, real-time computer vision system for dynamic lane prioritization at traffic intersections.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {['AI', 'Computer Vision', 'Traffic Optimization'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Smart India Hackathon */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 glass-panel rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:border-secondary/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Trophy size={120} className="text-secondary" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-6 border border-secondary/30">
                <Trophy size={16} />
                National Runner-Up / Grand Finalist
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                Smart India Hackathon 2025
              </h3>
              <p className="text-accent font-medium mb-6">Government Ministry Problem Statement</p>
              
              <p className="text-gray-300 leading-relaxed mb-8 max-w-lg">
                Built a production-ready full-stack solution, competing against 1000+ teams nationwide.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {['MERN', 'AI', 'Government Tech'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              {/* [TO ADD LATER — photo + certificate image] */}
              <div className="w-full h-24 rounded-lg bg-white/5 border border-white/10 border-dashed flex items-center justify-center text-gray-500 text-sm">
                Media Placeholder (Photo + Certificate)
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
