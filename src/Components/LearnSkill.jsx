import {
    SiPython,
    SiDjango,
    SiTypescript,
    SiMongodb,
    SiAwsamplify,
  } from "react-icons/si"; // AWS icon corrected
  import { FaCube } from "react-icons/fa"; // For Headless UI
import { RiNextjsFill } from "react-icons/ri";
  
  const LearnSkill = () => {
    const learnSkills = [
      { id: 1, name: "Python", icon: <SiPython className="text-blue-600 text-5xl" /> },
      { id: 1, name: "Next.js", icon: <RiNextjsFill className="text-blue-600 text-5xl" /> },
      // { id: 2, name: "Django", icon: <SiDjango className="text-green-600 text-5xl" /> },
      // { id: 3, name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-5xl" /> },
      // { id: 4, name: "Mongoose", icon: <SiMongodb className="text-green-600 text-5xl" /> },
      { id: 5, name: "Headless UI", icon: <FaCube className="text-purple-500 text-5xl" /> },
      // { id: 6, name: "AWS", icon: <SiAwsamplify className="text-yellow-500 text-5xl" /> },
    ];
  
    return (
      <div className=" py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 animate-bounce">
            Currently Learning
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 item-center">
            {learnSkills.map((skill) => (
              <div
                key={skill.id}
                className="card shadow-md bg-white p-6 flex flex-col items-center justify-center group transition-transform duration-300 hover:scale-110 hover:bg-blue-50"
              >
                <div className="animate-pulse group-hover:animate-spin">{skill.icon}</div>
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
  
  export default LearnSkill;
  

  