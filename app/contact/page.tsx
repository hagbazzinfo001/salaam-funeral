"use client";

import { useState } from "react";
import SuccessModal from "@/components/ui/success-modal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Calendar,
  Heart,
} from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  urgency: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    urgency: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setShowSuccessModal(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        urgency: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "24/7 Emergency Line",
      primary: "+234 (916) 000-6973",
      secondary: "Available around the clock",
      description: "For immediate funeral needs and emergency support",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      urgent: true,
    },
    {
      icon: Phone,
      title: "General Inquiries",
      primary: "+234 (916) 000-6973",
      secondary: "Mon-Fri: 8AM-6PM",
      description: "For general questions and service information",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      urgent: false,
    },
    {
      icon: Mail,
      title: "Email Support",
      primary: "info@salaamfuneral.com.ng",
      secondary: "Response within 24 hours",
      description: "For detailed inquiries and documentation",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      urgent: false,
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      primary: "+234 (916) 000-6973",
      secondary: "Quick messaging support",
      description: "For quick questions and updates",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      urgent: false,
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 2:00 PM" },
    { day: "Emergency Services", hours: "24/7 Available" },
  ];

  return (
    <main className="py-12">
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Message Sent Successfully!"
        message="Thank you for contacting Salaam Funeral Services. Our compassionate team will respond to your inquiry within 24 hours. If this is an emergency, please call our 24/7 hotline immediately."
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="text-green-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We&#39;re here to support you during your time of need. Reach out to
            us anytime for compassionate guidance, service information, or
            emergency assistance.
          </p>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-6 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-center">
            <AlertCircle className="h-6 w-6 animate-pulse" />
            <div>
              <p className="font-semibold">
                Emergency? Call Now: +234 (916) 000-6973
              </p>
              <p className="text-red-100 text-sm">
                Available 24/7 for immediate assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach our compassionate team for support and
              guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    method.urgent ? "ring-2 ring-red-200" : ""
                  }`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className={`h-8 w-8 ${method.iconColor}`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-lg font-medium text-green-600 mb-1">
                      {method.primary}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      {method.secondary}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {method.description}
                    </p>
                    {method.urgent && (
                      <div className="mt-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          Emergency
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <Send className="mr-3 h-6 w-6 text-green-600" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we &#39;ll get back to you as soon
                  as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <p className="text-green-800 font-medium">
                        Message sent successfully!
                      </p>
                    </div>
                    <p className="text-green-700 text-sm mt-1">
                      We&#39;ll respond to your inquiry within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <p className="text-red-800 font-medium">
                        Failed to send message
                      </p>
                    </div>
                    <p className="text-red-700 text-sm mt-1">
                      Please try again or call us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <Select
                        value={formData.urgency}
                        onValueChange={(value) =>
                          handleInputChange("urgency", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">
                            Emergency - Immediate Response
                          </SelectItem>
                          <SelectItem value="urgent">
                            Urgent - Within 24 hours
                          </SelectItem>
                          <SelectItem value="normal">
                            Normal - Within 2-3 days
                          </SelectItem>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      placeholder="Brief description of your inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Please provide details about your inquiry or needs..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Clock className="mr-3 h-6 w-6 text-green-600" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium text-gray-900">
                          {schedule.day}
                        </span>
                        <span
                          className={`text-sm ${
                            schedule.day === "Emergency Services"
                              ? "text-red-600 font-semibold"
                              : "text-gray-600"
                          }`}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <MapPin className="mr-3 h-6 w-6 text-green-600" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <address>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Block A1, Suite 63,{" "}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Sura Shopping Complex, <br />
                        Simpson Street, <br />
                        Lagos Island, Lagos State
                      </p>
                    </address>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Service Area
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        We proudly serve the Greater Metro Area and surrounding
                        communities, providing compassionate Islamic funeral
                        services within a 50-mile radius.
                      </p>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-50 flex items-center justify-center gap-2"
                    >
                      <a
                        href="https://www.google.com/maps?q=Block+A1,+Suite+63,+Sura+Shopping+Complex,+Simpson+Street,+Lagos+Island,+Lagos+State"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="h-4 w-4" />
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-yellow-50">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Need Immediate Help?
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our compassionate team is ready to assist you with emergency
                    services and immediate support during your time of need.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Emergency Line
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-green-600 text-green-600 hover:bg-green-50"
                    >
                      <a
                        href="https://calendly.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-800 hover:text-primary-500 transition-colors"
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Schedule Consultation
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Find quick answers to common questions about our services, Islamic
            funeral rites, and support options.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-green-600 text-green-600 hover:bg-green-50"
          >
            <a href="/faq">View All FAQs</a>
          </Button>
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
