'use client';

import { motion } from 'framer-motion';
import { Heart, Users, MapPin, Clock, Phone, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    icon: Heart,
    title: 'Islamic Burial Services',
    description: 'Complete Islamic burial services following traditional practices with dignity and respect.',
    features: ['Ghusl (ritual washing)', 'Kafan (shrouding)', 'Janazah prayer', 'Burial arrangements'],
    color: 'islamic',
  },
  {
    icon: Users,
    title: 'Funeral Arrangements',
    description: 'Comprehensive funeral planning and coordination for all aspects of the service.',
    features: ['Memorial planning', 'Venue coordination', 'Guest management', 'Catering services'],
    color: 'gold',
  },
  {
    icon: MapPin,
    title: 'Transportation',
    description: 'Professional transportation services for the deceased and family members.',
    features: ['Ambulance services', 'Hearse rental', 'Family transport', 'International repatriation'],
    color: 'islamic',
  },
  {
    icon: Clock,
    title: '24/7 Emergency',
    description: 'Round-the-clock emergency services for immediate assistance when needed.',
    features: ['Immediate response', 'Emergency consultation', 'Crisis support', 'Rapid arrangements'],
    color: 'gold',
  },
  {
    icon: Phone,
    title: 'Grief Counseling',
    description: 'Professional counseling services to support families through difficult times.',
    features: ['Individual counseling', 'Family support', 'Group therapy', 'Islamic guidance'],
    color: 'islamic',
  },
  {
    icon: Shield,
    title: 'Documentation',
    description: 'Complete assistance with all necessary documentation and legal requirements.',
    features: ['Death certificates', 'Legal paperwork', 'Insurance claims', 'Government forms'],
    color: 'gold',
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive Islamic funeral services with compassion, dignity, and strict adherence to Islamic traditions. 
            Our experienced team is here to support you through every step of the process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto p-4 rounded-full mb-4 ${
                    service.color === 'islamic' ? 'bg-islamic-100' : 'bg-gold-100'
                  }`}>
                    <service.icon 
                      className={service.color === 'islamic' ? 'text-islamic-600' : 'text-gold-600'} 
                      size={32} 
                    />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          service.color === 'islamic' ? 'bg-islamic-400' : 'bg-gold-400'
                        }`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    variant="outline" 
                    className={`w-full ${
                      service.color === 'islamic' 
                        ? 'border-islamic-300 text-islamic-700 hover:bg-islamic-50' 
                        : 'border-gold-300 text-gold-700 hover:bg-gold-50'
                    }`}
                  >
                    <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Learn More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Button asChild size="lg" className="btn-islamic">
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}