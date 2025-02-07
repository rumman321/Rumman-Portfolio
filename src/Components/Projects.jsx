// import React from "react";
// import { FiExternalLink } from "react-icons/fi";
// import { FaGithub } from "react-icons/fa";
// import toast from "react-hot-toast";

// const projects = [
//   {
//     id: 1,
//     image: "https://i.ibb.co.com/pzJHVPh/1.png",
//     liveLink: "https://foodsharing-74e03.web.app",
//     clientGitHub: "https://github.com/rumman321/foodSharing-client",
//     serverGitHub: "https://github.com/rumman321/foodSharing-server",
//     title: "Food Sharing",
//   },
//   {
//     id: 2,
//     image: "https://i.ibb.co.com/hgf0qdj/2.png",
//     liveLink: "https://job-portal-a085e.web.app",
//     clientGitHub: "https://github.com/rumman321/job-protal",
//     serverGitHub: "https://github.com/rumman321/job-portal-server",
//     title: "Job Portal",
//   },
//   {
//     id: 3,
//     image: "https://i.ibb.co.com/NtGkfgC/3.png",
//     liveLink: "https://movie-b4d29.web.app",
//     clientGitHub: "https://github.com/rumman321/movies-client",
//     serverGitHub: "https://github.com/rumman321/movies-server",
//     title: "Movie Site",
//   },
//   // Add more projects as needed
// ];

// const Project = () => {
//     const handleView=()=>{
//         toast.error("Working On It")
//     }
//   return (
//     <div className="p-4">
//       <h1 className="text-4xl text-center mb-8 font-bold">My Recent Projects</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="card bg-base-100 shadow-xl border border-gray-200"
//           >
//             <figure>
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-48 object-cover"
//               />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title">{project.title}</h2>
//               <div className="flex justify-between items-center mt-4">
//                 <a
//                   href={project.liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn btn-primary flex items-center gap-2"
//                 >
//                   <FiExternalLink size={20} />
//                   Live Demo
//                 </a>
//                 <div className="flex space-x-4">
//                   <a
//                     href={project.clientGitHub}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn btn-secondary flex items-center gap-2"
//                   >
//                     <FaGithub size={20} />
//                     Client
//                   </a>
//                   <a
//                     href={project.serverGitHub}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="btn btn-secondary flex items-center gap-2"
//                   >
//                     <FaGithub size={20} />
//                     Server
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="text-center mt-10">
//       <button onClick={handleView} className=" btn font-bold"> View More</button>
//       </div>
//     </div>
//   );
// };

// export default Project;

import { useEffect, useState } from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    fetch('/projects.json')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <section id="projects" className="py-20 " data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={project.project_img} alt={project.project_name} 
                     className="h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{project.project_name}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technology_used.map((tech, i) => (
                    <div key={i} className="badge badge-outline">{tech}</div>
                  ))}
                </div>
                <div className="card-actions justify-end mt-4">
                  <button 
                    className="btn btn-primary"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="modal modal-open">
            <div className="modal-box max-w-2xl">
              <h3 className="font-bold text-2xl">{selectedProject.project_name}</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <img src={selectedProject.project_img} 
                       alt={selectedProject.project_name}
                       className="rounded-lg shadow" />
                </div>
                
                <div className="space-y-4">
                  <p>{selectedProject.project_details}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-bold">Technology Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technology_used.map((tech, i) => (
                        <div key={i} className="badge badge-primary">{tech}</div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold">Links:</h4>
                    <div className="flex gap-4">
                      <a href={selectedProject.project_link}
                         target="_blank"
                         rel="noreferrer"
                         className="btn btn-sm btn-outline">
                        <FiExternalLink className="mr-2" /> Live Demo
                      </a>
                      <a href={selectedProject.github_clientSide}
                         target="_blank"
                         rel="noreferrer"
                         className="btn btn-sm btn-outline">
                        <FiGithub className="mr-2" /> Client Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h4 className="font-bold">Challenges Faced:</h4>
                  <p>{selectedProject.challenges}</p>
                </div>
                
                <div>
                  <h4 className="font-bold">Future Improvements:</h4>
                  <ul className="list-disc pl-6">
                    {selectedProject.Potential_improvements.map((imp, i) => (
                      <li key={i}>{imp}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modal-action">
                <button 
                  className="btn btn-warning"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}