import { FaArrowRight } from "react-icons/fa";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    id: 12,
    title: "Razer Shop (MERN) - in progress...",
    description: "",
    image: "/projects/razer.png",
    tags: [
      "React",
      "TailwindCss",
      "Gsap",
      "Three.js",
      "i18",
      "Atropos",
      "Chart.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Multer",
    ],
    demoUrl: "/not-found",
    githubUrl: "https://github.com/MDJAmin/razer-mern-shop",
  },
  {
    id: 8,
    title: "Real Estate App (MERN)",
    description: "",
    image: "/projects/alirezaEstate.png",
    tags: ["React", "TailwindCss", "Firebase", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://mern-estate-farsi.onrender.com",
    githubUrl: "https://github.com/Alireza-ghanbari/mern-estate-farsi",
  },
  {
    id: 10,
    title: "Blog App (MERN)",
    description: "",
    image: "/projects/blogApp.png",
    tags: [
      "React",
      "TailwindCss",
      "Flowbite React",
      "React Quill",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    demoUrl: "https://mern-blog-8v7r.onrender.com/",
    githubUrl: "https://github.com/Alireza-ghanbari/mern-blog",
  },
  {
    id: 9,
    title: "Notes App (MERN)",
    description: "",
    image: "/projects/notesApp.png",
    tags: ["React", "TailwindCss", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://notes-app-qun6.onrender.com/",
    githubUrl: "https://github.com/Alireza-ghanbari/notes-app",
  },
  {
    id: 11,
    title: "X Clone (MERN)",
    description: "",
    image: "/projects/twitter.png",
    tags: [
      "React",
      "TailwindCss",
      "Daisy UI",
      "Cloudinary",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    demoUrl: "https://mern-twitter-clone-7ivv.onrender.com",
    githubUrl: "https://github.com/Alireza-ghanbari/mern-twitter-clone",
  },
  {
    id: 7,
    title: "Apple Store",
    description: "",
    image: "/projects/project7.png",
    tags: ["React", "TailwindCss", "Gsap", "Three.js"],
    demoUrl: "https://apple-website-weld-five.vercel.app/",
    githubUrl: "https://github.com/Alireza-ghanbari/apple-website",
  },
  {
    id: 1,
    title: "Cuctos Shop",
    description: "",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCss", "Framer Motion"],
    demoUrl: "https://cactus-shop-ten.vercel.app",
    githubUrl: "https://github.com/Alireza-ghanbari/cactus-shop",
  },
  {
    id: 3,
    title: "Fast Food Delivery App",
    description: "",
    image: "/projects/project3.png",
    tags: ["HTML / CSS", "JavaScript", "TailwindCss", "Framer Motion"],
    demoUrl: "https://burger-shop-kappa.vercel.app",
    githubUrl: "https://github.com/Alireza-ghanbari/burger-shop",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description: "",
    image: "/projects/project4.png",
    tags: ["React", "TailwindCss", "Framer Motion"],
    demoUrl: "https://simple-portfolio-delta-jet.vercel.app/",
    githubUrl: "https://github.com/Alireza-ghanbari/simple-portfolio",
  },
  {
    id: 5,
    title: "Recipe App",
    description: "",
    image: "/projects/project5.png",
    tags: ["React", "TailwindCss", "Framer Motion"],
    demoUrl: "https://recipe-app-one-ashy.vercel.app/",
    githubUrl: "https://github.com/Alireza-ghanbari/recipe-app",
  },
  {
    id: 2,
    title: "Buger King",
    description: "",
    image: "/projects/project2.png",
    tags: ["HTML / CSS", "JavaScript", "Bootstrap"],
    demoUrl: "https://bootstrap-project-brown.vercel.app",
    githubUrl: "https://github.com/Alireza-ghanbari/bootstrap-project",
  },
  {
    id: 6,
    title: "Virtualr Landing",
    description: "",
    image: "/projects/project6.png",
    tags: ["React", "TailwindCss", "Framer Motion"],
    demoUrl: "https://virtualr-landing-page.vercel.app/",
    githubUrl: "https://github.com/Alireza-ghanbari/Virtualr-landingPage",
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

              <div className="px-4 py-6 flex flex-col h-80 justify-between">
                <div>
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

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                </div>
                <p className="text-forground text-sm tracking-tight mb-4">
                  {project.description}
                </p>
                <div className="flex justify-start items-end">
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
