import { motion } from 'framer-motion';
import { ExternalLink, FileBadge } from 'lucide-react';
import { certificates } from '../../data/certificates';

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
            Certifications
            <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:border-secondary/30 transition-all duration-300 flex flex-col"
            >
              <div className="h-40 bg-white/5 border-b border-white/10 flex items-center justify-center p-6 relative overflow-hidden">
                <FileBadge size={48} className="text-gray-600 group-hover:scale-110 transition-transform duration-500" />
                {cert.imageUrl && (
                  <img src={cert.imageUrl} alt={cert.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                )}
                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                  <FileBadge size={80} className="text-secondary" />
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">{cert.issuer}</span>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">{cert.title}</h3>
                <p className="text-sm text-gray-500 mb-6 flex-1">{cert.date}</p>
                
                <div className="flex flex-col gap-3 mt-4">
                  <a 
                    href={cert.credentialUrl || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium transition-all ${
                      cert.credentialUrl 
                        ? 'bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/20 hover:border-secondary/40' 
                        : 'bg-white/5 text-gray-500 border border-white/10 cursor-not-allowed'
                    }`}
                    onClick={(e) => !cert.credentialUrl && e.preventDefault()}
                  >
                    View Credential <ExternalLink size={14} />
                  </a>
                  
                  {cert.certificateUrl && (
                    <a 
                      href={cert.certificateUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-medium transition-all bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40"
                    >
                      View Certificate (PDF) <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;
