"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-islamic-gradient relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-islamic-100 max-w-3xl mx-auto leading-relaxed">
              Our compassionate team is available 24/7 to provide immediate
              support and guidance during your time of need.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-islamic-700 hover:bg-gray-100 text-lg px-8 py-4"
            >
              <Link href="/request-service">
                Request Service <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              // variant="outline"
              size="lg"
              className="border-white text-text-islamic-700 text-lg px-8 py-4"
            >
              <Link href="tel:+2349160006973">
                <Phone className="mr-2" size={20} />
                Call Now: +(234)916-0006-973
              </Link>
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full inline-block mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                24/7 Emergency Service
              </h3>
              <p className="text-islamic-100">
                Immediate response when you need us most
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full inline-block mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compassionate Care</h3>
              <p className="text-islamic-100">
                Treating every family with dignity and respect
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full inline-block mb-4">
                <Phone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
              <p className="text-islamic-100">
                No obligation consultation and planning
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
