import Marquee from "@/components/ui/marquee";
import { motion } from "framer-motion";

const partners = [
  {
    name: "Johnson Controls",
    img: "/src/assets/images/johnson-controls-logo.webp",
    url: "https://me.johnsoncontrols.com/",
  },
  {
    name: "Daikin",
    img: "/src/assets/images/daikin-logo.webp",
    url: "https://www.daikinmea.com/",
  },
  {
    name: "Carrier",
    img: "/src/assets/images/carrier-logo.webp",
    url: "https://www.carrier.com/commercial/en/ae/",
  },
  {
    name: "Zamil",
    img: "/src/assets/images/zamil-ac-logo.webp",
    url: "https://zamilac.com/",
  },
  {
    name: "Trane",
    img: "/src/assets/images/trane-logo.webp",
    url: "https://www.trane.com/commercial/middle-east/sa/en.html",
  },
  {
    name: "Gree",
    img: "/src/assets/images/gree-logo.png",
    url: "https://global.gree.com/",
  },
];

const PartnerLogo = ({ img, name, url }: { img: string; name: string; url: string }) => (
  <motion.div
    className="mx-8"
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.3 },
    }}
  >
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img
        src={img}
        alt={name}
        className="h-20 w-auto object-contain"
        aria-label={`Partner logo for ${name}`}
      />
    </a>
  </motion.div>
);

export default function PartnersSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mx-auto flex max-w-7xl flex-col items-center gap-3 py-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-gray-800"
      >
        Our Partners
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center text-gray-500"
      >
        Our success is built on strong partnerships, driving innovation and
        excellence in MEP services across Saudi Arabia.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="relative mt-4 flex w-full overflow-hidden rounded-lg bg-background"
      >
        <Marquee pauseOnHover className="--duration:30s">
          {partners.map((partner) => (
            <PartnerLogo key={partner.name} {...partner} />
          ))}
        </Marquee>
      </motion.div>
    </motion.div>
  );
}
