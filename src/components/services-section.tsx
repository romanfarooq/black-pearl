import { Building, Home, PenTool, Palette, Settings, Pin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const ServiceCard = ({
  title,
  icon: Icon,
  description,
  index,
}: {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  index: number;
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
      className="group flex flex-col overflow-hidden bg-white shadow-lg"
    >
      <div className="relative w-full">
        <motion.img
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          src={`/src/assets/images/service-${index + 1}.jpg`}
          alt={title}
          className="h-48 w-full object-cover"
        />
        <div className="absolute -bottom-12 left-1/2 z-10 -translate-x-1/2">
          <div className="rounded-full bg-white p-6 transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-10 w-10 text-orange-500" />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        className="flex flex-col h-full w-full px-6 pb-6 pt-14"
      >
        <h3 className="text-center text-xl font-bold uppercase text-gray-900">
          {title}
        </h3>

        <p className="mt-4 text-center text-sm text-gray-500 flex-grow">
          {description}
        </p>

        <div className="mt-auto pt-1 flex justify-center">
          <button className="group/btn relative flex items-center gap-1 font-medium text-orange-500 transition-colors hover:text-orange-600">
            <span className="relative">
              {t("servicesSection.button")}
              <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 origin-center bg-orange-500 transition-all duration-300 group-hover/btn:w-1/2"></span>
              <span className="absolute -bottom-1 right-1/2 h-0.5 w-0 origin-center bg-orange-500 transition-all duration-300 group-hover/btn:w-1/2"></span>
            </span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("servicesSection.services.0.title"),
      icon: Building,
      description: t("servicesSection.services.0.description"),
    },
    {
      title: t("servicesSection.services.1.title"),
      icon: Pin,
      description: t("servicesSection.services.1.description"),
    },
    {
      title: t("servicesSection.services.2.title"),
      icon: Home,
      description: t("servicesSection.services.2.description"),
    },
    {
      title: t("servicesSection.services.3.title"),
      icon: PenTool,
      description: t("servicesSection.services.3.description"),
    },
    {
      title: t("servicesSection.services.4.title"),
      icon: Palette,
      description: t("servicesSection.services.4.description"),
    },
    {
      title: t("servicesSection.services.5.title"),
      icon: Settings,
      description: t("servicesSection.services.5.description"),
    },
  ];

  return (
    <div className="mx-auto max-w-7xl bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="space-y-3 text-center"
      >
        <h3 className="text-xs text-orange-500 sm:text-sm">
          {t("servicesSection.heading.subtitle")}
        </h3>
        <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">
          {t("servicesSection.heading.title")}
        </h2>
        <p className="text-sm text-gray-500 md:text-base">
          {t("servicesSection.heading.description")}
        </p>
      </motion.div>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </div>
    </div>
  );
}
