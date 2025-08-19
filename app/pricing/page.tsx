"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, ArrowRight, Phone } from "lucide-react";

const packages = [
  {
    name: "Essential",
    price: "  &#8358; 2,500",
    description: "Basic Islamic funeral services with dignity and respect",
    features: [
      "Islamic washing (Ghusl)",
      "Basic shrouding (Kafan)",
      "Janazah prayer coordination",
      "Local transportation",
      "Basic documentation",
      "Family guidance",
    ],
    buttonText: "Select Essential",
    popular: false,
  },
  {
    name: "Complete",
    price: "  &#8358; 3,800",
    description: "Comprehensive funeral services with enhanced support",
    features: [
      "Premium Islamic washing (Ghusl)",
      "Quality shrouding (Kafan)",
      "Janazah prayer coordination",
      "Extended transportation",
      "Complete documentation",
      "Family counseling session",
      "Memorial service coordination",
      "24/7 family support hotline",
    ],
    buttonText: "Select Complete",
    popular: true,
  },
  {
    name: "Premium",
    price: "  &#8358; 5,200",
    description: "Full-service package with comprehensive family support",
    features: [
      "Luxury Islamic washing (Ghusl)",
      "Premium shrouding (Kafan)",
      "Extended Janazah prayer services",
      "Comprehensive transportation",
      "Full documentation service",
      "Extended family counseling",
      "Premium memorial services",
      "Dedicated family coordinator",
      "Post-funeral support program",
      "International coordination (if needed)",
    ],
    buttonText: "Select Premium",
    popular: false,
  },
];

const additionalServices = [
  { name: "Cemetery Plot", price: "  &#8358; 1,200" },
  { name: "Memorial Stone", price: "  &#8358; 450" },
  { name: "International Repatriation", price: "Quote Available" },
  { name: "Pre-Planning Consultation", price: "Free" },
  { name: "Grief Counseling (per session)", price: "  &#8358; 150" },
  { name: "Memorial Service", price: "  &#8358; 800" },
];

export default function PricingPage() {
  return (
    <main className="py-12">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Service <span className="text-green-600">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transparent, compassionate pricing for Islamic funeral services. We
            believe in dignity and respect without financial burden during your
            time of need.
          </p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the package that best meets your family&#39;s needs and
              budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg ${
                  pkg.popular ? "ring-2 ring-green-200 scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {pkg.price}
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${
                      pkg.popular
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-gray-800 hover:bg-gray-900"
                    }`}
                  >
                    <Link
                      href="/request-service"
                      className="flex items-center justify-center"
                    >
                      {pkg.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optional services to enhance your family&#39;s experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {service.name}
                      </h3>
                    </div>
                    <div className="text-green-600 font-bold">
                      {service.price}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Assistance */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Financial Assistance Available
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            We understand that funeral costs can be a burden during difficult
            times. We offer various payment options and financial assistance
            programs to ensure that everyone can receive dignified Islamic
            funeral services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">Payment Plans</h3>
              <p className="text-green-100">
                Flexible payment options with no interest
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">Community Fund</h3>
              <p className="text-green-100">
                Assistance from our community support program
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2">
                Insurance Coordination
              </h3>
              <p className="text-green-100">
                We work directly with insurance providers
              </p>
            </div>
          </div>

          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4"
          >
            <Phone className="mr-2 h-5 w-5" />
            Discuss Financial Options
          </Button>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Have Questions About Pricing?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our compassionate team is here to help you understand our services
            and find the best solution for your family&#39;s needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 px-8 py-4"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call for Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4"
            >
              <Link href="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
