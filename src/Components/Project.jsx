import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";

const projects = [
  {
    id: 1,
    image: "https://i.ibb.co.com/pzJHVPh/1.png",
    liveLink: "https://foodsharing-74e03.web.app",
    clientGitHub: "https://github.com/rumman321/foodSharing-client",
    serverGitHub: "https://github.com/rumman321/foodSharing-server",
    title: "Food Sharing",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/hgf0qdj/2.png",
    liveLink: "https://job-portal-a085e.web.app",
    clientGitHub: "https://github.com/rumman321/job-protal",
    serverGitHub: "https://github.com/rumman321/job-portal-server",
    title: "Job Portal",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/NtGkfgC/3.png",
    liveLink: "https://movie-b4d29.web.app",
    clientGitHub: "https://github.com/rumman321/movies-client",
    serverGitHub: "https://github.com/rumman321/movies-server",
    title: "Movie Site",
  },
  // Add more projects as needed
];

const Project = () => {
    const handleView=()=>{
        toast.error("Working On It")
    }
  return (
    <div className="p-4">
      <h1 className="text-4xl text-center mb-8 font-bold">My Recent Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card bg-base-100 shadow-xl border border-gray-200"
          >
            <figure>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <div className="flex justify-between items-center mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary flex items-center gap-2"
                >
                  <FiExternalLink size={20} />
                  Live Demo
                </a>
                <div className="flex space-x-4">
                  <a
                    href={project.clientGitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary flex items-center gap-2"
                  >
                    <FaGithub size={20} />
                    Client
                  </a>
                  <a
                    href={project.serverGitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary flex items-center gap-2"
                  >
                    <FaGithub size={20} />
                    Server
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
      <button onClick={handleView} className=" btn font-bold"> View More</button>
      </div>
    </div>
  );
};

export default Project;
