import { useEffect, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Services", href: "#", hasChildren: true },
    { name: "Blog", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav
      className={cn(
        "fixed z-40 w-full border-b border-blue-300 shadow-md transition-all duration-300",
        isScrolled
          ? "bg-[#2a2d43] md:py-2"
          : "bg-[#2a2d43] md:py-4 md:pb-3 md:pt-14 lg:pb-5 lg:pt-16",
      )}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden items-center justify-between md:flex">
          {/* Logo */}
          <div className="w-40 lg:w-52">
            <img src="src/assets/images/logo.webp" alt="Logo" />
          </div>

          {/* Top Bar - Only visible when not scrolled */}
          {!isScrolled && (
            <div className="absolute left-0 top-0 w-full border-b border-[#494e75] bg-[#2a2d43] px-6 py-3 lg:py-4">
              <div className="container mx-auto">
                <div className="flex items-center justify-between text-white md:text-xs lg:text-sm">
                  <div className="flex items-center md:space-x-4 lg:space-x-8">
                    <span className="flex items-center space-x-2">
                      <FaPhoneAlt className="text-blue-500" />
                      <span>(+966) 50 711 6423</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <FaEnvelope className="text-blue-500" />
                      <span>muhammmadmusaffa@theblackpearlsa.com</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <FaMapMarkerAlt className="text-blue-500" />
                      <span>6740, Mishrifah dist., Jeddah</span>
                    </span>
                  </div>

                  <div className="flex items-center space-x-8">
                    <a href="#" className="hover:text-blue-500">
                      <FaTwitter size={20} />
                    </a>
                    <a href="#" className="hover:text-blue-500">
                      <FaFacebook size={20} />
                    </a>
                    <a href="#" className="hover:text-blue-500">
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Navigation Items */}
          <div className="flex items-center space-x-8 md:text-xs lg:text-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-blue-500"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Contact Button */}
          <div className="flex w-40 justify-end lg:w-52">
            <button className="rounded bg-blue-500 px-6 py-2 text-sm text-white hover:bg-blue-600 lg:text-base">
              CONTACT NOW
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-between md:hidden">
          <div className="w-52">
            <img src="src/assets/images/logo.webp" alt="Logo" />
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className={cn("text-white", isOpen && "hidden")}>
                <Menu size={24} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-screen max-w-[70%] border-none bg-[#0f1729] p-0 text-white sm:max-w-[40%]"
              aria-describedby={undefined}
            >
              <SheetHeader>
                <div className="flex h-28 items-center justify-center">
                  <div className="w-52">
                    <img src="src/assets/images/logo.webp" alt="Logo" />
                  </div>
                </div>
              </SheetHeader>
              <div className="flex flex-col py-2">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="border-t border-[#1e293b] px-8 py-3"
                  >
                    <div className="flex items-center justify-between">
                      <SheetTitle>
                        <a
                          href={item.href}
                          className="text-base font-semibold text-white hover:text-blue-500"
                        >
                          {item.name}
                        </a>
                      </SheetTitle>
                      {item.hasChildren && (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
