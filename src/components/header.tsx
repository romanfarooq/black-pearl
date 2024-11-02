import { useState, useEffect } from "react";
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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("header.navItems.home"), href: "/home" },
    { name: t("header.navItems.about"), href: "/about" },
    { name: t("header.navItems.projects"), href: "/projects" },
    {
      name: t("header.navItems.services"),
      href: "/services",
      hasChildren: true,
      children: [
        t("header.navItems.children.hvacSolutions"),
        t("header.navItems.children.electricalServices"),
        t("header.navItems.children.plumbingExpertise"),
        t("header.navItems.children.fireSafety"),
        t("header.navItems.children.safetySecurity"),
        t("header.navItems.children.maintenanceContracts"),
      ],
    },
    { name: t("header.navItems.blog"), href: "/blog" },
    { name: t("header.navItems.contact"), href: "/contact" },
  ];

  return (
    <nav className="fixed z-40 flex w-full flex-col justify-between border-b border-blue-300 bg-[#1c1e2d]">
      <div className="px-4 py-2 lg:container lg:mx-auto">
        <div
          className={cn(
            "hidden w-full border-b border-[#494e75] bg-[#1c1e2d] transition-all duration-500 ease-in-out md:block",
            isScrolled
              ? "max-h-0 py-0 opacity-0"
              : "max-h-screen py-3 opacity-100",
          )}
        >
          <div className="flex items-center justify-between text-white md:text-xs lg:text-sm">
            <div className="flex items-center text-nowrap md:gap-4 lg:gap-8">
              <span className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-500" />
                <span dir="ltr">(+966) 50 711 6423</span>
              </span>
              <span className="flex items-center gap-2">
                <FaEnvelope className="text-blue-500" />
                <span dir="ltr">muhammmadmusaffa@theblackpearlsa.com</span>
              </span>
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-500" />
                <span>{t("header.contactInfo.address")}</span>
              </span>
              <LocaleSwitcher />
            </div>

            <div className="flex items-center md:gap-1 lg:gap-4">
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
                      <NavigationMenuContent className="bg-[#1c1e2d] p-4">
                        <ul
                          className={cn(
                            "flex flex-col space-y-2",
                            i18n.dir() === "ltr" ? "text-left" : "text-right",
                          )}
                        >
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
              {t("header.contactButton")}
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
              className="max-h-screen w-screen max-w-[80%] overflow-y-auto border-none bg-[#030F27] p-0 text-white sm:max-w-[40%]"
              aria-describedby={undefined}
            >
              <SheetHeader>
                <div className="flex h-32 items-center justify-center">
                  <div className="w-56">
                    <img src="src/assets/images/logo.webp" alt="Logo" />
                  </div>
                </div>
              </SheetHeader>

              <ul className="flex flex-col">
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
                                className="border-t border-[#1e293b] px-8 py-3"
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
                      className="border-t border-[#1e293b] px-8 py-3"
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

              <div className="px-8 py-3 flex h-14 border-t border-[#1e293b]">
                <LocaleSwitcher />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
