"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Users,
  MapPin,
  Clock,
  Phone,
  Shield,
  Star,
  CheckCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    icon: Heart,
    title: "Islamic Burial Services",
    description:
      "Complete Islamic burial services following traditional practices with dignity and respect.",
    features: [
      "Ghusl (ritual washing) by certified professionals",
      "Kafan (shrouding) with proper Islamic materials",
      "Janazah prayer coordination",
      "Burial arrangements according to Sunnah",
      "Qiblah-facing burial placement",
      "Islamic cemetery arrangements",
    ],
    price: "From   &#8358; 2,500",
    popular: true,
  },
  {
    icon: Users,
    title: "Funeral Arrangements",
    description:
      "Comprehensive funeral planning and coordination for all aspects of the service.",
    features: [
      "Memorial service planning",
      "Venue coordination and booking",
      "Guest management and invitations",
      "Islamic catering services",
      "Audio/visual equipment setup",
      "Photography and documentation",
    ],
    price: "From   &#8358; 1,800",
    popular: false,
  },
  {
    icon: MapPin,
    title: "Transportation Services",
    description:
      "Professional transportation services for the deceased and family members.",
    features: [
      "Ambulance services available 24/7",
      "Islamic-compliant hearse rental",
      "Family transportation coordination",
      "International repatriation services",
      "Airport pickup and delivery",
      "Dignified transfer services",
    ],
    price: "From   &#8358; 800",
    popular: false,
  },
  {
    icon: Clock,
    title: "24/7 Emergency Services",
    description:
      "Round-the-clock emergency services for immediate assistance when needed.",
    features: [
      "Immediate response within 30 minutes",
      "Emergency consultation available",
      "Crisis support and guidance",
      "Rapid arrangement coordination",
      "After-hours imam services",
      "Emergency documentation assistance",
    ],
    price: "From   &#8358; 500",
    popular: false,
  },
  {
    icon: Phone,
    title: "Grief Counseling",
    description:
      "Professional counseling services to support families through difficult times.",
    features: [
      "Individual counseling sessions",
      "Family group therapy",
      "Islamic grief counseling approach",
      "Bereavement support groups",
      "Children and teen counseling",
      "Long-term follow-up care",
    ],
    price: "From   &#8358; 120/session",
    popular: false,
  },
  {
    icon: Shield,
    title: "Documentation Services",
    description:
      "Complete assistance with all necessary documentation and legal requirements.",
    features: [
      "Death certificate processing",
      "Legal paperwork assistance",
      "Insurance claim support",
      "Government form completion",
      "International documentation",
      "Estate planning guidance",
    ],
    price: "From   &#8358; 300",
    popular: false,
  },
];

const additionalServices = [
  "Memorial flowers and arrangements",
  "Islamic booklets and prayer cards",
  "Video tribute creation",
  "Live streaming services",
  "Pre-need planning consultations",
  "Estate and will documentation",
];

export default function ServicesPage() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-islamic-50 to-gold-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive Islamic funeral services designed to honor your
                loved ones with dignity, respect, and strict adherence to
                Islamic traditions and requirements.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gold-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <Card
                    className={`h-full border-0 shadow-lg card-hover ${
                      service.popular ? "ring-2 ring-gold-400" : ""
                    }`}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="bg-islamic-100 p-4 rounded-full mx-auto mb-4 w-fit">
                        <service.icon className="text-islamic-600" size={32} />
                      </div>
                      <CardTitle className="text-xl mb-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </CardDescription>
                      <div className="text-2xl font-bold text-islamic-600">
                        {service.price}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-gray-600"
                          >
                            <CheckCircle
                              className="text-islamic-400 mr-3 flex-shrink-0 mt-0.5"
                              size={16}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full btn-islamic mt-6">
                        <Link href="/request-service" className="w-full">
                          Request This Service
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gradient mb-6">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer a range of additional services to support families
                during their time of need.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {additionalServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
                >
                  <Star className="text-gold-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gradient mb-6">
                Our Service Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We guide you through each step with care, ensuring all Islamic
                requirements are met.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Initial Contact",
                  description:
                    "Call our 24/7 helpline for immediate assistance and guidance.",
                },
                {
                  step: "2",
                  title: "Consultation",
                  description:
                    "Meet with our team to discuss your needs and Islamic requirements.",
                },
                {
                  step: "3",
                  title: "Arrangements",
                  description:
                    "We handle all arrangements while keeping you informed throughout.",
                },
                {
                  step: "4",
                  title: "Service",
                  description:
                    "Professional execution of all services with dignity and respect.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-islamic-gradient text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-islamic-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-islamic-100 mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation. Our compassionate team
                is here to help you during this difficult time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-islamic-700 hover:bg-gray-100"
                >
                  <Link href="/request-service">Request Service</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-islamic-700"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
