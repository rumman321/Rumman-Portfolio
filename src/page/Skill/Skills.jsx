import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { motion } from "framer-motion";

const skillsData = {
  frontend: [
    { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
    { id: 2, name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
    { id: 3, name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-6xl" /> },
    { id: 4, name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-6xl" /> },
    { id: 5, name: "React.js", icon: <FaReact className="text-blue-400 text-6xl" /> },
  ],
  backend: [
    { id: 6, name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
    { id: 7, name: "Express.js", icon: <SiExpress className="text-gray-700 text-6xl" /> },
    { id: 8, name: "MongoDB", icon: <SiMongodb className="text-green-600 text-6xl" /> },
    { id: 9, name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-6xl" /> },
  ],
  tools: [
    { id: 10, name: "GitHub", icon: <FaGithub className="text-gray-800 text-6xl" /> },
    { id: 11, name: "Vercel", icon: <SiVercel className="text-black text-6xl" /> },
    { id: 12, name: "Netlify", icon: <SiNetlify className="text-blue-600 text-6xl" /> },
    { id: 13, name: "NPM", icon: <FaNpm className="text-red-500 text-6xl" /> },
  ],
};

const Skills = () => {
  return (
    <div className="py-16 ">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-12 "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        {Object.keys(skillsData).map((category) => (
          <div key={category} className="mb-12">
            <motion.h3
              className="text-3xl font-semibold mb-8 capitalize text-primary text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {category} Skills
            </motion.h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {skillsData[category].map((skill) => (
                <motion.div
                  key={skill.id}
                  className="card bg-white shadow-xl p-8 flex flex-col items-center justify-center group hover:scale-105 transition-transform duration-300 rounded-2xl border border-blue-100 hover:bg-gradient-to-r from-blue-50 to-teal-50"
                  whileHover={{ rotate: [0, 3, -3, 0] }}
                >
                  <div>{skill.icon}</div>
                  <p className="text-xl font-semibold mt-4 group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;