"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Phone,
  Calendar,
  MessageSquare,
  Heart,
  Clock,
  DollarSign,
  Book,
  Users,
  Shield,
  HelpCircle,
} from "lucide-react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  popular: boolean;
}

const faqCategories = [
  { id: "all", name: "All Questions", icon: HelpCircle },
  { id: "services", name: "Services", icon: Heart },
  { id: "pricing", name: "Pricing", icon: DollarSign },
  { id: "islamic", name: "Islamic Practices", icon: Book },
  { id: "process", name: "Process", icon: Clock },
  { id: "support", name: "Support", icon: Users },
];

const faqs: FAQ[] = [
  {
    id: "1",
    question: "What services do you provide for Islamic funerals?",
    answer:
      "We provide comprehensive Islamic funeral services including Ghusl (ritual washing), Kafan (shrouding), Janazah prayer coordination, transportation, burial arrangements, and family support. All services are conducted according to Islamic traditions and supervised by qualified Islamic scholars.",
    category: "services",
    popular: true,
  },
  {
    id: "2",
    question: "Are your services available 24/7?",
    answer:
      "Yes, our emergency services are available 24/7, 365 days a year. Death can occur at any time, and Islamic tradition requires prompt handling of the deceased. Our emergency hotline +1 (555) 123-4567 is always staffed by compassionate professionals ready to assist you.",
    category: "services",
    popular: true,
  },
  {
    id: "3",
    question: "How much do your funeral services cost?",
    answer:
      "Our funeral packages range from $2,500 for essential services to $5,200 for premium packages. We offer transparent pricing with no hidden fees. Financial assistance and payment plans are available for families in need. Please contact us for a detailed quote based on your specific requirements.",
    category: "pricing",
    popular: true,
  },
  {
    id: "4",
    question: "Do you have an Islamic cemetery?",
    answer:
      "Yes, we maintain a dedicated Islamic cemetery with proper Qibla orientation for all graves. Our cemetery features beautiful landscaping, ongoing maintenance, and a peaceful environment for visiting loved ones. Cemetery plots start at $1,200.",
    category: "services",
    popular: false,
  },
  {
    id: "5",
    question: "How quickly must burial take place according to Islamic law?",
    answer:
      "Islamic tradition emphasizes prompt burial, ideally within 24 hours of death when possible. However, we understand that modern circumstances may require additional time for family notification, travel, and legal requirements. We work with families to balance religious obligations with practical needs.",
    category: "islamic",
    popular: true,
  },
  {
    id: "6",
    question: "Can non-Muslims attend Islamic funeral services?",
    answer:
      "Yes, non-Muslim family members and friends are welcome to attend Islamic funeral services. We provide guidance on appropriate conduct and dress code. Our staff can explain the significance of different rituals to help non-Muslim attendees understand and respect the proceedings.",
    category: "islamic",
    popular: false,
  },
  {
    id: "7",
    question: "Do you provide grief counseling services?",
    answer:
      "Yes, we offer Islamic grief counseling services with licensed counselors who understand both psychological healing and Islamic perspectives on loss. We provide individual counseling, family support sessions, and group therapy programs. Our first consultation is complimentary.",
    category: "support",
    popular: false,
  },
  {
    id: "8",
    question: "What happens if death occurs in a hospital?",
    answer:
      "We coordinate directly with hospitals and medical facilities. Our team handles all necessary documentation, transportation, and communication with medical staff. We ensure the deceased is treated with dignity throughout the process and that all Islamic requirements are met.",
    category: "process",
    popular: false,
  },
  {
    id: "9",
    question: "Can you help with international repatriation?",
    answer:
      "Yes, we provide international repatriation services for families who wish to bury their loved ones in their home countries. We handle all documentation, coordination with airlines, and ensure compliance with both local and international regulations.",
    category: "services",
    popular: false,
  },
  {
    id: "10",
    question: "Do you accept insurance?",
    answer:
      "Yes, we work with most major insurance providers and can help you navigate the claims process. We also offer direct billing to insurance companies when possible. Our staff can assist you in understanding your coverage and any out-of-pocket expenses.",
    category: "pricing",
    popular: true,
  },
  {
    id: "11",
    question: "What is included in the Ghusl (ritual washing) service?",
    answer:
      "Our Ghusl service is performed by trained, same-gender attendants according to Islamic guidelines. The process includes ritual purification, washing with clean water, and preparation for shrouding. Family members may participate if they wish, and we provide guidance throughout the process.",
    category: "islamic",
    popular: false,
  },
  {
    id: "12",
    question: "Can you accommodate special requests or cultural variations?",
    answer:
      "Yes, we understand that Islamic practices may vary by cultural background and school of thought. We work closely with families and their religious advisors to ensure all specific requirements are met while maintaining the core Islamic principles of funeral rites.",
    category: "islamic",
    popular: false,
  },
  {
    id: "13",
    question: "What support do you provide for families after the funeral?",
    answer:
      "We offer ongoing support including grief counseling, community connections, assistance with estate matters, and annual remembrance services. Our support doesn't end with the burial - we're here to help families through their healing journey.",
    category: "support",
    popular: false,
  },
  {
    id: "14",
    question: "How do I pre-plan funeral services?",
    answer:
      "Pre-planning allows you to make important decisions in advance and ease the burden on your family. We offer free consultations to discuss your wishes, explain options, and create a personalized plan. Pre-planning can also help with financial preparation.",
    category: "process",
    popular: false,
  },
  {
    id: "15",
    question: "What if I need services outside your normal service area?",
    answer:
      "While we primarily serve the Greater Metro Area, we can arrange services outside our normal area for an additional fee. We have partnerships with Islamic funeral providers in other regions and can coordinate comprehensive care regardless of location.",
    category: "services",
    popular: false,
  },
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularFAQs = faqs.filter((faq) => faq.popular);

  return (
    <main className="py-12">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-green-600">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Find answers to common questions about our Islamic funeral services,
            pricing, and support options. We&#39;re here to help guide you
            through this difficult time.
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search frequently asked questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-green-500 rounded-xl"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {faqCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? "bg-green-600 hover:bg-green-700"
                      : "border-green-200 text-green-600 hover:bg-green-50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      {selectedCategory === "all" && searchTerm === "" && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Popular Questions
              </h2>
              <p className="text-xl text-gray-600">
                Most frequently asked questions by our community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {popularFAQs.slice(0, 4).map((faq) => (
                <Card
                  key={faq.id}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                        Popular
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors leading-tight">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Accordion */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {searchTerm
                ? "Search Results"
                : selectedCategory === "all"
                ? "All Questions"
                : `${
                    faqCategories.find((cat) => cat.id === selectedCategory)
                      ?.name
                  } Questions`}
            </h2>
            <p className="text-xl text-gray-600">
              {filteredFAQs.length} question
              {filteredFAQs.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No questions found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or browse different categories.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                View All Questions
              </Button>
            </div>
          ) : (
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-start justify-between w-full pr-4">
                      <span className="font-semibold text-gray-900 leading-tight">
                        {faq.question}
                      </span>
                      {faq.popular && (
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 ml-3 flex-shrink-0">
                          Popular
                        </Badge>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Our compassionate team is here to help. Reach out to us for
            personalized assistance and guidance during your time of need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us: (555) 123-4567
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4"
              onClick={() => {
                // Open Calendly modal
                if (typeof window !== "undefined" && (window as any).Calendly) {
                  (window as any).Calendly.initPopupWidget({
                    url: "https://calendly.com/salaam-funeral/consultation",
                  });
                }
              }}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4"
              asChild
            >
              <a href="/contact">
                <MessageSquare className="mr-2 h-5 w-5" />
                Send Message
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive resources for Islamic guidance and
              support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Book className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Islamic Resources
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Learn about Islamic inheritance laws, calculators, and
                  educational content.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  <a href="/resources">Explore Resources</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                  <Heart className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Our Services
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive Islamic funeral services with dignity and
                  respect.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  <a href="/services">View Services</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Support Center
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Grief counseling and community support during difficult times.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  <a href="/contact">Get Support</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calendly Script */}
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </main>
  );
}
