import { FaLaptopCode, FaBasketballBall, FaUserTie } from 'react-icons/fa';
import { MdOutlinePersonPinCircle } from 'react-icons/md';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section id="about" className=" flex items-center pt-16 ">
      <div className="container mx-auto px-6 py-10">
        <motion.h2 
          className="text-3xl md:text-4xl font-extrabold mb-6 text-center "
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-neutral text-base md:text-lg">
              Hi, I'm <span className="font-bold text-primary">Rumman Mahfuz</span>. My journey into programming started with curiosity about building websites and apps. I love crafting clean, functional user experiences.
            </p>
            <p className="text-neutral text-base md:text-lg">
              I thrive on creating dynamic, role-based applications and solving problems.
            </p>
            <p className="text-neutral text-base md:text-lg">
              Outside coding, I enjoy badminton a strategy-driven game that sharpens my problem-solving skills.
            </p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="grid gap-4 items-start"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stats shadow-md w-full bg-white rounded-lg">
              <div className="stat">
                <div className="stat-figure text-primary">
                  <FaLaptopCode size={28} />
                </div>
                <div className="stat-title">Programming Journey</div>
                <div className="stat-value text-primary">1+ Years</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-primary">
                  <FaUserTie size={28} />
                </div>
                <div className="stat-title">Work Preferences</div>
                <div className="stat-value text-primary">Frontend Dev</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-primary">
                  <FaBasketballBall size={28} />
                </div>
                <div className="stat-title">Hobbies</div>
                <div className="stat-value text-primary">Badminton</div>
              </div>
              <div className="stat">
                <div className="stat-figure text-primary">
                  <MdOutlinePersonPinCircle size={28} />
                </div>
                <div className="stat-title">Personality</div>
                <div className="stat-value text-primary">Curious & Driven</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
