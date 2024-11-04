import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const carousel_time = 10000;

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const isRTL = i18n.dir() === "rtl";

  const heroContent = [
    {
      image: "/src/assets/images/carousel-1.jpg",
      title: t("hero.0.title"),
      subtitle: t("hero.0.subtitle"),
    },
    {
      image: "/src/assets/images/carousel-2.jpg",
      title: t("hero.1.title"),
      subtitle: t("hero.1.subtitle"),
    },
    {
      image: "/src/assets/images/carousel-3.jpg",
      title: t("hero.2.title"),
      subtitle: t("hero.2.subtitle"),
    },
  ];

  useEffect(() => {
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        goToNext();
      }, carousel_time);
    };

    startTimer();

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        goToNext();
      }, carousel_time);
    };
    startTimer();
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? heroContent.length - 1 : prevIndex - 1,
    );
    resetTimer();
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    resetTimer();
  };

  return (
    <div className="relative h-[70vh] w-full overflow-hidden pt-16 lg:h-screen">
      <div
        className="flex h-full items-stretch transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(${isRTL ? currentIndex * 100 : -currentIndex * 100}%)`,
        }}
      >
        {heroContent.map((content, index) => (
          <div
            key={index}
            className="min-h-[70vh] w-full flex-shrink-0 lg:min-h-screen"
          >
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${content.image})` }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="relative z-10 mx-auto flex h-full w-full flex-col items-center justify-center px-4 text-center text-white lg:max-w-[70%]">
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-2 text-3xl font-bold md:text-5xl"
                >
                  {content.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-4 text-lg md:text-xl"
                >
                  {content.subtitle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <button className="border border-white px-6 py-2 text-white transition duration-300 hover:bg-white hover:text-black">
                    {t("hero.0.get_started")}
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={isRTL ? goToNext : goToPrevious}
        dir="ltr"
        className="absolute start-4 top-1/2 z-20 hidden -translate-y-1/2 transform rounded-full bg-gray-700 bg-opacity-70 p-2 text-white hover:bg-opacity-90 md:block"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={isRTL ? goToPrevious : goToNext}
        dir="ltr"
        className="absolute end-4 top-1/2 z-20 hidden -translate-y-1/2 transform rounded-full bg-gray-700 bg-opacity-70 p-2 text-white hover:bg-opacity-90 md:block"
        aria-label="Next Slide"
      >
        <FaChevronRight size={20} />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 transform gap-2">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              currentIndex === index ? "w-4 bg-white" : "bg-white/50",
            )}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
