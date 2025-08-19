"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  services: [
    { name: "Islamic Burial Services", href: "/services/burial" },
    { name: "Funeral Arrangements", href: "/services/arrangements" },
    { name: "Memorial Services", href: "/services/memorial" },
    { name: "Transportation", href: "/services/transportation" },
  ],
  resources: [
    {
      name: "Islamic Inheritance Calculator",
      href: "/resources/inheritance-calculator",
    },
    { name: "Zakat Calculator", href: "/resources/zakat-calculator" },
    { name: "Prayer Times", href: "/resources/prayer-times" },
    { name: "Islamic Guidelines", href: "/resources/guidelines" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "FAQ", href: "/faq" },
    { name: "Help Center", href: "/help" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-islamic-gradient p-2 rounded-lg">
                <div className="text-white font-bold text-xl">S</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Salaam</h3>
                <p className="text-sm text-gray-400">Funeral Services</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Providing compassionate Islamic funeral services with dignity,
              respect, and adherence to Islamic traditions. Serving our
              community with care during life &#39;s most difficult moments.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-islamic-400" size={18} />
                <span>
                  {" "}
                  <a href="tel:+2349160006973">+234 (916) 000-6973</a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-islamic-400" size={18} />
                <span>
                  <a href="mailto:info@salaamfuneral.com.ng">
                    info@salaamfuneral.com.ng
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-islamic-400" size={50} />
                <span>
                  <a
                    href="https://www.google.com/maps?q=Block+A1,+Suite+63,+Sura+Shopping+Complex,+Simpson+Street,+Lagos+Island,+Lagos+State"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Block A1, Suite 63, Sura Shopping Complex, Simpson Street,
                    Lagos Island, Lagos State
                  </a>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-islamic-400" size={18} />
                <span>24/7 Emergency Services</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-islamic-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-islamic-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for Islamic guidance and community
              updates.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="btn-islamic w-full">Subscribe</Button>
            </div>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://www.facebook.com/share/1DqR31694m/?mibextid=wwXIfr"
                className="text-gray-400 hover:text-islamic-400 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-islamic-400 transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/salaamfuneralservices?igsh=MWRlcDhzeGprYnE0aA=="
                className="text-gray-400 hover:text-islamic-400 transition-colors"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Salaam Funeral Services. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-islamic-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-islamic-400 text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/accessibility"
              className="text-gray-400 hover:text-islamic-400 text-sm transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
