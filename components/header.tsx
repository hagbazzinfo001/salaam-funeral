"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top contact bar */}
      {/* <div className="bg-islamic-800 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center animate-marquee ">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>24/7 Emergency: +234 9160006973</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>
                {" "}
                <a href="mailto:info@salaamfuneral.com.ng">
                  {" "}
                  info@salaamfuneral.com.ng
                </a>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={14} />
            <span>
              {" "}
              <a
                href="https://www.google.com/maps?q=Block+A1,+Suite+63,+Sura+Shopping+Complex,+Simpson+Street,+Lagos+Island,+Lagos+State"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Block A1, Suite 63, Sura Shopping Complex, Simpson Street, Lagos
                Island, Lagos State
              </a>
            </span>
          </div>
        </div>
        <div className="w-full bg-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex space-x-12 animate-marquee whitespace-nowrap py-2">
               <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>24/7 Emergency: +234 9160006973</span>
              </div>

               <div className="flex items-center space-x-2">
                <Mail size={14} />
                <a
                  href="mailto:info@salaamfuneral.com.ng"
                  className="hover:underline"
                >
                  info@salaamfuneral.com.ng
                </a>
              </div>

               <div className="flex items-center space-x-2">
                <MapPin size={14} />
                <a
                  href="https://www.google.com/maps?q=Block+A1,+Suite+63,+Sura+Shopping+Complex,+Simpson+Street,+Lagos+Island,+Lagos+State"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Block A1, Suite 63, Sura Shopping Complex, Simpson Street,
                  Lagos Island, Lagos State
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-islamic-800 text-white py-2 px-4 text-sm hidden md:block overflow-hidden">
        <div className="flex whitespace-nowrap gap-[300px] ">
          {/* First copy */}
          <div className="flex space-x-12 animate-marquee  ">
            {/* Phone */}
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>24/7 Emergency: +234 (916) 0006-973</span>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <a
                href="mailto:info@salaamfuneral.com.ng"
                className="hover:underline"
              >
                info@salaamfuneral.com.ng
              </a>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <a
                href="https://www.google.com/maps?q=Block+A1,+Suite+63,+Sura+Shopping+Complex,+Simpson+Street,+Lagos+Island,+Lagos+State"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Block A1, Suite 63, Sura Shopping Complex, Simpson Street, Lagos
                Island, Lagos State
              </a>
            </div>
          </div>

          {/* Second copy (duplicate for seamless loop) */}
          <div className="flex space-x-12  animate-marquee">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>24/7 Emergency: +234 9160006973</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <a
                href="mailto:info@salaamfuneral.com.ng"
                className="hover:underline"
              >
                info@salaamfuneral.com.ng
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <a
                href="https://www.google.com/maps?q=Block+A1,+Suite+63,+Sura+Shopping+Complex,+Simpson+Street,+Lagos+Island,+Lagos+State"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Block A1, Suite 63, Sura Shopping Complex, Simpson Street, Lagos
                Island, Lagos State
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <motion.header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
              <Link href="/" className="flex items-center space-x-3">
                <div className="bg-islamic-gradient p-2 rounded-lg">
                  <div className="text-white font-bold text-xl">S</div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gradient">Salaam</h1>
                  <p className="text-sm text-gray-600">Funeral Services</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-islamic-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-islamic-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button asChild className="btn-islamic">
                <Link href="/request-service">Request Service</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t shadow-lg">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-islamic-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-3 pt-4 pb-2">
                  <Button asChild className="btn-islamic w-full">
                    <Link href="/request-service">Request Service</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
