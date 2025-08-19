"use client";

import { Users, Award, Heart, Shield, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState, useRef } from "react";
import {
  motion,
  useAnimation,
  animate,
  useMotionValue,
  useInView,
} from "framer-motion";

const managementTeam = [
  {
    name: "Dr. Sulaimon  Kabiawu",
    position: "Founder & CEO",
    image:
      "https://res.cloudinary.com/dr0qnjp1s/image/upload/v1755553049/download_mfsfct.jpg",
    experience: "20+ years",
    specialty: "Islamic Funeral Services",
    description:
      "Dr. Sulaimon founded Salaam Funeral Services with a vision to provide compassionate, Islamic-compliant funeral care to the community.",
  },
  {
    name: "Fatima Zahra",
    position: "Director of Operations",
    image:
      "https://res.cloudinary.com/dr0qnjp1s/image/upload/v1755553049/download_mfsfct.jpg",
    experience: "15+ years",
    specialty: "Operations Management",
    description:
      "Fatima ensures all operations run smoothly while maintaining the highest standards of Islamic practices and customer care.",
  },
  {
    name: "Sheikh Omar Hassan",
    position: "Religious Director",
    image:
      "https://res.cloudinary.com/dr0qnjp1s/image/upload/v1755553049/download_mfsfct.jpg",
    experience: "25+ years",
    specialty: "Islamic Jurisprudence",
    description:
      "Sheikh Omar provides religious guidance and ensures all services strictly adhere to Islamic funeral traditions and requirements.",
  },
  {
    name: "Dr. Aisha Rahman",
    position: "Grief Counselor",
    image:
      "https://res.cloudinary.com/dr0qnjp1s/image/upload/v1755553049/download_mfsfct.jpg",
    experience: "12+ years",
    specialty: "Psychology & Counseling",
    description:
      "Dr. Aisha provides professional grief counseling and emotional support to families during their most difficult times.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We treat every family with the utmost care, empathy, and understanding during their time of loss.",
  },
  {
    icon: Shield,
    title: "Islamic Compliance",
    description:
      "Strict adherence to Islamic funeral traditions and religious requirements in all our services.",
  },
  {
    icon: Clock,
    title: "Availability",
    description:
      "24/7 emergency services to ensure immediate assistance when families need us most.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "Commitment to providing the highest quality of service with attention to every detail.",
  },
];
type CounterProps = {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
};
function Counter({ from = 0, to, duration = 2, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(from);
  const motionValue = useMotionValue(from);

  // attach a ref to the span we want to watch
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, to, {
        duration,
        ease: "easeOut",
        onUpdate: (latest: number) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    } else {
      // reset back to "from" when scrolled out
      setCount(from);
      motionValue.set(from);
    }
  }, [isInView, to, duration, motionValue, from]);

  return (
    <motion.span ref={ref}>
      {count}
      {suffix}
    </motion.span>
  );
}

export default function AboutPage() {
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
                About Us
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                For over 15 years, Salaam Funeral Services has been serving the
                Islamic community with compassionate care, professional
                excellence, and unwavering commitment to Islamic traditions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Salaam Funeral Services was founded in 2009 with a simple
                    yet profound mission: to provide Islamic funeral services
                    that honor both the deceased and the grieving families with
                    the highest levels of compassion, dignity, and religious
                    compliance.
                  </p>
                  <p>
                    Our founder, Dr. Sulaimon Kabiawu, recognized the need for
                    specialized Islamic funeral services that truly understood
                    and respected the religious requirements and cultural
                    sensitivities of Muslim families during their most difficult
                    times.
                  </p>
                  <p>
                    Today, we are proud to be one of the most trusted Islamic
                    funeral service providers, having served over 500 families
                    across the region while maintaining our commitment to
                    excellence and Islamic principles.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-islamic-gradient p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                  <p className="text-lg leading-relaxed">
                    To provide compassionate, professional Islamic funeral
                    services that honor the deceased while supporting families
                    through their grief with dignity, respect, and strict
                    adherence to Islamic traditions and values.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
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
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape how we serve
                our community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full border-0 shadow-lg card-hover">
                    <CardHeader>
                      <div className="bg-islamic-100 p-4 rounded-full mx-auto mb-4 w-fit">
                        <value.icon className="text-islamic-600" size={32} />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Management Team */}
        <section className="py-20" id="team">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gradient mb-6">
                Management Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet our experienced leadership team dedicated to serving the
                Islamic community with excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {managementTeam.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full border-0 shadow-lg card-hover">
                    <CardHeader className="pb-4">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-islamic-200"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <p className="text-islamic-600 font-medium">
                        {member.position}
                      </p>
                      <div className="flex justify-center items-center space-x-4 text-sm text-gray-500 mt-2">
                        <span>{member.experience}</span>
                        <span>•</span>
                        <span>{member.specialty}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        {/* <section className="py-20 bg-islamic-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-islamic-100">Families Served</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                <div className="text-islamic-100">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-islamic-100">Emergency Service</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                <div className="text-islamic-100">Islamic Compliant</div>
              </div>
            </motion.div>
          </div>
        </section> */}
        <section className="py-20 bg-islamic-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter to={500} suffix="+" />
                </div>
                <div className="text-islamic-100">Families Served</div>
              </div>

              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter to={15} suffix="+" />
                </div>
                <div className="text-islamic-100">Years Experience</div>
              </div>

              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter to={24} suffix="/7" />
                </div>
                <div className="text-islamic-100">Emergency Service</div>
              </div>

              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <Counter to={100} suffix="%" />
                </div>
                <div className="text-islamic-100">Islamic Compliant</div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
