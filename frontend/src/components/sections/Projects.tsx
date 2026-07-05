import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects, type Project } from '../../data/projects';
import Modal from '../ui/Modal';
import { Button } from '../ui/Button';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
              Projects & Case Studies
              <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></span>
            </h2>
            <p className="text-gray-400 max-w-xl">Deep dives into the problems I've solved, the architecture I designed, and the products I've built.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search projects..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              />
            </div>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all appearance-none"
            >
              {categories.map(cat => (
                <option key={cat} value={cat} className="bg-[#0f172a]">{cat}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel flex flex-col rounded-2xl overflow-hidden group cursor-pointer hover:border-primary/30 hover:-translate-y-2 transition-all duration-300 h-full"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-white/5 relative overflow-hidden border-b border-white/10 flex items-center justify-center">
                {project.coverImage ? (
                  <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <span className="text-gray-500 text-sm">Cover Image Placeholder</span>
                )}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-gray-500 border border-white/5">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                    >
                      <FaGithub size={14} className="mr-1.5" /> GitHub Repo
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="flex-1 text-xs"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                    >
                      <ExternalLink size={14} className="mr-1.5" /> Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No projects found matching your criteria.
          </div>
        )}

      </div>

      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="space-y-8">
            <div className="h-64 md:h-80 w-full rounded-xl bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
               {selectedProject.coverImage ? (
                  <img src={selectedProject.coverImage} alt={selectedProject.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray-500 text-sm">Cover Image / Media Gallery Placeholder</span>
                )}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <span className="text-primary font-medium text-sm mb-2 block">{selectedProject.category}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">{selectedProject.title}</h2>
              </div>
              
              <div className="flex items-center gap-3">
                {selectedProject.githubUrl && (
                  <Button variant="outline" size="sm" onClick={() => window.open(selectedProject.githubUrl, '_blank')}>
                    <FaGithub size={16} className="mr-2" /> Code
                  </Button>
                )}
                {selectedProject.liveUrl && (
                  <Button variant="primary" size="sm" onClick={() => window.open(selectedProject.liveUrl, '_blank')}>
                    <ExternalLink size={16} className="mr-2" /> Live Demo
                  </Button>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedProject.techStack.map(tech => (
                <span key={tech} className="px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium border border-white/10">
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Overview
                </h3>
                <p>{selectedProject.overview || selectedProject.shortDescription}</p>
              </div>

              {selectedProject.problemStatement && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Problem Statement
                  </h3>
                  <p>{selectedProject.problemStatement}</p>
                </div>
              )}

              {selectedProject.solution && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Solution
                  </h3>
                  <p>{selectedProject.solution}</p>
                </div>
              )}

              {selectedProject.keyFeatures.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Key Features
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-300">
                    {selectedProject.keyFeatures.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {(selectedProject.challenges || selectedProject.learnings) && (
                <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
                  {selectedProject.challenges && (
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Challenges</h4>
                      <p className="text-sm">{selectedProject.challenges}</p>
                    </div>
                  )}
                  {selectedProject.learnings && (
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">Key Learnings</h4>
                      <p className="text-sm">{selectedProject.learnings}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>

    </section>
  );
};

export default Projects;
