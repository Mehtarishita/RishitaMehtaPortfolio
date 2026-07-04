import { motion } from 'framer-motion';
import { Code2, Terminal } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const CodingProfiles = () => {
  const profiles = [
    {
      name: "GitHub",
      url: "https://github.com/Mehtarishita",
      icon: <FaGithub size={32} />,
      color: "group-hover:text-white group-hover:border-white",
      bgHover: "hover:bg-white/5"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/rishitaa_mehta/",
      icon: <Code2 size={32} />,
      color: "group-hover:text-[#FFA116] group-hover:border-[#FFA116]",
      bgHover: "hover:bg-[#FFA116]/5"
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/profile/rishitamm033",
      icon: <Terminal size={32} />,
      color: "group-hover:text-[#2F8D46] group-hover:border-[#2F8D46]",
      bgHover: "hover:bg-[#2F8D46]/5"
    }
  ];

  return (
    <section id="coding-profiles" className="py-12 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
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
              className={`glass p-6 flex flex-col items-center justify-center gap-4 rounded-2xl group transition-all duration-300 border border-white/5 ${profile.bgHover}`}
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
