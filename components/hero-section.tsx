"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-islamic-50 via-white to-gold-50"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-islamic-200 rounded-full opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gold-200 rounded-full opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-12 h-12 bg-islamic-300 rounded-full opacity-30"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Arabic greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-islamic-600 text-lg mb-4 font-amiri"
          >
            السلام عليكم ورحمة الله وبركاته
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">Salaam</span>{" "}
            <span className="text-gray-800">Funeral Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
          >
            Compassionate Islamic funeral care with dignity, respect, and
            adherence to sacred traditions. Serving our community during life
            &#39;s most precious moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button asChild size="lg" className="btn-islamic text-lg px-8 py-4">
              <Link href="/request-service">
                Request Service <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-islamic-300 text-islamic-700 hover:bg-islamic-50"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-islamic-100 p-4 rounded-full mb-4">
                <Heart className="text-islamic-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Compassionate Care
              </h3>
              <p className="text-gray-600 text-sm">
                With utmost respect and empathy during difficult times
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-gold-100 p-4 rounded-full mb-4">
                <Shield className="text-gold-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Islamic Traditions
              </h3>
              <p className="text-gray-600 text-sm">
                Full adherence to Islamic burial and funeral practices
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-islamic-100 p-4 rounded-full mb-4">
                <Clock className="text-islamic-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                24/7 Availability
              </h3>
              <p className="text-gray-600 text-sm">
                Emergency services available around the clock
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-islamic-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-islamic-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
