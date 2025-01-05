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
  
  const Skills = () => {
    const skills = [
      { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
      { id: 2, name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
      { id: 3, name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-5xl" /> },
      { id: 4, name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-5xl" /> },
      { id: 5, name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
      { id: 6, name: "React.js", icon: <FaReact className="text-blue-400 text-5xl" /> },
      { id: 7, name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
      { id: 8, name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-5xl" /> },
      { id: 9, name: "Express.js", icon: <SiExpress className="text-gray-700 text-5xl" /> },
      { id: 10, name: "GitHub", icon: <FaGithub className="text-gray-800 text-5xl" /> },
      { id: 11, name: "Vercel", icon: <SiVercel className="text-black text-5xl" /> },
      { id: 12, name: "Netlify", icon: <SiNetlify className="text-blue-600 text-5xl" /> },
      { id: 13, name: "NPM", icon: <FaNpm className="text-red-500 text-5xl" /> },
    ];
  
    return (
      <div className="py-12 ">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title with bounce animation */}
          <h2 className="text-4xl font-bold text-center mb-8 animate-bounce">
            My Skills
          </h2>
          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="card shadow-md bg-white p-6 flex flex-col items-center justify-center group transition-transform duration-300 hover:scale-110 hover:bg-blue-50"
              >
                {/* Icon with animation */}
                <div className="animate-pulse group-hover:animate-spin">
                  {skill.icon}
                </div>
                {/* Skill Name */}
                <p className="text-lg font-semibold mt-4 group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;
  