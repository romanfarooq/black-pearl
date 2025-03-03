import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#2a2d43] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Company Info Section */}
          <div className="flex-1">
            <div className="mb-6 flex items-center">
              <img src="/src/assets/images/logo.webp" alt="logo" />
            </div>
            <p className="mb-6 text-justify text-sm leading-relaxed">
              {t("footer.company_info")}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-gray-400" />
                <span className="text-sm">{t("footer.address")}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-gray-400" />
                <span dir="ltr" className="text-sm">
                  (+966) 50 711 6423
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-400" />
                <span dir="ltr" className="text-xs sm:text-sm">
                  muhammmadmusaffa@theblackpearlsa.com
                </span>
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="bg-orange-500 p-2 text-white hover:bg-orange-600"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="#"
                className="bg-orange-500 p-2 text-white hover:bg-orange-600"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="#"
                className="bg-orange-500 p-2 text-white hover:bg-orange-600"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href="#"
                className="bg-orange-500 p-2 text-white hover:bg-orange-600"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex-1">
            <h3 className="mb-6 text-xl font-bold text-white md:my-6">
              {t("footer.quick_links.title")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-orange-500"
                >
                  <span className="text-orange-500">›</span>
                  <span>{t("footer.quick_links.home")}</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-orange-500"
                >
                  <span className="text-orange-500">›</span>
                  <span>{t("footer.quick_links.about")}</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-orange-500"
                >
                  <span className="text-orange-500">›</span>
                  <span>{t("footer.quick_links.services")}</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-orange-500"
                >
                  <span className="text-orange-500">›</span>
                  <span>{t("footer.quick_links.projects")}</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-orange-500"
                >
                  <span className="text-orange-500">›</span>
                  <span>{t("footer.quick_links.contact")}</span>
                </a>
              </li>
            </ul>

            {/* Newsletter Section */}
            <div className="mt-8">
              <h3 className="mb-6 text-xl font-bold text-white">
                {t("footer.newsletter.title")}
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder={t("footer.newsletter.placeholder")}
                  className="w-full rounded-none border border-gray-700 bg-transparent bg-white px-4 py-6 text-gray-700 focus:border-orange-500 focus:outline-hidden"
                />
                <button className="bg-orange-500 px-6 py-6 text-nowrap text-white hover:bg-orange-600">
                  {t("footer.newsletter.signup")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative border-t border-gray-800 bg-[#2a2d43]">
        <div className="container mx-auto px-4 py-6">
          <div className="text-sm">
            ©{" "}
            <span className="text-orange-500">
              {t("footer.rights_company")}
            </span>
            {t("footer.rights_statement")}
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute end-6 bottom-4 bg-orange-500 p-3 text-white hover:bg-orange-600"
        >
          <FaArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
