import { FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { RiInstagramFill, RiSendPlaneFill } from "react-icons/ri";
import { cn } from "../lib/utils";
import { useTranslation } from "react-i18next";

export default function ContactSection() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const handleSubmit = (e) => {
    e.perventDefault();
    setTimeout(() => {}, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("Get In")} <span className="text-primary">{t("Touch")}</span>
        </h2>

        <p className="text-center text-forground mb-12 max-w-2xl mx-auto">
          {t(
            "Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities."
          )}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {t("Contact information")}
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <IoMailOutline className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">{t("Email")}</h4>
                  <a
                    href="mailto:alirezaghanbari.dev@gmail.com"
                    className="text-forground hover:text-primary transition-colors"
                  >
                    alirezaghanbari.dev@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <FiPhone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">{t("Phone")}</h4>
                  <a
                    href="tel:+989385229846"
                    className="text-forground hover:text-primary transition-colors"
                    id="phone"
                  >
                    +98 938 522 9846
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <IoLocationOutline className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">{t("Location")}</h4>
                  <a className="text-forground hover:text-primary transition-colors">
                    {t("Iran, Mashhad")}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="text-2xl font-semibold mb-6">
                {t("Connect With Me")}
              </h4>
              <div className="flex space-x-4 justify-center text-2xl">
                <a
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/alireza.ghnbrii"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <RiInstagramFill />
                </a>
                <a
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <FaXTwitter />
                </a>
                <a
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  <FaDiscord />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">
              {t("Send a Message")}
            </h3>
            <form action="" onSubmit={handleSubmit} className="space-y-6">
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("Your Name")}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary"
                  placeholder={
                    lang == "en" ? "Amir Mohammadi..." : "امیر محمدی..."
                  }
                />
              </div>
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("Your Email")}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary"
                  placeholder="Amirmhd@gmail.com"
                />
              </div>
              <div className="">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("Your Message")}
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-1 focus:ring-primary resize-none min-h-32"
                  placeholder={t("Hello, I'd like to talk about...")}
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button hover:scale-100 w-full flex items-center justify-center gap-2",
                  "disabled:opacity-50"
                )}
                disabled
              >
                {t("Send Message")}
                <RiSendPlaneFill size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
