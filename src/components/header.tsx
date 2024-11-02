import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import LocaleSwitcher from "@/i18n/locale-switcher";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    {
      name: "Services",
      href: "/services",
      hasChildren: true,
      children: [
        "HVAC Solutions",
        "Electrical Services",
        "Plumbing Expertise",
        "Fire Safety",
        "Safety and Security Measures",
        "Maintenance Contracts",
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed z-40 flex w-full flex-col justify-between border-b border-blue-300 bg-[#2a2d43]">
      <div className="container mx-auto mt-auto px-4 py-2">
        <div
          className={cn(
            "hidden w-full border-b border-[#494e75] bg-[#2a2d43] transition-all duration-500 ease-in-out md:block",
            isScrolled
              ? "max-h-0 py-0 opacity-0"
              : "max-h-screen py-3 opacity-100",
          )}
        >
          <div className="flex items-center justify-between text-white md:text-xs lg:text-sm">
            <div className="flex items-center">
              <span className="flex items-center">
                <FaPhoneAlt className="me-2 text-blue-500" />
                <span>(+966) 50 711 6423</span>
              </span>
              <span className="flex items-center md:ms-4 lg:ms-8">
                <FaEnvelope className="me-2 text-blue-500" />
                <span>muhammmadmusaffa@theblackpearlsa.com</span>
              </span>
              <span className="flex items-center md:ms-4 lg:ms-8">
                <FaMapMarkerAlt className="me-2 text-blue-500" />
                <span>6740, Mishrifah dist., Jeddah</span>
              </span>
              <span className="md:ms-4 lg:ms-8">
                <LocaleSwitcher />
              </span>
            </div>

            <div className="flex items-center">
              <a href="#" className="hover:text-blue-500">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 ms-4">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-500 ms-4">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center justify-between md:flex">
          <div className="w-40 lg:w-52">
            <img src="src/assets/images/logo.webp" alt="Logo" />
          </div>

          <div className="flex items-center gap-8 md:text-xs lg:text-lg">
            {navItems.map((item) =>
              item.hasChildren ? (
                <NavigationMenu key={item.name}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="h-full bg-inherit p-0 font-normal text-white hover:bg-inherit hover:text-blue-500 focus:bg-inherit focus:text-white data-[active]:bg-inherit data-[state=open]:bg-inherit md:text-xs lg:text-lg">
                        <span>{item.name}</span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-[#2a2d43] p-4">
                        <ul className="flex flex-col space-y-2">
                          {item.children.map((subItem) => (
                            <li key={subItem}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/"
                                  className="text-nowrap text-sm text-white hover:text-blue-500"
                                >
                                  {subItem}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-blue-500"
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>

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
              side={i18n.dir() === "ltr" ? "left" : "right"}
              className="max-h-screen w-screen max-w-[70%] overflow-y-auto border-none bg-[#0f1729] p-0 text-white sm:max-w-[40%]"
              aria-describedby={undefined}
            >
              <SheetHeader>
                <div className="flex h-28 items-center justify-center">
                  <div className="w-52">
                    <img src="src/assets/images/logo.webp" alt="Logo" />
                  </div>
                </div>
              </SheetHeader>
              <ul className="flex flex-col py-2">
                {navItems.map((item) =>
                  item.hasChildren ? (
                    <Accordion type="single" collapsible key={item.name}>
                      <AccordionItem
                        value={item.name}
                        className="border-t border-[#1e293b]"
                      >
                        <AccordionTrigger className="px-8 py-3 text-start text-base font-semibold text-white hover:no-underline">
                          {item.name}
                        </AccordionTrigger>
                        <AccordionContent className="bg-[#121b30] p-0">
                          <ul className="flex flex-col font-semibold">
                            {item.children.map((subItem) => (
                              <li
                                key={subItem}
                                className="flex items-center justify-between border-t border-[#1e293b] px-8 py-3"
                              >
                                <Link to="/">{subItem}</Link>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <li
                      key={item.name}
                      className="flex items-center justify-between border-t border-[#1e293b] px-8 py-3"
                    >
                      <SheetTitle>
                        <Link
                          to={item.href}
                          className="text-base font-semibold text-white hover:text-blue-500"
                        >
                          {item.name}
                        </Link>
                      </SheetTitle>
                    </li>
                  ),
                )}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
