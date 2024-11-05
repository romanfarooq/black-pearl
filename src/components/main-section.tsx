import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function MainSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  const features = [
    t("features.hvac"),
    t("features.plumbing"),
    t("features.maintenance"),
    t("features.electrical"),
    t("features.fireSafety"),
    t("features.security"),
  ];

  const midPoint = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, midPoint);
  const rightFeatures = features.slice(midPoint);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const featureColumnVariants = {
    hidden: { opacity: 0, x: isRTL ? 20 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center gap-8 px-4 py-12 md:flex-row md:justify-center md:gap-16 lg:gap-32"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className="w-full space-y-3 md:w-[45%] lg:w-2/5"
        variants={containerVariants}
      >
        <motion.h3
          className="text-xs text-orange-500 sm:text-sm md:text-base"
          variants={itemVariants}
        >
          {t("features.title")}
        </motion.h3>

        <motion.h2
          className="text-xl font-medium text-gray-800 md:text-2xl"
          variants={itemVariants}
        >
          {t("features.subtitle")}
        </motion.h2>

        <motion.p
          className="text-sm text-gray-500 md:text-base"
          variants={itemVariants}
        >
          {t("features.description")}
        </motion.p>

        <motion.div
          className="grid grid-cols-2 gap-4"
          variants={containerVariants}
        >
          <motion.div className="space-y-4" variants={featureColumnVariants}>
            {leftFeatures.map((feature, index) => (
              <div key={`left-${index}`} className="flex items-center gap-2">
                <motion.svg
                  className="h-5 w-5 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </motion.svg>
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </motion.div>
          <motion.div className="space-y-4" variants={featureColumnVariants}>
            {rightFeatures.map((feature, index) => (
              <div key={`right-${index}`} className="flex items-center gap-2">
                <motion.svg
                  className="h-5 w-5 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </motion.svg>
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative w-full max-w-xs md:w-[45%] lg:w-2/5"
        variants={imageVariants}
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 bg-orange-500"
          initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
          whileInView={{ opacity: 1, x: isRTL ? -12 : 12, y: -12 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
        <motion.img
          src="/src/assets/images/main-section.jpg"
          alt={t("features.imageAlt")}
          className="relative h-auto w-full object-cover shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </motion.div>
  );
}
