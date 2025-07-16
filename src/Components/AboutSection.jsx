import { CiUser } from "react-icons/ci";
import { IoIosCode } from "react-icons/io";
import { LuBriefcase, LuUser } from "react-icons/lu";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Developer & Tech Creator
            </h3>
            <p className="text-forground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit
              veniam dolor ducimus voluptate quisquam consequatur quas illo
              suscipit tempore.
            </p>

            <p className="text-forground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              dolore vitae nobis fugit saepe. Amet?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button hover:scale-100">
                Get In Touch
              </a>
              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                See My CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <IoIosCode className="h-6 w-6 text-primary" />
                </div>
                <div className="text-start">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-forground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <LuUser className="h-6 w-6 text-primary" />
                </div>
                <div className="text-start">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-forground">
                    Designing intuitive user interface and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <LuBriefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-start">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-forground">
                    leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
