import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 inline-block relative">
            Technical Skills
            <span className="absolute -bottom-2 left-0 w-1/2 md:w-3/4 h-1 bg-gradient-to-r from-secondary to-transparent rounded-full mx-auto md:mx-0"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl group hover:-translate-y-1 hover:border-white/20 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
            >
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-accent transition-colors">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium group-hover:border-white/20 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <skill.icon size={16} className="text-accent/70" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
