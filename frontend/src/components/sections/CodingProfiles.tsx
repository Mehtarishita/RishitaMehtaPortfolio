import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const CodingProfiles = () => {
  const profiles = [
    {
      name: "GitHub",
      url: "https://github.com/Mehtarishita",
      icon: <FaGithub size={32} />,
      color: "group-hover:text-white group-hover:border-white",
      bgHover: "hover:bg-white/5"
    }
  ];

  return (
    <section id="coding-profiles" className="py-12 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex justify-center w-full max-w-sm mx-auto">
          {profiles.map((profile, idx) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`glass w-full p-6 flex flex-col items-center justify-center gap-4 rounded-2xl group transition-all duration-300 border border-white/5 ${profile.bgHover}`}
            >
              <div className={`text-gray-400 transition-colors duration-300 ${profile.color.split(' ')[0]}`}>
                {profile.icon}
              </div>
              <span className="font-semibold text-gray-300 group-hover:text-white transition-colors">
                {profile.name}
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
