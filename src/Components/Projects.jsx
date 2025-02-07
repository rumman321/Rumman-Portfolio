// 
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
                  className="btn"
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