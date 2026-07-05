import { motion } from 'framer-motion';
import { Award, Trophy, Code, FileBadge, CheckCircle2, ExternalLink } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          {/* Card 1 — Smart India Hackathon */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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

              <div className="mt-4 flex flex-wrap gap-3">
                <a 
                  href="https://www.linkedin.com/posts/rishitamehta29_sih2025-smartindiahackathon-teamgati-ugcPost-7404973057649369089-NH6n/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuGxWEB7cMuUr7wXox0zvl0yTWyrdY2YJA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/30 rounded-lg transition-colors font-medium text-sm"
                >
                  <ExternalLink size={16} />
                  View Post
                </a>
                <a 
                  href="/sih-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg transition-colors font-medium text-sm"
                >
                  <Award size={16} />
                  View Certificate
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Published Patent */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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

              <div className="mt-6 flex flex-col gap-3">
                <div className="text-sm text-gray-400">
                  Application No: <span className="font-mono text-primary">202621006540</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a 
                    href="https://iprsearch.ipindia.gov.in/PublicSearch/PublicationSearch/ApplicationStatus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg transition-colors font-medium text-sm"
                  >
                    <ExternalLink size={16} />
                    View Application Status
                  </a>
                  <a 
                    href="/patent-status.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/30 rounded-lg transition-colors font-medium text-sm"
                  >
                    <FileBadge size={16} />
                    View Patent Details
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
