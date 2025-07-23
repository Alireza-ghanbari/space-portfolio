import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    document.dir = lang === "fa" ? "rtl" : "ltr";
  };

  useEffect(() => {
    document.dir = i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div>
      <select
        id="language-select"
        value={i18n.language}
        onChange={handleLanguageChange}
        className="outline-none border-none text-forground/80 cursor-pointer"
      >
        <option value="en" className="bg-background">
          English
        </option>
        <option value="fa" className="bg-background">
          فارسی
        </option>
      </select>
    </div>
  );
}
