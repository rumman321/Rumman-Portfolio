import React, { useRef } from "react";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  console.log(form);

  const emailSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className=" ">
      <nav className="text-4xl shadow-xl rounded-md py-2 font-extrabold text-center text-black mb-6">
        Contact Me
      </nav>
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-full md:w-1/2">
          <form className=" p-6 rounded-lg shadow-lg" ref={form} onSubmit={emailSubmit}>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="input input-bordered w-full mb-4"
            />

            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="input input-bordered w-full mb-4"
            />

            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              placeholder="Type Message"
              name="message"
              className="textarea textarea-bordered w-full mb-4"
            ></textarea>

            <button className="btn btn-primary font-bold text-white w-full">
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center gap-2 mb-4">
            <span>📞</span>
            <span>+8801872562829</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-red-500">
              <FaEnvelope />
            </span>
            <span>rrmahfuz5@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-red-500">
              {" "}
              <FaLocationArrow></FaLocationArrow>
            </span>
            <span>Mohammadpur,Dhaka, Bangladesh</span>
          </div>
        </div>
      </div>
      <footer className="footer footer-center py-12 px-8">
        <aside className="mt-8">
          <p className="text-gray-700 font-medium">
            Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
            <span className="text-primary font-semibold">Rumman Mahfuz</span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Contact;
