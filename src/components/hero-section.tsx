import { useState, useEffect, useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CAROUSEL_TIME = 10000;

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isRTL = i18n.dir() === "rtl";

  const heroContent = [
    {
      image: "/images/carousel-1.jpg",
      title: t("hero.0.title"),
      subtitle: t("hero.0.subtitle"),
    },
    {
      image: "/images/carousel-2.jpg",
      title: t("hero.1.title"),
      subtitle: t("hero.1.subtitle"),
    },
    {
      image: "/images/carousel-3.jpg",
      title: t("hero.2.title"),
      subtitle: t("hero.2.subtitle"),
    },
  ];

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroContent.length);
    }, CAROUSEL_TIME);
  }, [heroContent.length]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      startTimer();
    },
    [startTimer],
  );

  const goToPrevious = useCallback(() => {
    goToSlide(currentIndex === 0 ? heroContent.length - 1 : currentIndex - 1);
  }, [currentIndex, heroContent.length, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide((currentIndex + 1) % heroContent.length);
  }, [currentIndex, heroContent.length, goToSlide]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden pt-10 md:pt-16 lg:h-screen">
      <div
        className="flex h-full items-stretch transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(${isRTL ? currentIndex * 100 : -currentIndex * 100}%)`,
        }}
      >
        {heroContent.map((content, index) => (
          <div
            key={index}
            className="min-h-[70vh] w-full shrink-0 lg:min-h-screen"
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
        className="bg-opacity-70 hover:bg-opacity-90 absolute start-4 top-1/2 z-20 hidden -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-700 p-2 text-white md:block"
        aria-label="Previous Slide"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={isRTL ? goToPrevious : goToNext}
        dir="ltr"
        className="bg-opacity-70 hover:bg-opacity-90 absolute end-4 top-1/2 z-20 hidden -translate-y-1/2 transform cursor-pointer rounded-full bg-gray-700 p-2 text-white md:block"
        aria-label="Next Slide"
      >
        <FaChevronRight size={20} />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 transform gap-2">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
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
