import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Saul Goodman 1",
    role: "Ceo & Founder",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    name: "Sara Wilsson 2",
    role: "Designer",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
    name: "Saul Goodman",
    role: "Ceo & Founder",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    name: "Sara Wilsson",
    role: "Designer",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  {
    name: "Saul Goodman",
    role: "Ceo & Founder",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    name: "Sara Wilsson",
    role: "Designer",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    quote:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
  },
  // Add more testimonials as needed
];

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <div className="bg-gray-100 px-4 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-6 flex items-center justify-center gap-4 text-3xl font-bold">
          <span className="h-1 w-12 bg-yellow-400"></span>
          Testimonials
          <span className="h-1 w-12 bg-yellow-400"></span>
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-gray-600">
          Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum
          nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={(api) => {
            api?.on("select", () => {
              setCurrentSlide(api.selectedScrollSnap());
            });
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
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

                    <blockquote className="relative text-start text-lg italic text-gray-600">
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
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="h-3 w-3 rounded-full bg-yellow-400 opacity-30 first:opacity-100"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
