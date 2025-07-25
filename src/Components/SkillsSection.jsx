import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";

export default function SkillsSection() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const skills = [
    // Frontend
    { name: "HTML/CSS", level: 100, category: t("frontend") },
    { name: "JavaScript", level: 90, category: t("frontend") },
    { name: "TypeScript", level: 35, category: t("frontend") },
    { name: "Next.js", level: 60, category: t("frontend") },
    { name: "React", level: 95, category: t("frontend") },
    { name: "tailwind CSS", level: 90, category: t("frontend") },
    { name: "Material UI", level: 50, category: t("frontend") },
    // Backend
    { name: "Node.js", level: 80, category: t("backend") },
    { name: "Express", level: 75, category: t("backend") },
    { name: "MongoDB", level: 70, category: t("backend") },
    // Tools & Others
    { name: "Git/Github", level: 80, category: t("tools / Others") },
    { name: "VS Code", level: 95, category: t("tools / Others") },
    { name: "figma", level: 30, category: t("tools / Others") },
    { name: "C/C++", level: 35, category: t("tools / Others") },
    { name: "Python", level: 40, category: t("tools / Others") },
    {
      name: "Adobe Premiere/Photoshop",
      level: 60,
      category: t("tools / Others"),
    },
  ];

  const categories = [
    `${t("all")}`,
    `${t("frontend")}`,
    `${t("backend")}`,
    `${t("tools / Others")}`,
  ];

  const [activeCategory, setActiveCategory] = useState(t("all"));

  useEffect(() => {
    setActiveCategory(t("all"));
  }, [lang]);

  const filterdSkills = skills.filter(
    (skill) => activeCategory === t("all") || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {lang == "en" ? (
            <span>
              {t("My")} <span className="text-primary">{t("Skills")}</span>
            </span>
          ) : (
            <span>
              <span className="text-primary">{t("Skills")}</span> {t("My")}
            </span>
          )}
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-forground"
                  : "bg-primary/10 text-forground hover:bg-primary/30"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterdSkills.map((skill, key) => (
            <div key={key} className="bg-card p-6 rounded-lg card-hover">
              <div className="text-start mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full h-2 bg-primary/10 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{
                    width: skill.level + "%",
                  }}
                />
              </div>
              <div className="text-end mt-1">
                <span className="text-sm text-forground">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
