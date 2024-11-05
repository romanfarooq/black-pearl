import { Building, Home, PenTool, Palette, Settings, Pin } from "lucide-react";
import { motion } from "framer-motion";

const ServiceCard = ({
  title,
  icon: Icon,
  description,
  index,
}: {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  description: string;
  index: number;
}) => {
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
              READ MORE
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
  const services = [
    {
      title: "HVAC Solutions",
      icon: Building,
      description:
        "Experience Comfort With Our Advanced HVAC Solutions In KSA, Perfect For All Seasons. We Promise Energy Efficient Climate Control For Any Space. Trust The Black Pearls For Top Quality MEP Services.",
    },
    {
      title: "Electrical Services",
      icon: Pin,
      description:
        "From setting up Power Systems to Fixing Electrical issues, our reliable electrical services through out the Kingdom of Saudi Arabia. Keep your spaces Safe and Bright. Trust us for all your Electrical needs, big or small.",
    },
    {
      title: "Plumbing Expertise",
      icon: Home,
      description:
        "Keep your water flowing smoothly with our Expert Plumbing services through out KSA. We handle everything from Installations to Repairs, ensuring your Plumbing works Efficiently and Responsible.",
    },
    {
      title: "Fire Safety Systems",
      icon: PenTool,
      description:
        "Our Electro Mechanical services in KSA offer Reliable Fire Safety systems to keep your Property and People safe. We install advanced detectors and fast response systems for 24/7 Protection, giving you Peace of mind.",
    },
    {
      title: "Maintenance Contracts",
      icon: Palette,
      description:
        "Keep your Electro Mechanical systems running smoothly with our Maintenance Contracts. Our expert Technicians conduct regular check ups and fixes, ensuring your systems work efficiently.",
    },
    {
      title: "Safety and Security Measures",
      icon: Settings,
      description:
        "Increase security with our easy to use Safety Solutions. From Controlling Access to Monitoring cameras. We use the latest Tech to make your space Safer for everyone and everything inside.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 , delay: 0.5 }}
        className="space-y-3 text-center"
      >
        <h3 className="text-xs text-orange-500 sm:text-sm">
          TRANSFORMING ELECTRO MECHANICAL EXCELLENCE IN KSA
        </h3>
        <h2 className="text-xl font-semibold text-gray-800 md:text-2xl">
          Our Customers Projects are an Investment in the Future
        </h2>
        <p className="text-sm text-gray-500 md:text-base">
          We Stand Out because of our amazing MEP team and our dedication to
          delivering great results.
          <br />
          We make sure to understand our customers' needs and work hard to make
          a positive impact.
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
