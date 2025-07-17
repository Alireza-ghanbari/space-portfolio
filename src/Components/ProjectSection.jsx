import { FaArrowRight } from "react-icons/fa";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "project One",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quod!",
    image: "/projects/project1.jpg",
    tags: ["React", "TailwindCss"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "project two",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quod!",
    image: "/projects/project1.jpg",
    tags: ["React", "TailwindCss"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "project three",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quod!",
    image: "/projects/project1.jpg",
    tags: ["React", "TailwindCss"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-forground mb-12 max-w-2xl mx-auto">
          A selection of my recent work built with clean code, modern tools, and
          real-world functionality.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="px-4 py-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs text-forground font-medium rounded-full border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-forground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-forground/80 hover:text-primary transition-colors duration-300 flex items-center justify-center gap-1"
                    >
                      <FiExternalLink size={20} />
                      <span className="text-sm">Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-forground/80 hover:text-primary transition-colors duration-300 flex items-center justify-center gap-1"
                    >
                      <FiGithub size={20} />
                      <span className="text-sm">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Alireza-ghanbari"
            target="_black"
            className="cosmic-button w-fit flex items-center mx-auto gap-2 hover:scale-100"
          >
            Check My Github <FaArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
