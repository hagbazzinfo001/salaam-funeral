// "use client";

// import { Header } from "@/components/header";
// import { Footer } from "@/components/footer";
// import { InheritanceCalculator } from "@/components/inheritance-calculator";
// import { ZakatCalculator } from "@/components/zakat-calculator";

// export default function ResourcesPage() {
//   return (
//     <>
//       <Header />
//       <main>
//         {/* Hero Section */}
//         <section className="pt-32 pb-20 bg-gradient-to-br from-islamic-50 to-gold-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center max-w-4xl mx-auto">
//               <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
//                 Islamic Resources
//               </h1>
//               <p className="text-xl text-gray-600 leading-relaxed">
//                 Educational resources, calculators, and guidance rooted in
//                 Islamic teachings to support you and your family during
//                 important life moments.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Calculators */}
//         <section className="py-20">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
//             <InheritanceCalculator />
//             <ZakatCalculator />
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }

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
import {
  Calculator,
  Book,
  Heart,
  ArrowRight,
  Download,
  ExternalLink,
} from "lucide-react";

const resources = [
  {
    icon: Book,
    title: "Islamic Inheritance Laws",
    description:
      "Comprehensive guide to Islamic inheritance rules and their practical application.",
    content:
      "Learn about the principles of inheritance in Islam, including the rights of heirs, distribution ratios, and special cases.",
    href: "/resources/inheritance",
    type: "Guide",
  },
  {
    icon: Calculator,
    title: "Inheritance Calculator",
    description:
      "Interactive tool to calculate inheritance shares according to Islamic law.",
    content:
      "Input estate details and family structure to get accurate inheritance calculations based on Sharia principles.",
    href: "/resources/inheritance-calculator",
    type: "Calculator",
  },
  {
    icon: Calculator,
    title: "Zakat Calculator",
    description:
      "Calculate your annual Zakat obligations with our comprehensive tool.",
    content:
      "Determine your Zakat on wealth, savings, gold, silver, and business assets according to Islamic guidelines.",
    href: "/resources/zakat-calculator",
    type: "Calculator",
  },
];

const additionalResources = [
  {
    title: "Grief Support Materials",
    description:
      "Islamic perspectives on grief, healing, and finding peace during loss.",
    downloadable: true,
  },
  {
    title: "Funeral Preparation Checklist",
    description:
      "Step-by-step guide for preparing Islamic funeral arrangements.",
    downloadable: true,
  },
  {
    title: "Dua and Prayers for the Deceased",
    description:
      "Collection of Islamic prayers and supplications for the departed.",
    downloadable: true,
  },
  {
    title: "Islamic End-of-Life Planning Guide",
    description:
      "Comprehensive guide to Islamic principles for end-of-life decisions.",
    downloadable: true,
  },
  {
    title: "Community Support Directory",
    description:
      "Local Islamic organizations and support groups in our service area.",
    downloadable: false,
  },
  {
    title: "Financial Assistance Programs",
    description:
      "Information about available financial aid for funeral services.",
    downloadable: false,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <main className="py-12">
        {/* Hero Section */}
        {/* <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Islamic <span className="text-green-600">Resources</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Educational resources, calculators, and guidance rooted in Islamic
            teachings to support you and your family during important life
            moments.
          </p>
        </div>
      </section> */}
        {/* Hero Section */}{" "}
        <section className="pt-32 pb-20 bg-gradient-to-br from-islamic-50 to-gold-50">
          {" "}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {" "}
            <div className="text-center max-w-4xl mx-auto">
              {" "}
              <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
                Islamic Resources
              </h1>{" "}
              <p className="text-xl text-gray-600 leading-relaxed">
                Educational resources, calculators, and guidance rooted in
                Islamic teachings to support you and your family during
                important life moments.
              </p>
            </div>{" "}
          </div>{" "}
        </section>
        {/* Main Resources */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Essential Islamic tools and educational content for inheritance,
                Zakat, and spiritual guidance
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg h-full"
                  >
                    <CardHeader className="pb-4">
                      <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                        <Icon className="h-7 w-7 text-green-600" />
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                          {resource.type}
                        </span>
                      </div>
                      <CardTitle className="text-2xl text-gray-900 group-hover:text-green-600 transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-base leading-relaxed">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0 flex flex-col flex-grow">
                      <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                        {resource.content}
                      </p>
                      <Button
                        asChild
                        className="bg-green-600 hover:bg-green-700 w-full"
                      >
                        <Link
                          href={resource.href}
                          className="flex items-center justify-center"
                        >
                          {resource.type === "Calculator"
                            ? "Open Calculator"
                            : "Read Guide"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
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
                Comprehensive library of Islamic guidance, support materials,
                and community information
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalResources.map((resource, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors leading-tight">
                        {resource.title}
                      </h3>
                      {resource.downloadable ? (
                        <Download className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors flex-shrink-0 ml-2" />
                      ) : (
                        <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors flex-shrink-0 ml-2" />
                      )}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {resource.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-green-50 group-hover:border-green-200 transition-all"
                    >
                      {resource.downloadable ? "Download PDF" : "View Resource"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Educational Content Preview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Islamic <span className="text-green-600">Education</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Our resources are carefully prepared by Islamic scholars and
                  legal experts to ensure accuracy and adherence to traditional
                  Islamic teachings while being accessible to modern families.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Scholarly reviewed content
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Practical application guides
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Updated for contemporary needs
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">
                      Available in multiple languages
                    </span>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Link href="/blog">
                    <Book className="mr-2 h-5 w-5" />
                    Explore Our Blog
                  </Link>
                </Button>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-8">
                <div className="text-center">
                  <Heart className="h-16 w-16 text-green-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Need Personal Guidance?
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our Islamic counselors and community leaders are available
                    to provide personalized guidance on religious matters,
                    inheritance questions, and spiritual support.
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-2 border-green-600 text-green-600 hover:bg-green-50"
                  >
                    <Link href="/contact">Schedule Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
