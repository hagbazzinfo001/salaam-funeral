"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form"; // Add SubmitHandler import

import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Clock, Heart, Phone, User, FileText } from "lucide-react";

const serviceRequestSchema = z.object({
  // Contact Information
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 characters"),
  email: z.string().email("Invalid email address"),
  relationship: z
    .string()
    .min(1, "Please specify your relationship to the deceased"),

  // Deceased Information
  deceasedName: z.string().min(2, "Name must be at least 2 characters"),
  deceasedAge: z.string().min(1, "Age is required"),
  dateOfDeath: z.string().min(1, "Date of death is required"),
  placeOfDeath: z.string().min(1, "Place of death is required"),

  // Service Requirements
  serviceType: z.string().min(1, "Please select a service type"),
  urgency: z.string().min(1, "Please select urgency level"),
  specialRequirements: z.string().optional(),

  // Additional Services
  transportationNeeded: z.boolean().default(false),
  counselingNeeded: z.boolean().default(false),
  cateringNeeded: z.boolean().default(false),

  // Payment Information
  estimatedBudget: z.string().optional(),
  paymentMethod: z.string().min(1, "Please select a payment method"),

  // Agreement
  agreedToTerms: z
    .boolean()
    .refine(
      (val) => val === true,
      "You must agree to the terms and conditions"
    ),
});

type ServiceRequestForm = z.infer<typeof serviceRequestSchema>;

export default function RequestServicePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm<ServiceRequestForm>({
    resolver: zodResolver(serviceRequestSchema),

    defaultValues: {
      transportationNeeded: false,
      counselingNeeded: false,
      cateringNeeded: false,
      agreedToTerms: false,
    },
  });

  const onSubmit: SubmitHandler<ServiceRequestForm> = async (data) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Service request submitted:", data);
    setSubmitSuccess(true);
    setIsSubmitting(false);
  };

  if (submitSuccess) {
    return (
      <>
        <main className="pt-32 pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-islamic-100 p-4 rounded-full w-fit mx-auto mb-6">
                <Heart className="text-islamic-600" size={48} />
              </div>
              <h1 className="text-4xl font-bold text-gradient mb-6">
                Service Request Submitted
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Thank you for contacting Salaam Funeral Services. Our
                compassionate team will reach out to you within 30 minutes to
                discuss your needs and provide immediate assistance.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="text-lg font-semibold mb-4">
                  What happens next?
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="bg-islamic-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <p className="text-gray-600">
                      Our team will contact you within 30 minutes
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-islamic-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <p className="text-gray-600">
                      We &339;ll discuss your specific needs and Islamic
                      requirements
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-islamic-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <p className="text-gray-600">
                      We&339;ll begin arrangements immediately upon your
                      approval
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-islamic">
                  <a href="tel:+15551234567">
                    <Phone className="mr-2" size={20} />
                    Call Us: (555) 123-4567
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/">Return to Home</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="pt-32 pb-20 bg-gradient-to-br from-islamic-50 to-gold-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              Request Service
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our compassionate team is here to help you during this difficult
              time. Please provide the information below so we can serve you
              with dignity and respect.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Contact Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-2 text-islamic-600" size={24} />
                    Contact Information
                  </CardTitle>
                  <CardDescription>
                    Please provide your contact details so we can reach you
                    immediately.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      {...form.register("firstName")}
                      className={
                        form.formState.errors.firstName ? "border-red-500" : ""
                      }
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.firstName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      {...form.register("lastName")}
                      className={
                        form.formState.errors.lastName ? "border-red-500" : ""
                      }
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.lastName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...form.register("phone")}
                      className={
                        form.formState.errors.phone ? "border-red-500" : ""
                      }
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...form.register("email")}
                      className={
                        form.formState.errors.email ? "border-red-500" : ""
                      }
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="relationship">
                      Relationship to Deceased *
                    </Label>
                    <Input
                      id="relationship"
                      placeholder="e.g., Son, Daughter, Spouse, Brother, Sister"
                      {...form.register("relationship")}
                      className={
                        form.formState.errors.relationship
                          ? "border-red-500"
                          : ""
                      }
                    />
                    {form.formState.errors.relationship && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.relationship.message}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Deceased Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 text-gold-600" size={24} />
                    Deceased Information
                  </CardTitle>
                  <CardDescription>
                    Information about the deceased to help us provide
                    appropriate services.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="deceasedName">
                      Full Name of Deceased *
                    </Label>
                    <Input
                      id="deceasedName"
                      {...form.register("deceasedName")}
                      className={
                        form.formState.errors.deceasedName
                          ? "border-red-500"
                          : ""
                      }
                    />
                    {form.formState.errors.deceasedName && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.deceasedName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="deceasedAge">Age at Time of Death *</Label>
                    <Input
                      id="deceasedAge"
                      type="number"
                      {...form.register("deceasedAge")}
                      className={
                        form.formState.errors.deceasedAge
                          ? "border-red-500"
                          : ""
                      }
                    />
                    {form.formState.errors.deceasedAge && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.deceasedAge.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="dateOfDeath">Date of Death *</Label>
                    <Input
                      id="dateOfDeath"
                      type="date"
                      {...form.register("dateOfDeath")}
                      className={
                        form.formState.errors.dateOfDeath
                          ? "border-red-500"
                          : ""
                      }
                    />
                    {form.formState.errors.dateOfDeath && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.dateOfDeath.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="placeOfDeath">Place of Death *</Label>
                    <Input
                      id="placeOfDeath"
                      placeholder="Hospital, Home, etc."
                      {...form.register("placeOfDeath")}
                      className={
                        form.formState.errors.placeOfDeath
                          ? "border-red-500"
                          : ""
                      }
                    />
                    {form.formState.errors.placeOfDeath && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.placeOfDeath.message}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Service Requirements */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="mr-2 text-islamic-600" size={24} />
                    Service Requirements
                  </CardTitle>
                  <CardDescription>
                    Tell us about the specific services you need.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="serviceType">Service Type *</Label>
                      <Select
                        onValueChange={(value) =>
                          form.setValue("serviceType", value)
                        }
                      >
                        <SelectTrigger
                          className={
                            form.formState.errors.serviceType
                              ? "border-red-500"
                              : ""
                          }
                        >
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-service">
                            Full Islamic Funeral Service
                          </SelectItem>
                          <SelectItem value="burial-only">
                            Burial Service Only
                          </SelectItem>
                          <SelectItem value="transportation">
                            Transportation Only
                          </SelectItem>
                          <SelectItem value="consultation">
                            Consultation & Planning
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {form.formState.errors.serviceType && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.serviceType.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="urgency">Urgency Level *</Label>
                      <Select
                        onValueChange={(value) =>
                          form.setValue("urgency", value)
                        }
                      >
                        <SelectTrigger
                          className={
                            form.formState.errors.urgency
                              ? "border-red-500"
                              : ""
                          }
                        >
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">
                            Immediate (Within 24 hours)
                          </SelectItem>
                          <SelectItem value="urgent">
                            Urgent (Within 48 hours)
                          </SelectItem>
                          <SelectItem value="standard">
                            Standard (3-5 days)
                          </SelectItem>
                          <SelectItem value="planning">Pre-planning</SelectItem>
                        </SelectContent>
                      </Select>
                      {form.formState.errors.urgency && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.urgency.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="specialRequirements">
                      Special Requirements or Requests
                    </Label>
                    <Textarea
                      id="specialRequirements"
                      placeholder="Please describe any special requirements, Islamic customs, or specific requests..."
                      rows={4}
                      {...form.register("specialRequirements")}
                    />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-semibold">
                      Additional Services
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="transportationNeeded"
                          checked={form.watch("transportationNeeded")}
                          onCheckedChange={(checked) =>
                            form.setValue("transportationNeeded", !!checked)
                          }
                        />
                        <Label htmlFor="transportationNeeded">
                          Transportation Services
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="counselingNeeded"
                          checked={form.watch("counselingNeeded")}
                          onCheckedChange={(checked) =>
                            form.setValue("counselingNeeded", !!checked)
                          }
                        />
                        <Label htmlFor="counselingNeeded">
                          Grief Counseling
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="cateringNeeded"
                          checked={form.watch("cateringNeeded")}
                          onCheckedChange={(checked) =>
                            form.setValue("cateringNeeded", !!checked)
                          }
                        />
                        <Label htmlFor="cateringNeeded">
                          Catering Services
                        </Label>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Information */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 text-gold-600" size={24} />
                    Payment Information
                  </CardTitle>
                  <CardDescription>
                    Budget and payment preferences (final costs will be
                    discussed during consultation).
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="estimatedBudget">Estimated Budget</Label>
                    <Select
                      onValueChange={(value) =>
                        form.setValue("estimatedBudget", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-2000">
                          Under &#8358; 2,000
                        </SelectItem>
                        <SelectItem value="2000-4000">
                          &#8358; 2,000 - &#8358; 4,000
                        </SelectItem>
                        <SelectItem value="4000-6000">
                          &#8358; 4,000 - &#8358; 6,000
                        </SelectItem>
                        <SelectItem value="6000-8000">
                          &#8358; 6,000 - &#8358; 8,000
                        </SelectItem>
                        <SelectItem value="over-8000">
                          Over &#8358; 8,000
                        </SelectItem>
                        <SelectItem value="discuss">
                          Prefer to discuss
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="paymentMethod">
                      Preferred Payment Method *
                    </Label>
                    <Select
                      onValueChange={(value) =>
                        form.setValue("paymentMethod", value)
                      }
                    >
                      <SelectTrigger
                        className={
                          form.formState.errors.paymentMethod
                            ? "border-red-500"
                            : ""
                        }
                      >
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="credit-card">Credit Card</SelectItem>
                        <SelectItem value="bank-transfer">
                          Bank Transfer
                        </SelectItem>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="check">Check</SelectItem>
                        <SelectItem value="insurance">Insurance</SelectItem>
                        <SelectItem value="payment-plan">
                          Payment Plan
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.paymentMethod && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.paymentMethod.message}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Submit */}
              <Card className="border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreedToTerms"
                        checked={form.watch("agreedToTerms")}
                        onCheckedChange={(checked) =>
                          form.setValue("agreedToTerms", !!checked)
                        }
                        className={
                          form.formState.errors.agreedToTerms
                            ? "border-red-500"
                            : ""
                        }
                      />
                      <div className="text-sm text-gray-600">
                        <Label
                          htmlFor="agreedToTerms"
                          className="cursor-pointer"
                        >
                          I agree to the{" "}
                          <a
                            href="/terms"
                            className="text-islamic-600 hover:underline"
                          >
                            Terms and Conditions
                          </a>{" "}
                          and{" "}
                          <a
                            href="/privacy"
                            className="text-islamic-600 hover:underline"
                          >
                            Privacy Policy
                          </a>
                          . I understand that this is a service request and
                          final arrangements will be confirmed during
                          consultation.
                        </Label>
                        {form.formState.errors.agreedToTerms && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.agreedToTerms.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        type="submit"
                        size="lg"
                        className="btn-islamic flex-1"
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? "Submitting..."
                          : "Submit Service Request"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        asChild
                        className="flex-1"
                      >
                        <a href="tel:+15551234567">
                          <Phone className="mr-2" size={20} />
                          Call for Immediate Help
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </form>
          </motion.div>
        </div>
      </main>
    </>
  );
}
