import React from "react";
import { FaFacebookF, FaTelegramPlane, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <footer className="footer footer-center  py-12 px-8">
        {/* Contact Title */}
        <nav className="text-3xl font-extrabold text-primary mb-6">
          Contact Me
        </nav>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://www.facebook.com/rumman.mahfuz.2024?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-4xl transition-transform duration-300 hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://t.me/Rummancpa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 text-4xl transition-transform duration-300 hover:scale-110"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://www.linkedin.com/in/rumman-mahfuz-99a59426a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 text-4xl transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:rrmahfuz5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-700 text-4xl transition-transform duration-300 hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright Section */}
        <aside className="mt-8">
          <p className="text-gray-700 font-medium">
            Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
            <span className="text-primary font-semibold">
              Rumman Mahfuz
            </span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Contact;
