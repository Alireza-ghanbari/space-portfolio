import { FaArrowRight } from "react-icons/fa";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    id: 12,
    title: "Razer Shop (MERN) - in progress...",
    description:
      "For more details, check out the project on GitHub. - Live demo is currently unavailable",
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
    description:
      "Estate Farsi is a full-stack real estate app with property listings, auth, and Persian language support. Built with MongoDB, Express, React, and Node.js, it features a responsive, user-friendly UI.",
    image: "/projects/alirezaEstate.png",
    tags: [
      "React",
      "TailwindCss",
      "Firebase",
      "Redux",
      "Swiper",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    demoUrl: "https://mern-estate-farsi.onrender.com",
    githubUrl: "https://github.com/Alireza-ghanbari/mern-estate-farsi",
  },
  {
    id: 10,
    title: "Blog App (MERN)",
    description:
      "MERN Blog is a full-stack blogging platform with user authentication and CRUD post management. Built with MongoDB, Express, React, and Node.js, it features a clean, responsive UI.",
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
    description:
      "Notes App is a full-stack MERN application for creating, editing, and deleting notes with persistent storage. It includes user authentication, a clean responsive UI, and securely stores notes in MongoDB, using React frontend and Express/Node.js backend.",
    image: "/projects/notesApp.png",
    tags: ["React", "TailwindCss", "Axios", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://notes-app-qun6.onrender.com/",
    githubUrl: "https://github.com/Alireza-ghanbari/notes-app",
  },
  {
    id: 11,
    title: "X Clone (MERN)",
    description:
      "A full-stack Twitter clone built with the MERN stack. It includes user authentication, tweet creation, likes, and follows, featuring a clean, responsive UI and real-time interactions.",
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
    description:
      "Apple Website is a responsive React app styled with Tailwind CSS, featuring product showcases and smooth navigation. It uses Three.js for 3D visuals and GSAP for animations, delivering an engaging and interactive user experience.",
    image: "/projects/project7.png",
    tags: ["React", "TailwindCss", "Gsap", "Three.js"],
    demoUrl: "https://apple-website-weld-five.vercel.app/",
    githubUrl: "https://github.com/Alireza-ghanbari/apple-website",
  },
  {
    id: 1,
    title: "Cuctos Shop",
    description:
      "Cactus Shop is a responsive e-commerce landing page built with React and Tailwind CSS. It features plant products, promotions, and contact info in a clean, modern UI. The app uses React components and Tailwind’s utility-first styling for a smooth, interactive user experience.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCss", "Framer Motion"],
    demoUrl: "https://cactus-shop-ten.vercel.app",
    githubUrl: "https://github.com/Alireza-ghanbari/cactus-shop",
  },
  {
    id: 3,
    title: "Fast Food Delivery App",
    description:
      "Burger Shop is a modern, responsive landing page for a fictional burger restaurant, built with HTML, Tailwind CSS, and JavaScript. It features a clean design with bold visuals, a call-to-action, featured menu items, and contact info, optimized for all devices.",
    image: "/projects/project3.png",
    tags: ["HTML / CSS", "JavaScript", "TailwindCss", "Framer Motion"],
    demoUrl: "https://burger-shop-kappa.vercel.app",
    githubUrl: "https://github.com/Alireza-ghanbari/burger-shop",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description:
      "This Simple Portfolio is a clean, responsive portfolio website built using React and Tailwind CSS. It serves as a personal branding site, showcasing a developer's skills, projects, and contact information in a modern and visually appealing layout.",
    image: "/projects/project4.png",
    tags: ["React", "TailwindCss", "Framer Motion"],
    demoUrl: "https://simple-portfolio-delta-jet.vercel.app/",
    githubUrl: "https://github.com/Alireza-ghanbari/simple-portfolio",
  },
  {
    id: 5,
    title: "Recipe App",
    description:
      "A dynamic web application built with React. It fetches real-time recipe data from an external API and displays it in a clean, responsive interface. Users can search for recipes and view details like ingredients, preparation steps, and images. The app features a component-based architecture and works seamlessly across devices. ",
    image: "/projects/project5.png",
    tags: ["React", "TailwindCss", "Framer Motion"],
    demoUrl: "https://recipe-app-one-ashy.vercel.app/",
    githubUrl: "https://github.com/Alireza-ghanbari/recipe-app",
  },
  {
    id: 2,
    title: "Buger King",
    description:
      "This project is a responsive, multi-section website built using HTML, CSS, and Bootstrap 5. It demonstrates fundamental web development skills and showcases how to effectively use Bootstrap's grid system, components, and utilities to create a polished, mobile-friendly layout.",
    image: "/projects/project2.png",
    tags: ["HTML / CSS", "JavaScript", "Bootstrap"],
    demoUrl: "https://bootstrap-project-brown.vercel.app",
    githubUrl: "https://github.com/Alireza-ghanbari/bootstrap-project",
  },
  {
    id: 6,
    title: "Virtualr Landing",
    description:
      "Virtualr Landing Page is a modern and responsive single-page application built using React and Tailwind CSS. It serves as the front-facing website for a virtual reality (VR) focused product or service, showcasing features, testimonials, and call-to-action elements designed to attract users and convey the brand's innovative edge.",
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

              <div className="px-4 py-6 flex flex-col h-[360px] sm:h-[340px] justify-between">
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
