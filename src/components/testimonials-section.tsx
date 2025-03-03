import { useState } from "react";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselContent,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  quote: string;
}

export default function TestimonialsSection() {
  const { i18n, t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const isRTL = i18n.dir() === "rtl";

  const testimonials = t("testimonials.items", {
    returnObjects: true,
  }) as Testimonial[];

  return (
    <div className="bg-gray-100 px-4 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-6 flex items-center justify-center gap-4 text-3xl font-bold">
          <span className="h-1 w-12 bg-yellow-400"></span>
          Testimonials
          <span className="h-1 w-12 bg-yellow-400"></span>
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-gray-600">
          {t("testimonials.description")}
        </p>
        <Carousel
          opts={{
            align: "start",
            dragFree: false,
            direction: isRTL ? "rtl" : "ltr",
          }}
          className="relative w-full"
          setApi={(api) => {
            api?.on("select", () => {
              setCurrentSlide(api.selectedScrollSnap());
            });
          }}
        >
          <CarouselPrevious
            className={cn(
              isRTL ? "-left-4 lg:-left-8" : "-left-4 lg:-left-8",
              "cursor-pointer rtl:rotate-180",
            )}
          />
          <CarouselNext
            className={cn(
              isRTL ? "-right-4 lg:-right-8" : "-right-4 lg:-right-8",
              "cursor-pointer rtl:rotate-180",
            )}
          />
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.name}
                className="flex justify-center px-10 md:basis-1/2 lg:basis-1/2"
              >
                <div className="grid w-full items-start rounded-lg bg-white px-8 py-10 shadow-lg">
                  <div className="flex flex-col items-start">
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="mb-2 text-gray-600">{testimonial.role}</p>
                    <div className="mb-4 flex gap-1 text-yellow-400">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ),
                      )}
                    </div>

                    <blockquote className="relative text-start text-lg text-gray-600 italic">
                      <span className="mr-2 text-5xl text-yellow-400">"</span>
                      <span>{testimonial.quote}</span>
                      <span
                        className={cn(
                          "absolute translate-y-3 transform text-5xl text-yellow-400",
                          isRTL ? "-translate-x-2" : "translate-x-2",
                        )}
                      >
                        "
                      </span>
                    </blockquote>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex items-center justify-center gap-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              className={cn(
                "h-3 w-3 rounded-full bg-yellow-400 transition-opacity",
                currentSlide === index ? "opacity-100" : "opacity-30",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
