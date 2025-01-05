import React from "react";
import { FaFacebookF, FaTelegramPlane, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <footer className="footer footer-center  text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <p className="font-bold">Contact Me</p>
        </nav>
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
              href="https://t.me/Rummancpa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 text-2xl"
            >
              <FaTelegramPlane />
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
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Contact;
