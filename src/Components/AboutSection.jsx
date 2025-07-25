import { useTranslation } from "react-i18next";
import { IoIosCode } from "react-icons/io";
import { LuBriefcase, LuUser } from "react-icons/lu";

export default function AboutSection() {
  const { t, i18n } = useTranslation();
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("About")} <span className="text-primary">{t("Me")}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {t("Passionate Developer & Tech Creator")}
            </h3>
            <p className="text-forground">{t("about1")}</p>

            <p className="text-forground">{t("about2")}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button hover:scale-100">
                {t("Get In Touch")}
              </a>
              <a
                href="https://drive.google.com/file/d/1eooM-lVZz871KUE17m4HiSJqN03gasHE/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {t("See My CV")}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border py-6 px-2 sm:p-6 card-hover">
              <div className="flex items-start gap-2 sm:gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <IoIosCode className="h-6 w-6 text-primary" />
                </div>
                <div className="text-start">
                  <h4 className="font-semibold text-lg">
                    {t("Web Development")}
                  </h4>
                  <p className="text-forground">
                    {t(
                      "Creating responsive websites and web applications with modern frameworks."
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border py-6 px-2 sm:p-6 card-hover">
              <div className="flex items-start gap-2 sm:gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <LuUser className="h-6 w-6 text-primary" />
                </div>
                <div className="text-start">
                  <h4 className="font-semibold text-lg">{t("UI/UX Design")}</h4>
                  <p className="text-forground">
                    {t(
                      "Designing intuitive user interface and seamless user experiences."
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border py-6 px-2 sm:p-6 card-hover">
              <div className="flex items-start gap-2 sm:gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <LuBriefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-start">
                  <h4 className="font-semibold text-lg">
                    {t("Project Management")}
                  </h4>
                  <p className="text-forground">
                    {t(
                      "leading projects from conception to completion with agile methodologies."
                    )}
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
