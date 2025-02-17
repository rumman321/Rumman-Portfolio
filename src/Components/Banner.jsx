import React, { useState } from "react";
import img from "../assets/rumman.jpeg";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaEnvelope,
  FaFileDownload,
  FaGithub,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const words = [
    "Rumman Mahfuz",
    "Front-end Web Developer",
    "Rumman Mahfuz",
    "Front-end Web Developer",
  ];
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ["red", "green"]; // Array of colors to alternate between

  const handleType = (count) => {
    setColorIndex(count % colors.length); // Switch color on each new word
  };

  const handleDone = () => {
    console.log("Done after 5 loops!");
  };
  return (
    <div>
      <div className="mt-8">
        <div className="flex flex-col-reverse lg:flex-row-reverse items-center lg:justify-around py-8 gap-10 lg:gap-20">
          <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl group-hover:scale-110 transition"
            alt="Rumman Mahfuz"
          />
          <div className="text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold">Hi, I am</h3>
            <h1 className="text-3xl py-5 sm:text-4xl font-bold text-center">
              <span style={{ color: colors[colorIndex], fontWeight: "bold" }}>
                <Typewriter
                  words={words}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </span>
            </h1>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1quT29DWxtCWF30NiuxwpAgXjkAUnfsS3/view?usp=sharing"
              className="btn btn-primary gap-2"
            >
              <FaFileDownload /> Download Resume
            </a>

            <div className="flex justify-center lg:justify-start space-x-4 mt-6">
              <a
                href="https://www.facebook.com/rumman.mahfuz.2024?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-2xl"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://github.com/rumman321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-back-400 hover:text-blue-600 text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rumman-mahfuz-99a59426a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 text-2xl"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="mailto:rrmahfuz5@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-700 text-2xl"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
